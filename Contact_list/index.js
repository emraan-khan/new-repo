const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

// getting mongo db in our project
const db=require('./config/mongoose')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());

app.use(express.static('assets'));

// app.use(function(req, res, next){
//     console.log("middleware 1");
//     // Perform tasks here
//     // For example: Logging, authentication, etc.
//     next();
// });


var contactList = [
    {
        name: 'Imran',
        phone: '8930205678',
    },
    {
        name: 'dummy',
        phone: '1212121212',
    },
    {
        name: 'yummy',
        phone: '3232323323',
    },
];

app.get('/', function (req, res) {
    return res.render('home', { title: 'I am Iron!', Contact_List: contactList });
});

app.get('/play', function (req, res) {
    return res.render('practice', { title: 'Playground!', ul: '[5,4,3,2,1]' });
});

app.post('/create-contact',function(req,res){
    console.log(req.body);
    contactList.push(req.body);
    return res.redirect('back');
});


app.get('/delete-contact/',function(req,res){
    console.log(req.query)
    console.log(req.query.phone)
   const index= contactList.findIndex((item)=> item.phone==req.query.phone)
   if(index != -1){
    contactList.splice(index,1);
    return res.redirect('back');
   }
   return;
})


app.listen(port, function (err) {
    if (err) {
        console.log('Error : ', err);
        return;
    }
    console.log('Yup! Server is running on port : ', port);
});
