const express=require('express')
const router=express.Router()
const userController=require('./Users/userController')
const artistController=require('./Artists/artistController')
const deliveryController=require('./Delivery/deliveryController')
const artwork=require('./Artists/ArtWorks/artWorkController')


//user routes
router.post('/registerUser',userController.upload,userController.registerUser)
router.post('/loginUser',userController.loginUser)
router.post('/viewUserById/:id',userController.viewUserById)
router.post('/viewUsers',userController.viewUsers)
router.post('/editUserById/:id',userController.upload,userController.editUserById)
router.post('/deleteUserById/:id',userController.deleteUserById)
router.post('/forgotPwdUser',userController.forgotPwd)

//artist routes
router.post('/registerArtist',artistController.upload,artistController.registerArtist)
router.post('/loginArtist',artistController.loginArtist)
router.post('/viewArtistById/:id',artistController.viewArtistById)
router.post('/viewArtists',artistController.viewArtists)
router.post('/editArtistById/:id',artistController.upload,artistController.editArtistById)
router.post('/deleteArtistById/:id',artistController.deleteArtistById)
router.post('/forgotPwdArtist',artistController.forgotPwd)


//Delivery agent 
router.post('/registerdelivery',deliveryController.upload,deliveryController.registerdelivery)
router.post('/logindelivery',deliveryController.logindelivery)
router.post('/viewdeliveryById/:id',deliveryController.viewdeliveryById)
router.post('/viewdeliveryReqs',deliveryController.viewdeliveryReqs)
router.post('/editdeliveryById/:id',deliveryController.upload,deliveryController.editdeliveryById)
router.post('/deletedeliveryById/:id',deliveryController.deletedeliveryById)
router.post('/acceptDelReqs/:id',deliveryController.acceptDelReqs)
router.post('/viewdeliverys',deliveryController.viewdeliverys)


//art works
router.post('/addartworks',artwork.upload,artwork.addartworks)
router.post('/editArtWorkById/:id',artwork.upload,artwork.editArtWorkById)
router.post('/deleteArtWorkById/:id',artwork.deleteArtWorkById)
router.post('/viewArtistById/:id',artwork.viewArtistById)
router.post('/viewArtworks',artwork.viewArtworks)


module.exports=router
