const express=require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const router = express.Router();
//import model
const Userschema=require("../Model/Userschema")

router.post("/register",async (req,res)=>{
    try {
    const  {username,email,password,phone}=req.body;
    const hashedpassword=await bcrypt.hash(password,10)
    const User=new Userschema({
        username:username,
        email:email,
        password:hashedpassword,
        phone:phone})
        await User.save()
        res.status(200).json({messege:"user registered"})
        } catch (error) {
            console.log(error);
            res.status(500).send("errorr"); 
        }  
});

//login 

router.post('/login',async (req,res)=>{
    try {
        const {email,password} = req.body 
        const user = await Userschema.findOne({email})
        if (!user){
            return res.status(201).json({error:"Login failed"})
        }
        const passwordMatch = await bcrypt.compare(password,user.password)
        if(!passwordMatch){
            return res.status(201).json({error:"Authentication failed"})
        }
        const token = jwt.sign({userId:user._id},"heifgh",{expiresIn:'1hr'})
        res.status(200).json({token,user})
    } catch (error) {
        res.status(500).json({error:'login failed'})
        console.log(error)
    }
})
        
            
        
       






module.exports= router ;