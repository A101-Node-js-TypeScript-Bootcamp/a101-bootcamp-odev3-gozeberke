const productService=require('../services/product') 

exports.addProduct= async(req,res)=>{
    const response =await productService.addProduct(req.body)
    res.send(response)
 }
 exports.getAllProduct= async(req,res)=>{
    const response =await productService.getAllProduct()
    res.send(response)
    
 }
 exports.getSingleProduct= async(req,res)=>{
   const response =await productService.getSingleProduct(req.params)
   res.send(response)
   
}