#!/bin/bash

# This script downloads the current meeting attendance

# Checkout Git repo containing CSV data
git config --global user.email $GIT_CSV_USER_EMAIL >/dev/null
git config --global user.name $GIT_CSV_USER_NAME >/dev/null
git clone -q https://${GIT_CSV_USER}:${GIT_CSV_TOKEN}@${GIT_CSV_HOST}/${GIT_CSV_ORG}/${GIT_CSV_REPO}.git ${GIT_CSV_REPO}-checkout >/dev/null
cp -Rf ${GIT_CSV_REPO}-checkout/github-finos-meetings.csv metadata-tool
echo "${GIT_CSV_REPO} repo (with github-finos-meetings.csv) checked out"