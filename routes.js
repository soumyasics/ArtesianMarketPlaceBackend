const express=require('express')
const router=express.Router()
const userController=require('./Users/userController')


//user routes
router.post('/registerUser',userController.registerUser)
router.post('/loginUser',userController.loginUser)
router.post('/viewUserById/:id',userController.viewUserById)
router.post('/viewUsers',userController.viewUsers)
router.post('/editUserById/:id',userController.editUserById)
router.post('/editUserById/:id',userController.deleteUserById)
router.post('/forgotPwd',userController.forgotPwd)


module.exports=router
