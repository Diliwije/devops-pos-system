const express=require('express');
const bodyParser=require('body-parser');
require('dotenv').config();
const mongoose=require('mongoose');

const app=express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const UserRoutes=require('./routes/UserRoutes')
const ProductRoutes=require('./routes/ProductRoutes')
const CustomerRoutes=require('./routes/CustomerRoutes')
const OrderRoutes=require('./routes/OrderRoutes')



const PORT=process.env.SERVER_PORT || 3000;
const MONGO_URI=process.env.MONGO_URI;

mongoose.connect(MONGO_URI).then(()=> {
    console.log('Mongo db connected!...');

    app.listen(PORT, () => {
        console.log(`server started And running on Port ${PORT}`)
    });
}).catch(err => {
    console.log('Db error'+err)
})

app.get('/test',(req,resp)=>{
    return resp.json({'message':'test route success'});
});

app.use('/api/v1/users',UserRoutes) //// http://localhost:3000/api/v1/users/signup
app.use('/api/v1/customers',CustomerRoutes)
app.use('/api/v1/products',ProductRoutes)
app.use('/api/v1/orders',OrderRoutes)