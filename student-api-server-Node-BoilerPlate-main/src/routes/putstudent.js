const router=require('express').Router();
const Student=require('../models/studentform');



router.put('/api/student/:id',async(req,res)=>{

    try{
        res.setHeader('content-type','application/x-www-form-urlencoded');
        const data=await Student.updateOne({id:req.params.id},req.body);
            if(req.body.name&&req.body.currentClass&&req.body.division){
        
                                                res.status(200).json({
                                                   data
                                                   })
           }else{res.status(400).send('Enter required fields');}
    }catch(e){
        res.status(500).json({
            status:"failed",
            message:e.message
        })

    }

});

module.exports=router;