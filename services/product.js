const AWS=require('aws-sdk')
const{v4:uuidv4}=require('uuid')


AWS.config.update({
    region:"us-east-1",
    accessKeyId:"AKIAV4M7IQKCLSQOXC7J",
    secretAccessKey:"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",
    endpoint:"https://dynamodb.us-east-1.amazonaws.com"
})

let docClient =new AWS.DynamoDB.DocumentClient()
var table="product"

exports.addProduct=async(params)=>{
    const item={
        TableName: table,
        Item:{
           
            productId: params.productId,
            stock: params.stock,
            productName: params.productName,
            isDiscount: params.isDiscount,
            category: {
                categoryId: params.category,
                categoryName: params.categoryName,
            }
        }
    }
    
    try {
        await docClient.put(item).promise()
        return{
            status:true,
            message:"Product oluşturuldu"
        }
    } catch (err) {
        return {
            status:false,
            message:err
        }
    }
}
exports.getAllProduct=async()=>{
    var items={
        TableName:table,
        
    }
     try {
        const data=await docClient.scan(items).promise()
        return{
            status:true,
            data:data
        }
     } catch (err) {
         return{
            status:false,
            message:err

         }
     }
}