var mongoose = require('mongoose');

var authSchema = new mongoose.Schema(
    {   
        profilePic:{
            type: String,
        },
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
        emailId:{
            type:String,
            trim:true,
            required:true,
            unique:true
        },
        bioData:{
            type:String,
            trim:true
        },
        Password:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true
    });

module.exports=mongoose.model('auth',authSchema);

    