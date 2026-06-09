FROM python:3.10-slim

WORKDIR /app

COPY . .

RUN pip install flask flask-cors

EXPOSE 7000

CMD ["python", "agent_api.py"]