#!/bin/bash

# This script patches the Docusaurus website/siteConfig.js to:
# - Remove any cname or url parameter
# - Set the baseUrl to /<repository_name>
#
# Takes the GitHub repository name as input and must be executed in the project root folder

REPO_NAME=$1

USER_NAME=$2

echo "Patching repo $REPO_NAME ..."

BASE_URL="'\/$REPO_NAME\/',"

URL="'\/https:\/\/${USER_NAME}.github.io\/$REPO_NAME',"

sed -i "s/baseUrl:.*/baseUrl: $BASE_URL/" website/siteConfig.js

sed -i "s/url:.*/url: $URL/" website/siteConfig.js

USER_NAME="'${USER_NAME}',"
sed -i "s/organizationName:.*/organizationName: $USER_NAME/" website/siteConfig.js

sed -i '/cname:/d' website/siteConfig.js

echo "Done! $PWD/website/siteConfig.js updated!"

cat website/siteConfig.js