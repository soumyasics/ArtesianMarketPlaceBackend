const express=require('express')
const router=express.Router()
const userController=require('./Users/userController')
const artistController=require('./Artists/artistController')


//user routes
router.post('/registerUser',userController.upload,userController.registerUser)
router.post('/loginUser',userController.loginUser)
router.post('/viewUserById/:id',userController.viewUserById)
router.post('/viewUsers',userController.viewUsers)
router.post('/editUserById/:id',userController.editUserById)
router.post('/editUserById/:id',userController.deleteUserById)
router.post('/forgotPwdUser',userController.forgotPwd)

//artist routes
router.post('/registerArtist',artistController.upload,artistController.registerArtist)
router.post('/loginArtist',artistController.loginArtist)
router.post('/viewArtistById/:id',artistController.viewArtistById)
router.post('/viewArtists',artistController.viewArtists)
router.post('/editArtistById/:id',artistController.editArtistById)
router.post('/editArtistById/:id',artistController.deleteArtistById)
router.post('/forgotPwdArtist',artistController.forgotPwd)

module.exports=router
