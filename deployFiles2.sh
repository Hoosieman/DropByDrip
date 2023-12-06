#!/bin/bash

while getopts k:h:s: flag
do
    case "${flag}" in
        k) key=${OPTARG};;
        h) hostname=${OPTARG};;
        s) service=${OPTARG};;
    esac
done

if [[ -z "$key" || -z "$hostname" ]]; then
    printf "\nMissing required parameter.\n"
    printf "  syntax: deployFiles.sh -k <pem key file> -h <hostname> [-s <service>]\n\n"
    exit 1
fi

printf "\n----> Deploying files for ${service:-default} to $hostname with $key\n"


# Step 2
printf "\n----> Copy the distribution package to the target.\n"
if [ -z "$service" ]; then
    scp -r -i "$key" server.js index.html signup.js ubuntu@$hostname:/usr/share/caddy/
else
    scp -r -i "$key" "$service" ubuntu@$hostname:/usr/share/caddy/
fi
