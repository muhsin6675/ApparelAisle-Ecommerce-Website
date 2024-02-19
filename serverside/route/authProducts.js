   const express=require('express')
   const router= express.Router();
   const Products= require("../Model/Productsschema");

   router.post("/Addproduct",async (req,res)=>{
    try {
    const  {name,category,image}=req.body;
    const products = new Products({
        name,category,image})
        await products.save()
        res.status(200).json({messege:"product added succesfully"})
        } catch (error) {
            console.log(error);
            res.status(500).send("error adding products"); 
        }  
});

module.exports=router;