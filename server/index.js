const express = require ("express");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
const port = 8080;


const FoodModel = require("./models/Food");
app.use(express.json());
app.use(cors())
mongoose.connect("mongodb+srv://huzefatanveer:Iamtheone1122@crud.ujcnxls.mongodb.net/food?retryWrites=true&w=majority",{
    useNewUrlParser: true,
})
//  app.get("/", (req,res)=>{
//      res.send("<h1>fine</h1>")
//  })

app.post("/insert", async (req,res,next)=>{
    const foodName = req.body.foodName
    const days= req.body.days
    const food = new FoodModel({foodName: foodName,daysSinceIAte: days})
    try {
        await food.save();
    } catch(err){
        console.log(err)
    }
    next()
    
})
app.post("/", (res,req)=>{
    res.render("index",{userInfo:{
        username: "New user",
        user_plan: "Pro",
        is_bloked:false
       }})
})
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})