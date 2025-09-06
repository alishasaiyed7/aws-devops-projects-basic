#!/bin/bash
# Restore script for AWS EBS snapshot

SNAPSHOT_ID="snap-xxxxxxxxxxxxx"
AZ="us-east-1a"
INSTANCE_ID="i-xxxxxxxxxxxx"

NEW_VOLUME_ID=$(aws ec2 create-volume \
  --snapshot-id $SNAPSHOT_ID \
  --availability-zone $AZ \
  --query 'VolumeId' \
  --output text)

echo "✅ New Volume created: $NEW_VOLUME_ID"

# Attach the volume to EC2
aws ec2 attach-volume \
  --volume-id $NEW_VOLUME_ID \
  --instance-id $INSTANCE_ID \
  --device /dev/xvdf

echo "📌 Attached $NEW_VOLUME_ID to instance $INSTANCE_ID as /dev/xvdf"
