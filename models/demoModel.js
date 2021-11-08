var mongoose = require('mongoose');

var demoSchema = new mongoose.Schema(
    {   
        firstName:{
            type: String,
            required:true,
            maxlength:32,
            trim:true
        },
        lastName:{
            type: String,
            maxlength:32,
            trim:true
        },
        email:{
            type:String,
            trim:true,
            required:true,
            unique:true
        },
    },
    {
        timestamps:true
    });
module.exports=mongoose.model('demo',demoSchema);