const orderSchema = require("./orderSchema")

const addOrder = (req, res) => {

let date = new Date()
    const art = new orderSchema({
        userid: req.body.userid,
        artid: req.body.artid,
      date:date,
        artistId: req.body.artistId
    })
    art.save().then(data => {
        res.json({
            status: 200,
            msg: "Inserted successfully",
            data: data
        })
    }).catch(err => {
        res.json({
            status: 500,
            msg: "Data not Inserted",
            Error: err
        })
    })
}
// Add cart -- finished


//View all cart

const viewOrderByUserid = (req, res) => {
    orderSchema.find({userid:req.params.id}).populate('artistId').populate('artid')
        .then(data => {
            if (data.length > 0) {
                res.json({
                    status: 200,
                    msg: "Data obtained successfully",
                    data: data
                })
            } else {
                res.json({
                    status: 200,
                    msg: "No Data obtained "
                })
            }
        }).catch(err => {
            res.json({
                status: 500,
                msg: "Data not Inserted",
                Error: err
            })
        })

}


const deleteOrderById=(req,res)=>{

    orderSchema.findByIdAndDelete({_id:req.params.id}).exec()
    .then(data=>{
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
    addOrder,
    deleteOrderById,
    viewOrderByUserid
  }