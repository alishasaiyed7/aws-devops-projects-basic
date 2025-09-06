<<<<<<< HEAD
# Project 2: Apache Web Server on AWS EC2

## 📌 Project Overview
In this project, I launched an **AWS EC2 instance (Ubuntu)**, configured secure access using **key pairs and security groups**, and installed the **Apache Web Server** to host a demo webpage.  
This project gave me hands-on experience with **EC2, Linux, networking, and web server configuration**.

---

## 🚀 Steps Performed

1. **Launched an EC2 instance**
   - Chose Ubuntu 22.04 AMI
   - Created a new key pair (`test-key.pem`)
   - Configured security group to allow:
     - Port **22 (SSH)**
     - Port **80 (HTTP)**

2. **Connected to the EC2 instance**
   ```bash
   ssh -i test-key.pem ubuntu@<public-ip>
   
3. **Installed Apache Web Ssrver**
   sudo apt update
    sudo apt install apache2 -y

4. **Verified installation**

Started Apache service: sudo systemctl start apache2

Checked service status: systemctl status apache2

Accessed demo page via: http://<EC2-public-ip>

**🛠️ Skills Learned**

AWS EC2 basics (launch, connect, manage instances)

Linux command line

Security Groups & Key Pairs

Apache Web Server setup

Cloud Networking fundamentals

=======
# Project 2: Apache Web Server on AWS EC2

## 📌 Project Overview
In this project, I launched an **AWS EC2 instance (Ubuntu)**, configured secure access using **key pairs and security groups**, and installed the **Apache Web Server** to host a demo webpage.  
This project gave me hands-on experience with **EC2, Linux, networking, and web server configuration**.

---

## 🚀 Steps Performed

1. **Launched an EC2 instance**
   - Chose Ubuntu 22.04 AMI
   - Created a new key pair (`test-key.pem`)
   - Configured security group to allow:
     - Port **22 (SSH)**
     - Port **80 (HTTP)**

2. **Connected to the EC2 instance**
   ```bash
   ssh -i test-key.pem ubuntu@<public-ip>
   
3. **Installed Apache Web Ssrver**
   sudo apt update
    sudo apt install apache2 -y

4. **Verified installation**

Started Apache service: sudo systemctl start apache2

Checked service status: systemctl status apache2

Accessed demo page via: http://<EC2-public-ip>

**🛠️ Skills Learned**

AWS EC2 basics (launch, connect, manage instances)

Linux command line

Security Groups & Key Pairs

Apache Web Server setup

Cloud Networking fundamentals

>>>>>>> d15dd70f992ee1e824281dc1375f83caa9618e9f
