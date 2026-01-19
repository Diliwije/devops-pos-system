const mongoose=require('mongoose');
const ProductSchema=new mongoose.Schema({
   description:{type:String, required:true},
    unitPrice:{type:Number, required:true},
    qtyOnHand:{type:Number, required:true}

});

module.exports=mongoose.model('product',ProductSchema)