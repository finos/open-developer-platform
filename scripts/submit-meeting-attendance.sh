#!/bin/bash

# This script sumits the meeting attendance for the passed list of assignees

cd ${GIT_CSV_REPO}-checkout
echo "==== new entries..."
diff ../${GIT_CSV_REPO}-checkout/github-finos-meetings.csv github-finos-meetings.csv
cp -f ../${GIT_CSV_REPO}-checkout/github-finos-meetings.csv github-finos-meetings.csv
echo "end of new entries ===="

if [ "$ACTION" == "closed" ] || [ "$ACTION" == "labeled" ]; then
    cat ../metadata-tool/github-finos-meetings-add.csv >> github-finos-meetings.csv
elif [ "$ACTION" == "unlabeled" ]; then
    cp -f ../metadata-tool/github-finos-meetings-remove.csv github-finos-meetings.csv
fi

# Push the CSV file to Git
git add .
git commit -q -m "Submitting meeting attendance for ${REPO_NAME} repo"
git push -q -u origin ${GIT_CSV_BRANCH} >/dev/null
echo "Pushed changes into remote git repo"

# Cleaning up
rm -rf ../metadata
