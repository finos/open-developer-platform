#!/bin/bash

# This script generates the meeting attendance for the passed list of assignees

if [ "$ACTION" == "closed" ] || [ "$ACTION" == "labeled" ]; then
    ROSTER_ACTION="add"
elif [ "$ACTION" == "unlabeled" ]; then
    ROSTER_ACTION="remove"
fi

cat <<EOT >> metadata-tool/meeting-attendance.json
{
    "org": "${ORG_NAME}",
    "repo": "${REPO_NAME}",
    "issueNumber": "${ISSUE_NUMBER}",
    "date": "${MEETING_DATE}",
    "action": "${ROSTER_ACTION}"
}
EOT

echo "=== Generated meeting-attendance.json"
cat metadata-tool/meeting-attendance.json
echo "End meeting-attendance.json ==="

# Avoid metadata tool failure
export BITERGIA_USER="empty"
export BITERGIA_PASSWORD="empty"

# Append Meeting addendance data
cd metadata-tool
lein run -- gen-meeting-github-roster-data -m ../metadata
