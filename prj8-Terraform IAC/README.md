## 🔹 What is Terraform?

Terraform is an Infrastructure as Code (IaC) tool made by HashiCorp.
Instead of manually clicking in AWS Console to create servers, databases, or S3 buckets, you write code (.tf files) that describes your infrastructure.
Then Terraform will automatically create, update, or destroy those resources for you.
Think of it like “automation for cloud setup”.

✅ Example:
Instead of opening AWS and launching an EC2 manually, you just write:

resource "aws_instance" "web" {
  ami           = "ami-123456"
  instance_type = "t2.micro"
}

and Terraform will create the EC2 for you.

## 🔹 What is S3?

Amazon S3 (Simple Storage Service) is a cloud storage service where you can store:
Files (images, videos, backups, logs)
Static websites (like HTML/CSS/JS)
Application data

✅ Think of it as Google Drive but for developers and apps, with much higher scalability, durability, and security.

## 🔹 Why are we doing this project?

This project combines Terraform + AWS to show real-world DevOps automation skills:
Automate infrastructure → You’re learning to use Terraform to spin up resources instead of clicking in the AWS console. This is a core DevOps skill.
Provision EC2 + S3 → These are the most common AWS services:
EC2 → Virtual machine to run your Node.js app.
S3 → Storage bucket for data or static files.
Deploy Node.js App → Instead of just creating servers, you’re also deploying an application automatically (via user-data or PM2). This shows end-to-end automation.
Resume Benefit → You’ll be able to say:
“Automated provisioning of AWS EC2 + S3 using Terraform, enabling reproducible and scalable infrastructure setup.”

# Terraform AWS Infrastructure Automation 🚀

## 📌 Project Overview
This project demonstrates **Infrastructure as Code (IaC)** using **Terraform** to provision AWS resources automatically.  
We set up:
- An **EC2 instance** (to host a Node.js application)  
- An **S3 bucket** (for object storage)  

By using Terraform, the infrastructure is **reproducible, scalable, and automated** instead of being created manually in the AWS console.

---

## 🛠️ Tools & Technologies
- **Terraform** → Infrastructure as Code (IaC)  
- **AWS EC2** → Virtual server for running Node.js app  
- **AWS S3** → Cloud storage for static files/backups  
- **Node.js + PM2** → Simple application deployed on EC2  

---

## ⚙️ Steps Performed

### 1️⃣ Install Terraform
Download Terraform and add it to your system PATH.  
Verify installation:
```bash
terraform -v
```

### 2️⃣ Configure AWS CLI

Provide your AWS credentials:
```bash
aws configure
```

Enter:

AWS Access Key ID
AWS Secret Access Key
Default region (e.g., ap-south-1)
Output format (json)

### 3️⃣ Write Terraform Code (main.tf)

Define AWS provider and region
Create an S3 bucket
Create an EC2 instance with a user-data script to install Node.js and run the app

```bash
provider "aws" {
  region = "us-east-1" # Change to your region
}

# Create an S3 bucket
 resource "aws_s3_bucket" "mybucket145" {
  bucket = "my-terraform-bucket-12345-alishaaa"
}

# Create an EC2 instance with user-data
resource "aws_instance" "web" {
  ami           = "ami-0360c520857e3138f" # Example Amazon Linux 2 AMI
  instance_type = "t2.micro"
  subnet_id     = "subnet-06522f7690ffe0353"
  key_name      = "test-key" # Replace with your key pair

  user_data = <<-EOF
    #!/bin/bash
    udo apt update -y
    sudo apt install -y git curl build-essential

    # Install Node.js 18
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs

    # PM2
    sudo npm install -g pm2

    # Go to home directory
    cd /home/ubuntu

    # Clone app repo (replace with your GitHub repo URL)
    git clone https://github.com/GettingFunky/users-app-nodejs.git
    cd users-app-nodejs

    # Install dependencies
    npm install

    # Create server.js if not exists
    cat <<EOT > server.js
const app = require('./app');
const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => console.log('Server running on port', port));
EOT

    # Start app with PM2
    pm2 start server.js --name app
    pm2 save
    pm2 startup systemd -u ubuntu --hp /home/ubuntu
  EOF

  tags = {
    Name = "Terraform-EC2"
  }
}
```

### 4️⃣ Initialize Terraform
```bash
terraform init
```

### 5️⃣ Validate & Plan
```bash
terraform validate
terraform plan
```

### 6️⃣ Apply the Infrastructure
```bash
terraform apply -auto-approve
```

### 7️⃣ Verify Resources

Check EC2 in AWS console → copy the public IP
Check S3 bucket in AWS console
Access the Node.js app via the EC2 Public IP
```bash
http://yourpublicIp:3000
```

### 8️⃣ Destroy Infrastructure (optional)
```bash
terraform destroy -auto-approve
```


## Note 

This project has a clone of MOngoo DB app so if you face any issue Please make bwlow changes

1. logging to your EC2 -> cd /home/ubuntu -> cd user-app-nodejs ->cd logger
   sudo Chmod +777 logger.js and then comment everything in the file
2. sudo +777 server.js (if not there create a file )
     ``bash

   const app = require('./app');  // your exported app
const port = process.env.PORT || 3000;

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});

   ```

Then run your app via PM2:
```bash
pm2 start server.js --name app
pm2 save
pm2 startup systemd -u ubuntu --hp /home/ubuntu
```

## ✅ Key Learning

Hands-on with Terraform & AWS
Automated infrastructure setup
Deployed a sim
Managed app lifecycle using PM2

This project demonstrates how to combine a Node.js backend with a simple frontend and API documentation. It is a great starting point for expanding into a full-featured web application.

## Author
Alisha Saiyed - System Admin/AWS

