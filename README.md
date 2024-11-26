# Application
TMS - Task Management System

# Application Service 
TMS Rest Data Access

# Version
Current version is 1.0.0

# Description
This codebase handles all the database interacts needed for the TMS application, this uses prisma ORM to connect with the database for this to work a Postgress Database should be given.

# Tools
```Node – V18.16.0 
Microsoft Visual Studio Code – V1.83.1
pgAdmin - v7.8
postgreSQL - v16.0
Postman – V10.19.7
``` 

# Tables 
```Activity
Priority
Severity
Status
Task
User
```

# Config
This file holds all the necessary connections for the Data Access Layer to operate, specifically for the Database.

# API List  input format
```Create  - { "data":{},"filter":{}}
Read    - {"filter":{},"fields":{},"page":{},"limit":{},"sort":{}}
ReadOne - PrimaryID passed in the header
Update  - {"filter":{},"fields":{}}
Delete  - PrimaryID passed in the header
```
# Commands
Make sure to replace the develop branch with your feature branch name
Please use this below commands to clone the code

```yml
git clone https://goveindia@dev.azure.com/goveindia/Gloud-Academy/_git/TMS-REST-DATA-ACCESS -b {branch-name}
```

To install the required NPM packages run the following command
```yml
npm install
```
To build the application use the following command

```yml
npm run build
```

To run the service run the following command
```yml
npm run local
```


# Dependencies
The Gateway-Layer receives input and forwards the request to the Data-Access-Layer and then the Data-Access-Layer passes the data to the database.
```
[Gateway-Layer]<->[Data-Access-Layer]<->[Database]
```
