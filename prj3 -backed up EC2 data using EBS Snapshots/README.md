<<<<<<< HEAD
# 🚀 AWS Backup & Restore Project (EBS + S3)

## 📌 Project Overview
This project demonstrates how to back up and restore EC2 data using **AWS EBS Snapshots** and optionally export them to **S3** for long-term storage or migration.  
It simulates a **real-world disaster recovery** scenario where data is backed up from one EC2 instance and restored to another.

---

## 🛠️ Skills Covered
- AWS EC2
- EBS Volumes
- Snapshots
- S3 Storage
- AWS CLI
- Linux Commands (mount, format, permissions)

---

## ⚙️ Project Workflow
1. Launch EC2 instance and attach an additional EBS volume  
2. Format & mount the EBS volume  
3. Store data inside the volume  
4. Create a snapshot (backup) of the volume  
5. Restore the snapshot by creating a new volume and attaching it to another EC2 instance  
6. (Optional) Export snapshot to S3 for external storage  


---
## 🚀 Step-by-Step Implementation
Step 1: Launch EC2 Instance

Go to EC2 → Launch Instance

Choose Amazon Linux 2 or Ubuntu

Instance type: t2.micro (Free Tier)

Key pair: Select or create one

Security group: Allow SSH (22) from your IP

---  

## Step 2: Create and Attach an EBS Volume

EC2 → Volumes → Create Volume

Size: 2–4 GB

AZ: Must match EC2 instance

Type: General Purpose SSD (gp3)

Attach to EC2 instance as /dev/xvdf

## Step 3: Format & Mount the Volume

SSH into EC2:

```bash
ssh -i mykey.pem ec2-user@<EC2-PUBLIC-IP>

```
check disks:
```bash
lsblk
```

Format and mount:
```bash

sudo mkfs -t ext4 /dev/xvdf
sudo mkdir /data
sudo mount /dev/xvdf /data
df -h
```

Persist after reboot:
```bash

echo "/dev/xvdf /data ext4 defaults,nofail 0 2" | sudo tee -a /etc/fstab
```

## Step 4: Store Data in the Volume
```bash
cd /data
echo "EBS Snapshot Demo $(date)" > testfile.txt
ls -l
cat testfile.txt
```


## Step 5: Create a Snapshot

Go to EC2 → Volumes → Select Volume → Actions → Create Snapshot
Name it EBS-Backup-Snapshot

## Step 6: Restore Snapshot to Another Instance

Snapshots → Select Snapshot → Create Volume
Same AZ as target EC2
Attach to second EC2 as /dev/xvdf
SSH into second EC2 and mount:

```bash
lsblk
sudo mkdir /restore
sudo mount /dev/xvdf /restore
ls /restore
cat /restore/testfile.txt
```

## Step 7: (Optional) Export Snapshot to S3

Go to Snapshots → Select Snapshot → Actions → Export to Amazon S3
Choose S3 bucket & format (VMDK, VHD, RAW)

## 🧹 Cleanup

Unmount volume:
sudo umount /data


Delete attached volumes
Delete snapshots
Terminate EC2 instances
(If exported) Delete objects from S3


## 📌 Skills Demonstrated

EC2 & EBS Volume Management
Linux Disk Partitioning & Mounting
Data Persistence 
Snapshot Backup & Restore
Exporting to Amazon S3
Disaster Recovery Practices

## ✅ Project Outcome

Created an additional EBS volume and stored data
Took a snapshot backup of the volume
Restored snashot to another instance successfully
Learned how to export snapshots to S3 for long-term backup

## Author
Alisha Saiyed - System aadmin/AWS

