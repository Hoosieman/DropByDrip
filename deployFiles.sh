#!/bin/bash

while getopts k:h:s: flag
do
    case "${flag}" in
        k) key=${OPTARG};;
        h) hostname=${OPTARG};;
        s) service=${OPTARG};;
    esac
done

if [[ -z "$key" || -z "$hostname" || -z "$service" ]]; then
    printf "\nMissing required parameter.\n"
    printf "  syntax: deployFiles.sh -k <pem key file> -h <hostname> -s <service>\n\n"
    exit 1
fi

printf "\n----> Deploying files for $service to $hostname with $key\n"

# Step 1
printf "\n----> Clear out the previous distribution on the target.\n"
ssh -i "$key" ubuntu@$hostname "rm -rf services/${service}/public && mkdir -p services/${service}/public"

# Step 2
printf "\n----> Copy the distribution package to the target.\n"
find . -type f -exec sh -c '
    file="$1"
    remote_path="ubuntu@$hostname:services/$service/public/${file#./}"
    local_md5=$(md5sum "$file" | awk "{print \$1}")
    remote_md5=$(ssh -i "$key" ubuntu@$hostname "md5sum '$remote_path'" 2>/dev/null | awk "{print \$1}")
    if [ "$local_md5" != "$remote_md5" ]; then
        scp -i "$key" "$file" "$remote_path"
    fi
' sh {} \;


