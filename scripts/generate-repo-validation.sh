#!/bin/bash

# This script generates the repo validation

# Avoid metadata tool failure
export BITERGIA_USER="empty"
export BITERGIA_PASSWORD="empty"

# Append Meeting addendance data
cd metadata-tool
lein run -- check-project-repos -m ../metadata
