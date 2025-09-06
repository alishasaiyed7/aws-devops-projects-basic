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
