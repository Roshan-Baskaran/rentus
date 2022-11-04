const mongoose = require("mongoose")
const productSchema=mongoose.Schema({
name:{
type:String,
required:true
},
price:{type:Number,required:true},
startDate:{type:String,required:true},
endDate:{type:String},
img:{data:Buffer,contentType:String}

})
const Product=mongoose.model("Product",productSchema);

// //UserSchema
// const userSchema=mongoose.Schema({
//     username:{
//     type:String,
//     required:true
//     },
//     password:{
//         type:String,
//         required:true
//         },
//     product:{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}
    
//     })
//     const User=mongoose.model("user",userSchema);
//     module.exports = User;
module.exports=Product;