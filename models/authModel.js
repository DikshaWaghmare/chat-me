var mongoose = require('mongoose');
const crypto = require('crypto');
const uuidv1 = require('uuid/v1');

var authSchema = new mongoose.Schema(
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
        bio:{
            type:String,
            trim:true
        },
        encPass:{
            type:String,
            required:true
        },
        device:{
            type:Array,
            default:[]
        },
        salt:String
    },
    {
        timestamps:true
    });

    authSchema
        .virtual("password")
        .set(function(password){
                this._password = password;
                this.salt = uuidv1();
                this.encPass=this.securePassword(password);
            })
        .get(function(){
            return this._password;
        });

    authSchema.method={

        authenticate: function(plainpassword){
            return this.securePassword(plainpassword)===this.encPass;
        },

        securePassword : function(plainpassword){
            if(!plainpassword) return "";
            try{
                return crypto
                        .createHmac('sha256',this.salt)
                        .update(plainpassword)
                        .digest("hex");
                } catch (err){
                    return "";
                }
        }
    };
module.exports=mongoose.model('auth',authSchema);

    