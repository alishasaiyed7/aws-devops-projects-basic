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


  tags = {
    Name = "Terraform-EC2"
  }
}
