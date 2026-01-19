const User=require('../module/UserSchema');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const e = require("express");
const JWT_SECERET=process.env.JWT_SECERET || 'hbsdfhbvhjsgdhzkvferhuurohg';

const signup =async(req,resp)=>{
    try {
        const {fullName,email,password}=req.body;
        const existingUser=await User.findOne({email});
        if (existingUser) return resp.status(409).json({'message':"User already exists"});

        const hashedPassword=await bcrypt.hash(password,10);
        const savedUser=await User.create({fullName,email,hashedPassword})
        resp.status(201).json({'message':'User Created Successfully',data:savedUser});

    }catch (e){
resp.status(500).json({'message':"Internal server error",error:e.message});
    }
};

const login =async(req,resp)=> {
    try {
        const {email, password} = req.body;
        const existingUser = await User.findOne({email});
        if(!existingUser) return resp.status(404).json({'message':"User not found"})

        const isPasswordValid=await bcrypt.compare(password,existingUser.passwordHash);
        if (!isPasswordValid) return resp.status(401).json({'message':"Invalid password"})

        const token=jwt.sign({email:existingUser.email},JWT_SECERET,{expiresIn: '5h'})
        resp.status(200).json({'message':"Login Successful",token:token});
    } catch(e)
    {
        resp.status(500).json({'message': "Sign In Failed server error", error: e.message});
    }

}

module.exports = {signup,login};