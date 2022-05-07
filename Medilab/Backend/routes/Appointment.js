const express=require('express');

const router=express.Router();
const Appointment=require('../models/Appointment')// import User database as Myuser

const { body, validationResult } = require('express-validator');// localhost/api/auth/creatuser
router.post('/appointment',[
    body('name').isLength({ min: 5 }),
    body('email').isEmail(),

],
//validation end

async (req,res)=>{
    console.log(req.body)

    




// if this function reture bad request 
// when authentication in not good
const errors =   validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({success:false, message:"some error has been occured" });
    }


    const temp=await Appointment.findOne({
      email:req.body.email,
    })

    if(temp)
    {   

       return res.send({success:false,message:"This email is already exist"});

    }
    await Appointment.create({
        name: req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        department:req.body.department,
        message:req.body.message,
        doctor:req.body.doctor,
        date:req.body.date

        
      }).then(appointment => res.json({success:true,appointment}));

  
}),
router.get('/getappointment',async(req,res)=>{


    let temp=await Appointment.find();


    if(temp==null)
    {
        res.send({
            success:false,
            msg:"Nothing found"
        })
    }
    else
    {
        res.send({
            success:true,
            data:temp
        })
    }
})
router.post('/updateappointment',async(req,res)=>{


    let ans=await Appointment.updateOne({_id:req.body.id},{
        $set:{
          accepted:req.body.flag1,
          active:req.body.flag2
  
        }
      }
  
  
    
    )
  
  
     res.send({
       success:true,
       msg:"Successfully update"
     })
  
})



module.exports=router;
