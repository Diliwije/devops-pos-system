const CustomerSchema=require('../module/CustomerSchema');

const createCustomer =async (req,resp)=>{
    try {
        const {name,address,salaray,contact}=req.body;
        const createdCustomer=new CustomerSchema({
            name,address,salaray,contact
        });
        await createdCustomer.save();
        resp.status(201).json({'message':'Customer Created Successfully'});

    } catch (e) {
        resp.status(500).json({'message':"SignUp Error",error:e.message});
    }
}
const updateCustomer =async (req,resp)=>{

    try {
        const {name,address,salaray,contact}=req.body;
        const updatedCustomer=CustomerSchema.findByIdAndUpdate({_id:req.params.id},
            {name,address,salaray,contact},
            {new:true});

        if(!updatedCustomer) return resp.status(500).json({'message':"Try Again"})
        resp.status(201).json({'message':'Customer Updated Successfully'});

    } catch (e) {
        resp.status(500).json({'message':"SignUp Error",error:e.message});
    }

}
const deleteCustomer =async (req,resp)=>{
    try {
        const deletedCustomer=await CustomerSchema.findByIdAndDelete({_id:req.params.id});

        if (!deletedCustomer) return resp.status(500).json({'message':"Customer Not Found"})
        resp.status(200).json({'message':'Customer Deleted Successfully'});
}catch (e){
    resp.status(500).json({'message':"Internal Server Error",error:e.message});
    }
}


const loadAllCustomers =async (req,resp)=>{

    try {
        const customers=CustomerSchema.find();
        resp.status(200).json({'message':'Customers Found Successfully',data:customers});
        } catch (e){
        resp.status(500).json({'message':"Internal Server Error",error:e.message});

    }

}

const findCustomerById =async (req,resp)=>{
    try {
        const selectedCustomer=CustomerSchema.findOne({_id:req.params.id})
        if (!selectedCustomer) return resp.status(500).json({'message':"Customer Not Found"})
        resp.status(200).json({'message':'Customer Found Successfully',data:selectedCustomer});

    } catch (e) {
        resp.status(500).json({'message':"Internal Server Error",error:e.message});
    }
}

module.exports={createCustomer,updateCustomer,deleteCustomer,loadAllCustomers,findCustomerById};