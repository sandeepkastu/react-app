const router=require('express').Router();
const Student=require('../models/studentform');


router.post('/api/student',async(req,res)=>{
    try{
        res.setHeader('content-type','application/x-www-form-urlencoded')
        const data =await Student.create(req.body);
        
        if(req.body.id&&req.body.name&&req.body.currentClass&&req.body.division){
                           res.status(200).json({
                               status:"success",
                               data
                               })
      }else{
        res.status(400).json({
               status:"error",
               message:"enter all details"
        })
      }

    }catch(e){
        res.status(500).json({
            status:"failed",
            message:e.message

        })

    }
})

module.exports=router;