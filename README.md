# Introduction
Hi web devs!  This tutorial is intended for a beginner who wants to get a MERN server up and running from scratch on Windows. The MongoDB website also has a useful ai chatbot for any specific questions regarding the Windows CL commands for MONGOSH and `mongod` as a Windows service.

# Prerequisites
1) Installation of MongoDB as service

```
Download the installer (.msi) => https://www.mongodb.com/try/download/community
  Run the .msi
   1.01) Next, next, next all the way to finish
   1.02) Just use the default location
   1.03) By default the .msi will install MongoDB Compass and install as a Windows Service (and run)
   1.04) At the end make sure to approve as Administator on Windows
   1.05) The MongoDB Compass installation can hang for 10 minutes (this is normal)
   e) If for some reason MongoDB Compass doesn't install here is the link
     e.01) => https://www.mongodb.com/products/tools/compass
   fin) Once complete, Compass will launch and click the connect button, to ensure everything is running
     fin.01) Upon a successful connect, all collections will be displayed. This is all for now.
```   
2) Postman Installation
```
Download link => https://www.postman.com/downloads/
```
3) Knowledge of Gitbash

4) Completed the MERN--client Tutorial

# Tutorial
1) I'm assuming you already have a React_Project_1 folder, so cd into that

2) `$ mkdir server`

3) `$ cd server && npm init -y`
   This command will automitically generate a package.json for us which points to index.js by default

4) `$ npm i mongoose express cors`
   This command will install mongoose and express, which is our database and cors for additional debugging purposes

5) `$ touch home-routes.js stats-model.js index.js`
   This command will create empty files with the proper naming conventions for our app

6) In a seperate window you can open the MERN--Server-from-scratch repo and I would recommend coding line by line instead of copy and pasting.
    
7) Youtube video, indept explanation => https://www.youtube.com/watch?v=DWwDCNuHt4U
    
8) To launch the server:
   `$ node index.js`
   or
   `$ nodemon`
   You should see 'connected to the db'

9) If the `home-routes.js` and `stats-model.js` are configured correctly, then in MongoDBCompass the DB folder should be created by default with the collection inside.
        
