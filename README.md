# Introduction

# Prerequisites
    1) Installation of Mongodb as service
        1.01) Install Mongodb with this link =>
        1.02) Follow these instructions => TBA
    2) Postman Installation
        1.01) Download link =>
    3) Knowledge of Gitbash
    4) Completed the MERN--client tutorial

# Tutorial
    1) I'm assuming you already have a React_Project_1 folder, so cd into that
    2) $ mkdir server
    3) $ cd server && npm init -y
        1.01) This command will automitically generate a package.json for us which points to index.js by default
    4) $ npm i mongoose express cors
        1.01) This command will install mongoose and express, which is our database and cors for additional debugging purposes
    5) $ touch home-routes stats-model.js index.js
        1.01) This command will create empty files with the proper naming conventions for our app
    6) In a seperate window you can open the MERN--Server-from-scratch repo and I would recommend coding line by line instead of copy and pasting.
    7) Shortly, I will have a link to a youtube video going into further explanation
    8) Use `$ nodemon` or `$ node index.js ` to launch the server.
        1.01) You should see 'connected to the db'
        
