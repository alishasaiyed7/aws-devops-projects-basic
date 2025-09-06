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

## 📜 Commands Used

### 🔹 Format & Mount EBS
```bash
lsblk                              # Check attached volumes
sudo mkfs -t ext4 /dev/xvdf        # Format EBS volume
sudo mkdir /data                   # Create mount point
sudo mount /dev/xvdf /data         # Mount the volume
sudo chown ec2-user:ec2-user /data # Fix permission

aws ec2 create-snapshot --volume-id vol-xxxx --description "Backup snapshot"

---🔹 Restore Snapshot
aws ec2 create-volume --snapshot-id snap-xxxx --availability-zone us-east-1a
aws ec2 attach-volume --volume-id vol-yyyy --instance-id i-zzzz --device /dev/xvdf
sudo mkdir /restore
sudo mount /dev/xvdf /restore
ls /restore   # Verify data

🔹 Export Snapshot to S3 (Optional)
aws ec2 export-snapshot \
  --snapshot-id snap-xxxx \
  --destination-region us-east-1 \
  --s3-bucket my-backup-bucket \
=======
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

## 📜 Commands Used

### 🔹 Format & Mount EBS
```bash
lsblk                              # Check attached volumes
sudo mkfs -t ext4 /dev/xvdf        # Format EBS volume
sudo mkdir /data                   # Create mount point
sudo mount /dev/xvdf /data         # Mount the volume
sudo chown ec2-user:ec2-user /data # Fix permission

aws ec2 create-snapshot --volume-id vol-xxxx --description "Backup snapshot"

---🔹 Restore Snapshot
aws ec2 create-volume --snapshot-id snap-xxxx --availability-zone us-east-1a
aws ec2 attach-volume --volume-id vol-yyyy --instance-id i-zzzz --device /dev/xvdf
sudo mkdir /restore
sudo mount /dev/xvdf /restore
ls /restore   # Verify data

🔹 Export Snapshot to S3 (Optional)
aws ec2 export-snapshot \
  --snapshot-id snap-xxxx \
  --destination-region us-east-1 \
  --s3-bucket my-backup-bucket \
>>>>>>> d15dd70f992ee1e824281dc1375f83caa9618e9f
  --disk-image-format VMDK