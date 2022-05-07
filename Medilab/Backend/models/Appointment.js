const mongoose=require('mongoose')
  const { Schema } = mongoose;

  const AppointmentSchema = new Schema({
      name:{
       type:String,
       required:true,
      },
      email:{
type:String,
required:true,
      },
      phone:{
type:String,
required:true,
      },
      date:{
            type:Date,
            default:Date.now(),
      },
      department:{
        type:String,
       required:true,
      },
      message:{
        type:String,
        required:true,
      },
      doctor:{
          type:String,
          required:true
      },
      accepted:{
          type:Number,
          default:0
      },
      active:{
        type:Number,
        default:0
      }
    
  });

  
//   module.exports=mongoose.model('user',UserSchema);
const Admin=mongoose.model('Appointment',AppointmentSchema);
// Myuser naam ka database ban jaayega
// User.createIndexes();

module.exports=Admin;