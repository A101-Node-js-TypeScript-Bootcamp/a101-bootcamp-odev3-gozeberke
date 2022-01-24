const express=require('express')
let router =express.Router()

const productController=require('../../controllers/Product')

router.post('/',productController.addProduct)
router.get('/',productController.getAllProduct)
router.get('/:productId',productController.getSingleProduct)
module.exports=router