const ProductSchema=require('../module/ProductSchema');

const createProduct =async (req,resp)=>{
    try {
        const {description,unitPrice,qtyOnHand}=req.body;
        const createdProduct=new ProductSchema({
            description,unitPrice,qtyOnHand
        });
        await createdProduct.save();
        resp.status(201).json({'message':'Product Created Successfully'});

    } catch (e) {
        resp.status(500).json({'message':"SignUp Error",error:e.message});
    }
}

const updateProduct =async (req,resp)=>{

    try {
        const {description,unitPrice,qtyOnHand}=req.body;
        const updatedProduct=await ProductSchema.findByIdAndUpdate({_id:req.params.id},
            {description:description,unitPrice:unitPrice,qtyOnHand:qtyOnHand},
            {new:true});

        if(!updatedProduct) return resp.status(500).json({'message':"Try Again"})
        resp.status(201).json({'message':'Product Updated Successfully'});

    } catch (e) {
        resp.status(500).json({'message':"SignUp Error",error:e.message});
    }

}

const updateProductQty =async (req,resp)=>{

    try {
        const {qtyOnHand}=req.body;
        const updatedProduct= await ProductSchema.findByIdAndUpdate({_id:req.params.id},
            {qtyOnHand:qtyOnHand},
            {new:true});

        if(!updatedProduct) return resp.status(500).json({'message':"Try Again"})
        resp.status(201).json({'message':'Product Updated Successfully'});

    } catch (e) {
        resp.status(500).json({'message':"SignUp Error",error:e.message});
    }

}


const deleteProduct =async (req,resp)=>{
    try {
        const deletedProduct=await ProductSchema.findByIdAndDelete({_id:req.params.id});

        if (!deletedProduct) return resp.status(500).json({'message':"Product Not Found"})
        resp.status(200).json({'message':'Product Deleted Successfully'});
    }catch (e){
        resp.status(500).json({'message':"Internal Server Error",error:e.message});
    }
}

const loadAllProducts =async (req,resp)=>{

    try {
        const Products=await ProductSchema.find();
        resp.status(200).json({'message':'Products Found Successfully',data:Products});
    } catch (e){
        resp.status(500).json({'message':"Internal Server Error",error:e.message});

    }

}

const findProductById =async (req,resp)=>{
    try {
        const selectedProduct=await ProductSchema.findOne({_id:req.params.id})
        if (!selectedProduct) return resp.status(500).json({'message':"Product Not Found"})
        resp.status(200).json({'message':'Product Found Successfully',data:selectedProduct});

    } catch (e) {
        resp.status(500).json({'message':"Internal Server Error",error:e.message});
    }
}

module.exports={createProduct,updateProduct,deleteProduct,loadAllProducts,findProductById,updateProductQty};