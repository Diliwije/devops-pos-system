const express=require('express');
const bodyParser=require('body-parser');
require('dotenv').config();
const mongoose=require('mongoose');

const app=express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT=process.env.SERVER_PORT || 3000;
const MONGO_URI=process.env.MONGO_URI || 'mongodb+srv://dilshanwijerathna426_db_user:d7cZp9k4VPPAucUa@pos-devops.4z0ljwd.mongodb.net/pos-system-devops?retryWrites=true&w=majority&appName=pos-devops';

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