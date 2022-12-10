const express = require('express')
const bodyParser = require("body-parser");
const mongoose=require('mongoose');
//const {mongoClient}=require('mongodb');
const studentArray=require('./InitialData');

// import routers 
const getRoute=require('./routes/getstudent');
const postRoute=require('./routes/poststudent');
const putRoute=require('./routes/putstudent');
const deleteRoute=require('./routes/deletestudent');


const port = 8080

const app = express()
app.use(express.urlencoded());

mongoose.connect('mongodb://localhost/School',{useNewUrlParser:true,useUnifiedTopology:true},()=>{console.log('connected to DB');});

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here



app.use('/',getRoute);
/* 
app.get('/api/student',(req,res)=>{
    try{
        res.json({
            status:"success",
            studentArray
        })

    }catch(e){
        res.status(500).json({
            status:"failed",
            message:e.message
        })

    }
});  */

app.use('/',postRoute);
app.use('/',putRoute);
app.use('/',deleteRoute);

app.listen(port, () => console.log(`App listening on port ${port}!`))

//module.exports = app;   