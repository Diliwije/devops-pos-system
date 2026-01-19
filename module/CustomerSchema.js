const mongoose=require('mongoose');

const CustomerSchema=new mongoose.Schema({
    name:{type:String, required:true},
    address:{type:String, required:true},
    salaray:{type:Number,required:true},
    contact:{type:String,required:true}

});
module.exports=mongoose.model('Customer',CustomerSchema)