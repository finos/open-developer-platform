#!/bin/bash

# This script generates the repo issues

if [ -z $ISSUE_TITLE ]; then
  ISSUE_TITLE="[FINOS_PROJECT_BLUEPRINT] - Fixes to apply - test"
fi
export ISSUE_TITLE=$ISSUE_TITLE

# Generate list of repos that already have an issue created with $ISSUE_TITLE
rm -rf /tmp/existing-issues.txt
curl -s -G "https://api.github.com/search/issues" --data-urlencode "q='$ISSUE_TITLE' in:title org:finos state:open"  -H "Accept: application/vnd.github.preview" | jq '.items[] | (.repository_url/"/" | (.[-2] + "/" + .[-1]))' | tr -d '"' | sort | uniq > /tmp/existing-issues.txt

# Each validation item is parsed and, unless there's already an open issue with the same title, it will create a new one, using the "message" field as issue text.
cat metadata-tool/finos-repo-validation.json | jq -r '.[]| [.org, .["repo-name"]] | @tsv' |
  while IFS=$'\t' read -r ORG REPO; do
    export ORG=$ORG
    export REPO=$REPO
    ISSUE_EXIST=`cat /tmp/existing-issues.txt | grep "$ORG/$REPO"`
    if [ -z "$ISSUE_EXIST" ]; then
        PAYLOAD=`cat finos-repo-validation.json | jq -r '.[] | select(.org == env.ORG and .["repo-name"] == env.REPO) | { "title": env.ISSUE_TITLE, "body": .message, "labels":["quality checks"] }'`
        ISSUE_DESCRIPTION=`cat /tmp/$ORG-$REPO-issue-description.txt`
        echo "Creating issue for repo $ORG/$REPO; text generated into /tmp/$ORG-$REPO-issue-description.txt"
        echo "Still disabled! Waiting for community announcement"
        # curl -v -u admin:$GITHUB_TOKEN -d "$PAYLOAD" https://api.github.com/repos/$ORG/$REPO/issues
    fi
  done
