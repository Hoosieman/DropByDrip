To ssh into AWS server: ssh -i ~/cs260/realkey.pem ubuntu@44.218.26.102
(using a private key, grants access to files located on your created server)

To deply into the simon sub domain: ./deployFiles.sh -k ~/keys/production.pem -h yourdomain.click -s simon
(Takes changes made to project and deploys them to production server)





