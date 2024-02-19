const express=require('express');
const jwt=require("jsonwebtoken");
const bcrypt=require('bcrypt');
const router= express.Router();
const Admin=require('../Model/Adminschema')
//register admin
router.post("/Adminregister",async (req,res)=>{
    try {
    const  {username,email,password}=req.body;
    const hashedpassword=await bcrypt.hash(password,10)
    const admin = new Admin({
        username:username,
        email:email,
        password:hashedpassword})
        await admin.save()
        res.status(200).json({messege:"user registered"})
        } catch (error) {
            console.log(error);
            res.status(500).send("errorr"); 
        }  
});

//login admin
router.post('/Adminlogin',async (req,res)=>{
    try {
        const {email,password} = req.body 
        const admin = await Admin.findOne({email})
        if (!admin){
            return res.status(201).json({error:"Login failed"})
        }
        const passwordMatch = await bcrypt.compare(password,admin.password)
        if(!passwordMatch){
            return res.status(201).json({error:"Authentication failed"})
        }
        const token = jwt.sign({adminId:Admin._id},"CODE",{expiresIn:'1hr'})
        res.status(200).json({token,Admin})
    } catch (error) {
        res.status(500).json({error:'failed'})
        console.log(error)
    }
})




module.exports=router

