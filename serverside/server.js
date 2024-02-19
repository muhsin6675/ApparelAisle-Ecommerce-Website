const express=require('express');
const mongoose = require('mongoose');
const dotenv=require('dotenv').config();
const port=process.env.PORT || 3000;
const app=express();
const  authRoute =require( './route/authRoute')
const authAdmin =require('./route/authAdmin')
const authProducts=require('./route/authProducts')
const cors=require("cors");
app.use(cors())
app.use(express.json());
app.use('/auth', authRoute);
app.use('/auth',authAdmin)
app.use('/auth',authProducts)

mongoose.connect('mongodb://localhost:27017/reg',{useNewUrlParser : true , useUnifiedTopology : true})
     .then(()=>{
     console.log('DB CONNECTED')
    })
     .catch((err)=>{
        console.log(err)
    });

    app.listen(port,(req,res)=>{
        console.log("Server is running"+port)
     })