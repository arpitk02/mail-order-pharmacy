# mail-order-pharmacy
Connect to EC2 instance


Chmod 400 filename.cer
ssh -I "filename.cer" IP address 

ssh -i "auth-pd1.cer" ec2-user@ec2-35-154-170-23.ap-south-1.compute.amazonaws.com


2nd 

Install java on EC2 instance
sudo yum install java-1.8.0-openjdk

3rd 

Copy jar file into the EC2 instance
scp -i  "filename.cer" filename.jar ec2-user@IP ADDRESS:~ 


OPEN IT IN NEW TERMINAL
scp -i "auth-pd1.cer" authorization.jar ec2-user@ec2-3-108-250-111.ap-south-1.compute.amazonaws.com:~



Front -end

ssh -i "auth-pd1.cer" ec2-user@ec2-35-154-170-23.ap-south-1.compute.amazonaws.com
scp -i "auth-pd1.cer" directory/* ec2-user@ec2-3-108-250-111.ap-south-1.compute.amazonaws.com:~/

Sudo yum install nginx

Cd /usr/share/nginx
Cd html
sudo systemctl start nginx