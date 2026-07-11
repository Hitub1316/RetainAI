package com.churn.backend.service;

import java.util.List;
import java.util.HashMap;
import java.util.Map;

import java.io.BufferedReader;
import java.io.InputStreamReader;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;

import org.springframework.web.multipart.MultipartFile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.churn.backend.model.Customer;
import com.churn.backend.repository.CustomerRepository;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository repository;

    private final String AGENT_URL = "http://localhost:5000/analyze";

    // ML + Save
    public Map<String, Object> getMLPrediction(Customer customer) {

        RestTemplate restTemplate = new RestTemplate();

        Map<String, Object> request = Map.of(
                "tenure",          customer.getTenure(),
                "MonthlyCharges",  customer.getMonthlyCharges(),
                "TotalCharges",    customer.getTotalCharges(),
                "Contract",        customer.getContract(),
                "InternetService", customer.getInternetService(),
                "PaymentMethod",   customer.getPaymentMethod()
        );

        Map<String, Object> response =
                restTemplate.postForObject(AGENT_URL, request, Map.class);

        // Prediction
        Map<String, Object> predictionMap =
                (Map<String, Object>) response.get("prediction");

        Number pred = (Number) predictionMap.get("prediction");
        Number prob = (Number) predictionMap.get("probability");

        customer.setPrediction(pred.intValue());
        customer.setProbability(prob.doubleValue());

        // Risk Level
        customer.setRiskLevel(pred.intValue() == 1 ? "HIGH" : "LOW");

        // Explanation
        Map<String, Object> explanationMap =
                (Map<String, Object>) response.get("explanation");
        customer.setExplanation(explanationMap.get("reasons").toString());

        // Recommendation
        Map<String, Object> recommendationMap =
                (Map<String, Object>) response.get("recommendation");
        customer.setRecommendation(recommendationMap.get("recommendations").toString());

        repository.save(customer);

        return response;
    }

    public Customer saveCustomer(Customer customer) {
        return repository.save(customer);
    }

    public List<Customer> getAllCustomers() {
        return repository.findAll();
    }

    // Stats API
    public Map<String, Object> getStats() {

        long total    = repository.count();
        long highRisk = repository.countByPrediction(1);
        long lowRisk  = repository.countByPrediction(0);

        double churnRate     = (total == 0) ? 0 : (highRisk * 100.0 / total);
        double retentionRate = (total == 0) ? 0 : (lowRisk  * 100.0 / total);

        return Map.of(
                "totalCustomers", total,
                "highRisk",       highRisk,
                "lowRisk",        lowRisk,
                "churnRate",      Math.round(churnRate     * 100.0) / 100.0,
                "retentionRate",  Math.round(retentionRate * 100.0) / 100.0
        );
    }

    // CSV Upload
    public int saveCSV(MultipartFile file) throws Exception {
        int count = 0;
        try (
                BufferedReader reader = new BufferedReader(
                        new InputStreamReader(file.getInputStream()));
                CSVParser csvParser = new CSVParser(
                        reader,
                        CSVFormat.DEFAULT
                                .withFirstRecordAsHeader()
                                .withIgnoreHeaderCase()
                                .withTrim())
        ) {
            for (CSVRecord record : csvParser) {

                Customer customer = new Customer();

                customer.setName(record.get("name"));
                customer.setEmail(record.get("email"));
                customer.setCompany(record.get("company"));
                customer.setPhone(record.get("phone"));
                customer.setTenure(Integer.parseInt(record.get("tenure")));
                customer.setMonthlyCharges(Double.parseDouble(record.get("monthlyCharges")));
                customer.setTotalCharges(Double.parseDouble(record.get("totalCharges")));
                customer.setContract(Integer.parseInt(record.get("contract")));
                customer.setInternetService(Integer.parseInt(record.get("internetService")));
                customer.setPaymentMethod(Integer.parseInt(record.get("paymentMethod")));
                
                // Call ML pipeline which also saves the customer
                getMLPrediction(customer);
                count++;
            }
        }
        return count;
    }
}