const mongoose=require('mongoose')
  const { Schema } = mongoose;

  const BlogSchema = new Schema({
     

    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true,
    },
    
    catagory:{
        type:String,
        required:true,
    },
    
    tags:{
        type:String,
        required:true,
    },
    blogimage:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        default:Date.now()
    }
    
  });

  
//   module.exports=mongoose.model('user',UserSchema);
const blog=mongoose.model('Blog',BlogSchema);
// Myuser naam ka database ban jaayega
// User.createIndexes();

module.exports=blog;