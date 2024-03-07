//require library
const mongoose = require('mongoose');

// connect to db
mongoose.connect("mongodb://127.0.0.1:27017/contacts_list_db");

// acquire the connection (to check is it is sucessfull)
const db=mongoose.connection;

// checking error
db.on('error',console.error.bind(console,'error connecting to the db!!!'));

// up and runing then print the message
db.once('open',function(){
    console.log('Successfully connected to the database');
});