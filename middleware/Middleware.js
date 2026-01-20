const jwt=require('jsonwebtoken');
const User=require('../module/UserSchema');
const bcrypt=require('bcrypt');

const authMiddleware=(req,resp,next)=>{
    try{

        const authHeader=req.headers['authorization'];
        if(!authHeader) resp.status(401).json({'message':'AuthHeader Missing '});

        const token=authHeader.split(' ')[1];
        if(!token) resp.status(401).json({'message':'Token Missing '});

        const decode=jwt.verify(token,process.env.JWT_SECERET);
        req.email=decode.email;
        next();

    } catch (e){
        resp.status(401).json({'message':'Invalid Or Expired Token'});
    }
}

module.exports=authMiddleware;