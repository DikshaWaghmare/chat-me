const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    postPicture:{
        type:String
    },
    postCaption:{
        type:String,
        trim:true,
        required:true
    },
    postLocation:{
        type:String,
        trim:true
    },
    postComments:{
        trim:true,
        type:Array,
        default:[]
    },
    postLike:{
        type:Number,
        default:0
    },
    postTags:{
        type:Array,
        default:[],
        trim:true
    },
    postBelongsTo:{
        type:String,
        required:true,
        trim:true,
        default:'mrriteshjangir@gmail.com'
    }
},{
    timestamps:true
});

module.exports=mongoose.model('posts',postSchema)