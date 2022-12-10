const mongoose=require('mongoose');

const studentSchema= new mongoose.Schema({
    id:{type:Number, unique:true},
    name:String,
    currentClass:Number,
    division:String
})

const Student=mongoose.model('students',studentSchema);

module.exports=Student