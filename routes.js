const express=require('express')
const router=express.Router()
const userController=require('./Users/userController')
const artistController=require('./Artists/artistController')
const deliveryController=require('./Delivery/deliveryController')


//user routes
router.post('/registerUser',userController.upload,userController.registerUser)
router.post('/loginUser',userController.loginUser)
router.post('/viewUserById/:id',userController.viewUserById)
router.post('/viewUsers',userController.viewUsers)
router.post('/editUserById/:id',userController.upload,userController.editUserById)
router.post('/editUserById/:id',userController.deleteUserById)
router.post('/forgotPwdUser',userController.forgotPwd)

//artist routes
router.post('/registerArtist',artistController.upload,artistController.registerArtist)
router.post('/loginArtist',artistController.loginArtist)
router.post('/viewArtistById/:id',artistController.viewArtistById)
router.post('/viewArtists',artistController.viewArtists)
router.post('/editArtistById/:id',artistController.upload,artistController.editArtistById)
router.post('/editArtistById/:id',artistController.deleteArtistById)
router.post('/forgotPwdArtist',artistController.forgotPwd)


//Delivery agent 
router.post('/registerdelivery',deliveryController.upload,deliveryController.registerdelivery)
router.post('/logindelivery',deliveryController.logindelivery)
router.post('/viewdeliveryById/:id',deliveryController.viewdeliveryById)
router.post('/viewdeliveryReqs',deliveryController.viewdeliveryReqs)
router.post('/editdeliveryById/:id',deliveryController.upload,deliveryController.editdeliveryById)
router.post('/deletedeliveryById/:id',deliveryController.deletedeliveryById)
router.post('/acceptDelReqs',deliveryController.acceptDelReqs)
router.post('/viewdeliverys',deliveryController.viewdeliverys)

module.exports=router
