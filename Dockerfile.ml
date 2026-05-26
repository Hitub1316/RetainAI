FROM python:3.10-slim

WORKDIR /app

COPY . .

EXPOSE 5000

CMD ["python", "agent/agent_api.py"]