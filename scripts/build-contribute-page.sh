#!/bin/bash

# This script creates a docs/contributing.md file (using Docusaurus content structure) with the contents from .github/CONTRIBUTING.md . The first line of CONTRIBUTING.md will be skipped, since Docusaurus will be managing the page title.

CONTRIBUTING_SRC=".github/CONTRIBUTING.md"
CONTRIBUTING_DEST="docs/contributing.md"
TMP_FILE=/tmp/page-prefix.tmp

rm -f $TMP_FILE
echo '---
id: contributing
title: Contributing
---
' > $TMP_FILE

if [ -f "$CONTRIBUTING_SRC" ]; then
    sed 1d $CONTRIBUTING_SRC >> $TMP_FILE
    cp -f $TMP_FILE $CONTRIBUTING_DEST
    rm -f $TMP_FILE
fi