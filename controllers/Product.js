const productService=require('../services/product') 
const AWS=require('aws-sdk')
const req = require('express/lib/request')
const res = require('express/lib/response')
const{v4:uuidv4}=require('uuid')


AWS.config.update({
    region:"us-east-1",
    accessKeyId:"AKIAV4M7IQKCLSQOXC7J",
    secretAccessKey:"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",
    endpoint:"https://dynamodb.us-east-1.amazonaws.com"
})

let docClient =new AWS.DynamoDB.DocumentClient()
var table="product"

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
exports.updateProductStock= async(req,res)=>{
   const response =await productService.updateProductStock(req.body)
   res.send(response)
   }

exports.deleteProduct= async(req,res)=>{
   const response =await productService.deleteProduct(req.params)
   res.send(response)
}