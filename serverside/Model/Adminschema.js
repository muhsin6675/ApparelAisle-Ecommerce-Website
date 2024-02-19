const mongoose = require("mongoose")



const Adminschema = mongoose.Schema({

    
    username: { type:String, 
    required: [true, "Name required"] },
    email:{type:String,unique:true,
    required:[true,"email required"]},
    password:{type:String,
        required:[true,"password required"]},
},
{timestamps:true }                   
)
module.exports=mongoose.model('Adminschema',Adminschema)