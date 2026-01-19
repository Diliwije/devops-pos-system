const mongoose=require('mongoose')

const OrderSchema=new mongoose.Schema({
    date:{type:String, required:true},
    totalCost:{type:Number, required:true},
    products:{type:Array,required:true},
    customer:{type:Object,required:true}
});

module.exports = mongoose.model('Order',OrderSchema)