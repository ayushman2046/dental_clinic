const mongoose = require('mongoose');


const mognoUrl="mongodb://localhost:27017/KrishDentalClinic?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
// const mognoUrl="mongodb+srv://samir7:qXnssWVlKjOpxJLl@cluster0.juazp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


const connectToMongo=()=>{
    mongoose.connect(mognoUrl,()=>{
        console.log("Mongoose connect successfully");
    })
}


module.exports=connectToMongo;