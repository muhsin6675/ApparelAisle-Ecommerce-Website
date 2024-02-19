
const mongoose=require('mongoose')

const ProductsSchema =  mongoose.Schema(
    {
      name: { type: String, required: true},
      category: { type: String, required: true },
      image: { type: String, required: true },
    },
    { timestamps: true }
  );

  module.exports=mongoose.model('Products',ProductsSchema)