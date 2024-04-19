const mongoose= require("mongoose");

const workSchema=mongoose.Schema({
   name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
   
    file:{
        type:Object,
       required:true
    }
});
module.exports=mongoose.model('artworks',workSchema)

