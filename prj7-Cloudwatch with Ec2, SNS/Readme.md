# 📊 AWS CloudWatch Agent Monitoring Project

## 📌 Overview
This project demonstrates how to:
- Install and configure the **Amazon CloudWatch Agent** on an EC2 instance  
- Collect **custom metrics** (CPU, Memory, Disk usage)  
- Create **CloudWatch Alarms** to alert on high CPU usage  
- Test alarms by generating artificial load using the `stress` tool  

This project is useful for practicing AWS monitoring and logging, and can be extended for real-world DevOps use cases.

---

## ⚙️ Setup Steps

### 1. Launch EC2 Instance
- AMI: Amazon Linux 2  
- Attach IAM Role with policy: **CloudWatchAgentServerPolicy**  
- Security Group: allow SSH (port 22)  

### 2. Install CloudWatch Agent
```bash
sudo yum install -y amazon-cloudwatch-agent
```
## 3. Configure CloudWatch Agent

Create config file at /opt/aws/amazon-cloudwatch-agent/bin/config.json:
```bash
{
  "metrics": {
    "namespace": "CWAgent",
    "metrics_collected": {
      "mem": {
        "measurement": [
          {"name": "mem_used_percent", "unit": "Percent"}
        ],
        "metrics_collection_interval": 60
      },
      "disk": {
        "measurement": [
          {"name": "used_percent", "unit": "Percent"}
        ],
        "metrics_collection_interval": 60,
        "resources": ["*"]
      }
    }
  }
}
```
Start the agent:
```bash

sudo systemctl enable amazon-cloudwatch-agent
sudo systemctl start amazon-cloudwatch-agent
```

Check logs:
```bash
tail -n 20 /opt/aws/amazon-cloudwatch-agent/logs/amazon-cloudwatch-agent.log
```

## 4. Verify Metrics in CloudWatch

Go to CloudWatch → Metrics → CWAgent → InstanceId, ImageId, InstanceType
You should see metrics like mem_used_percent, disk_used_percent

## 5. Create CloudWatch Alarm

Metric: CPUUtilization (or mem_used_percent)
Threshold: e.g., >= 70% for 2 datapoints
Action: send notification via SNS topic (Email)

## 6. Generate Load to Test Alarm

Install stress:
```bash
sudo amazon-linux-extras install epel -y
sudo yum install -y stress

stress --cpu 2 --timeout 300

```

## 🙌 Author

Alisha Saiyed – System Admin / AWS
