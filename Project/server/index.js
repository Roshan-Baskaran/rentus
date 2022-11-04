const express = require("express");
const mongoose=require("mongoose");
const app=express();
const Product =require("./models/Product")
const UserModel=require("./models/User")
const cors=require("cors");
const path=require("path");
const bodyParser = require('body-parser')
const multer=require("multer")
const fs=require("fs")
const asyncHandler=require("express-async-handler")


app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
// app.use(express.json());
try{
   mongoose.connect("mongodb+srv://mathan811:Mathan.81102@retus.ikbdcuc.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true
}).then(()=>{console.log("Database connection is established")});}
catch(err){
console.log(err)}

// //Storage Engine

 
app.get("/",(req,res)=>{
    res.send("Hi it is working");
})

//for creating the products--- in the lessor section
//   app.post('/addProduct',upload.single('Image'),async(req, res)=>{
//     const product = new  Product({name:req.body.name,price:req.body.price,startDate:req.body.startDate,endDate:req.body.endDate,img:{data:fs.readFileSync('uploads/'+req.file),
//     contentType : "image/png"}})
//     await product.save()
//     .then((res)=>console.log('image is saved')).catch((err)=>console.log(err,'error has occured;'))
//     res.send("image is saved");
//     } );


app.post("/login",async (req,res)=>{
const {username,password}=req.body;
UserModel.findOne({username:username}, function (err, user) {
  if (err){
      console.log(err)
  }
  else{
  if(user){
    if(user.password==password){
      console.log("Valid User");
      res.status(200).json("Valid User");
    }
    else{
    console.log("Invalid Password");
    res.status(200).json("Invalid Password");
  }}
  else{
  console.log("User Not Registered");
  res.status(200).json("User Not Registered");
  }
  }

})
});
app.post("/register",(req,res)=>{
  const username=req.body.username;
  const email=req.body.email;
  const password =req.body.password;
  UserModel.findOne({username:username}, function (err, user) {
    if (err){
        console.log(err)
    }
    else{
      if(user){
        console.log("User Already Exists");
      res.status(200).json("User Already exists");
      }
      else{
        const user= new UserModel({username:username,email:email,
          password:password})
      try{
          user.save(function(err) {
          if (err)
             throw err;
          else 
             console.log('saved user successfully...');
          });
          }
      catch(err){
      console.log(err)}
      res.send("User registered successfully")
      }
    }
});

})



app.listen(3001,()=>{
console.log("Server Running on Port 3001");});








//conn.once('open', function () {
    //     var gfs = Grid(conn.db, mongoose.mongo);
    //   gfs.collection('uploads')
    //     // all set!
    //   })


  //Create gridfs storage

//   var storage = new GridFsStorage({
//     url: "mongodb+srv://mathan811:Mathan.81102@retus.ikbdcuc.mongodb.net/?retryWrites=true&w=majority",
//     file: (req, file) => {
//       return new Promise((resolve, reject) => {
//         crypto.randomBytes(16, (err, buf) => {
//           if (err) {
//             return reject(err);
//           }
//           const filename = buf.toString('hex') + path.extname(file.originalname);
//           const fileInfo = {
//             filename: filename,
//             bucketName: 'uploads'
//           };
//           resolve(fileInfo);
//         });
//       });
//     }
//   });

//   const upload = multer({ storage });



// app.post("/uploadimage",upload.single('file'),(req,res)=>{
//     res.json({file:req.file})
    
//     })
    