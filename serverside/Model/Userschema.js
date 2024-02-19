const mongoose = require("mongoose")



const Userschema = mongoose.Schema({

    
    username: { type:String, 
    required: [true, "Name required"] },

    phone:{type:Number,
    required:[true,"phone number required"]},

    email:{type:String,unique:true,
    required:[true,"email required"]},

    password:{type:String,
        required:[true,"password required"]},
},
{timestamps:true }     
)
module.exports=mongoose.model('Userschema',Userschema)