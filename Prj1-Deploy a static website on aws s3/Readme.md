## AWS S3 Static Website Deployment

## What is S3?
Amazon S3 (Simple Storage Service) is a fully managed, highly scalable cloud storage service provided by AWS. It is used to store and retrieve any amount of data from anywhere on the web.

## Key Features:
Highly durable (99.999999999% durability)
Scalable and cost-effective
Secure with encryption and access policies
Can host static websites (HTML, CSS, JS)


Steps to Deploy a Static Website on S3

1. Create an S3 Bucket

Login to your AWS Management Console.
Go to S3 service.

Click Create bucket.
Give a unique bucket name (e.g., my-static-website-alisha).

Select a region close to your audience.
Uncheck Block all public access (we need the website to be public).
Click Create bucket.

2. Upload Website Files
Open your S3 bucket.
Go to the Objects tab.
Click Upload → Add files and select your HTML, CSS, JS files.
Click Upload.

3. Configure Bucket for Static Website Hosting

Open your bucket → Properties tab.
Scroll down to Static website hosting → Click Edit.
Select Enable.
Enter:
Index document: index.html
Error document (optional): error.html
Save changes.
Note the Bucket website endpoint URL. This is your website URL.

. Set Bucket Policy for Public Access

Go to Permissions tab → Bucket policy → Edit.

Add the following policy (replace YOUR_BUCKET_NAME with your bucket name):
```bash
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
    }
  ]
}
```

Save changes.

5. Access Your Static Website

Open the Bucket website endpoint URL in your browser.
Your static website should now be live!
