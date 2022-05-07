const express=require('express');
const req = require('express/lib/request');

const router=express.Router();

const Blog=require('../models/blog');
router.post('/createblogpost',

async (req,res)=>{


    // let temp=await Blog.findOne(req.body);
    

    // if(temp!=null)
    // {
    //     return res.send({success:false,message:"You are posting an  another blog with same content"});
    // }


    await Blog.create({
        title:req.body.title,
        description:req.body.description,
        content:req.body.content,
        catagory:req.body.catagory,
        tags:req.body.tags,
        blogimage:req.body.blogimage

    
    }).then(response=>{
        res.json({
            success:true,
            data:response
        })
    })

    
}



)



router.get('/getblogpost',

async (req,res)=>{


    let temp=await Blog.find();

    res.send({
        success:true,
        data:temp
    })
}
)
router.post('/deleteblogpost',

async (req,res)=>{


    let temp=await Blog.deleteOne({_id:req.body.id});

    res.send({
        success:true,
        msg:"has been deleted succefully"
    })
}
)
module.exports=router;