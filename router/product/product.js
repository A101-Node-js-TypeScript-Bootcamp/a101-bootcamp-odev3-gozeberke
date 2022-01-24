const express=require('express')
let router =express.Router()

const productController=require('../../controllers/Product')

router.post('/',productController.addProduct)
router.get('/',productController.getAllProduct)

module.exports=router