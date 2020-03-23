#!/bin/bash

# This script generates the repo issues

generate_post_data()
{
  cat <<EOF
{
  "title": "$ISSUE_TITLE",
  "body": "$ISSUE_DESCRIPTION"
}
EOF
}

if [ -z $ISSUE_TITLE ]; then
  ISSUE_TITLE="[FINOS_PROJECT_BLUEPRINT] - Fixes to apply"
fi

rm -rf /tmp/existing-issues.txt

# Generate list of repos that already have an issue created with $ISSUE_TITLE
curl -s -G "https://api.github.com/search/issues" --data-urlencode "q='$ISSUE_TITLE' in:title org:finos"  -H "Accept: application/vnd.github.preview" | jq '.items[] | (.repository_url/"/" | (.[-2] + "/" + .[-1]))' | tr -d '"' | sort | uniq > /tmp/existing-issues.txt

cat metadata-tool/finos-repo-validation.json | jq -r '.[]| [.org, .["repo-name"]] | @tsv' |
  while IFS=$'\t' read -r ORG REPO; do
    ISSUE_EXIST=`cat /tmp/existing-issues.txt | grep "$ORG/$REPO"`
    if [ -z "$ISSUE_EXIST" ]; then
        cat finos-repo-validation.json | jq -r '.[] | select(.org == env.ORG and .["repo-name"] == env.REPO) | .message' > /tmp/$ORG-$REPO-issue-description.txt
        echo "Creating issue for repo $ORG/$REPO; text generated into /tmp/$ORG-$REPO-issue-description.txt"
        echo "Still disabled! Waiting for community announcement"
        # curl -d "$(generate_post_data)" https://api.github.com/repos/$ORG/$REPO/issues
        # echo curl -d "$(generate_post_data)" https://api.github.com/repos/$ORG/$REPO/issues
        echo --------
    fi
  done