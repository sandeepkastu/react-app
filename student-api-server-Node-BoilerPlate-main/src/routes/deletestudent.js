const router=require('express').Router();
const Student=require('../models/studentform');

router.delete('/api/student/:id',async(req,res)=>{
    try{
        const data2=await Student.find({id:req.params.id});
        const data= await Student.deleteOne({id:req.params.id});
        
        if(data2.length){
             res.status(200).json({
              data
           })
      }else{res.status(404).send('Invalid id');}
    }catch(e){
        res.status(500).json({
            status:"failed",
            message:e.message
        })

    }
})

module.exports=router;