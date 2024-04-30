const mongoose= require("mongoose");

const orderSchema=mongoose.Schema({
   userid:{
        type:String,
        required:true,
        ref:'users'
    },
    artid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'artworks'
    },
   
    date:{
        type:Object,
       required:true
    },
    artistId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'artists'
    }
});
module.exports=mongoose.model('orders',orderSchema)

