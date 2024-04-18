const artworks=require('./artworkSchema')
const multer=require('multer')

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single("image");
//Artist Registration 

const addartworks=(req,res)=>{


    const art=new artworks({
      name:req.body.name,
      price:req.body.price,
      file:req.file
    })
    artworks.save().then(data=>{
        res.json({
            status:200,
            msg:"Inserted successfully",
            data:data
        })
    }).catch(err=>{
        res.json({
            status:500,
            msg:"Data not Inserted",
            Error:err
        })
    })
}
// Registration -- finished


  //View all works
  
  const viewArtworks=(req,res)=>{
    artworks.find().exec()
    .then(data=>{
      if(data.length>0){
      res.json({
          status:200,
          msg:"Data obtained successfully",
          data:data
      })
    }else{
      res.json({
        status:200,
        msg:"No Data obtained "
    })
    }
  }).catch(err=>{
      res.json({
          status:500,
          msg:"Data not Inserted",
          Error:err
      })
  })
  
  }
  
  // view Artists finished
  
  
  //update work by id
  const editArtWorkById=(req,res)=>{
  
    
      
    artworks.findByIdAndUpdate({_id:req.params.id},{
        name:req.body.name,
        price:req.body.price,
        file:req.file
      })
  .exec().then(data=>{
    res.json({
        status:200,
        msg:"Updated successfully"
    })
  }).catch(err=>{
    res.json({
        status:500,
        msg:"Data not Updated",
        Error:err
    })
  })
  }
// view work by id
  const viewArtistById=(req,res)=>{
    artworks.findById({_id:req.params.id}).exec()
    .then(data=>{
      console.log(data);
      res.json({
          status:200,
          msg:"Data obtained successfully",
          data:data
      })
    
  }).catch(err=>{
    console.log(err);
      res.json({
          status:500,
          msg:"No Data obtained",
          Error:err
      })
  })
  
  }
  
  const deleteArtWorkById=(req,res)=>{

    artworks.findByIdAndDelete({_id:req.params.id}).exec()
    .then(data=>{
    emps=data
      console.log(data);
      res.json({
          status:200,
          msg:"Data removed successfully",
          data:data
      })
    
  }).catch(err=>{
    console.log(err);
      res.json({
          status:500,
          msg:"No Data obtained",
          Error:err
      })
  })
  
  }


  module.exports={
    addartworks,
    editArtWorkById,
    upload,
    deleteArtWorkById,
    viewArtworks,
    viewArtistById
  }