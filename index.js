const express = require('express');
app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

mongoose = require('mongoose');
mongoose.set('debug',true);
mongoose.set('strictQuery', false);

const cors = require('cors'); app.use(cors())
const PORT = 3030;
const MONGO = 'mongodb://localhost:27017/ExampleProject';

async function connecting(){
    try {
        await mongoose.connect(MONGO)
        console.log('Connected to the DB')
    } catch ( error ) {
        console.log('ERROR: Seems like your DB is not running, please start it up !!!');
}}connecting()

app.use('/', require('./home-routes.js')) ;

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
