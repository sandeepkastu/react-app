const router =require('express').Router();
const Student=require('../models/studentform');



router.get('/api/student',async(req,res)=>{
    try{

        const data=await Student.find()
        res.status(200).json({
            success:"success",
            data})
        

    }catch(e){
        res.status(500).json({
            status:"failed",
            message:e.message
        })

    }
});


router.get('/api/student/:id',async(req,res)=>{
    try{
         
         const data= await Student.find({id:req.params.id});
         //console.log(data.length);
         if(data.length){res.status(200).json({//0=false , 1=true
             status:"success",
             data
         })
     }else{
         res.status(404).send('enter valid id')
     }
 
     }catch(e){
         res.status(500).json({
             status:"failed",
             message:e.message
         })
 
     }
 })

module.exports=router;