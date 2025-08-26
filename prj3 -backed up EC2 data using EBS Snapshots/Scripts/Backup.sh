
# 📄 scripts/backup.sh
```bash
#!/bin/bash
# Backup script for AWS EBS volume

VOLUME_ID="vol-xxxxxxxxxxxxx"
DESCRIPTION="Automated backup snapshot"

SNAPSHOT_ID=$(aws ec2 create-snapshot \
  --volume-id $VOLUME_ID \
  --description "$DESCRIPTION" \
  --query 'SnapshotId' \
  --output text)

echo "✅ Snapshot created successfully: $SNAPSHOT_ID"

