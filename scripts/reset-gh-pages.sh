#!/bin/bash

# This script removes all contents except ./website from the current folder.

for f in ./* ; do
    if [ "$f" != "./website" ]
    then echo "Removing $f" ; rm -rf $f
    fi
done