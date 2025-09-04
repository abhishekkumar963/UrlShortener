import express from 'express'
import mongoose from 'mongoose'
import { shorturl, getOriginalUrl } from "./Controllers/url.js"

const app = express();

app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://abhishekkumarsingh845454:U9nyWjUhtpake4xy@cluster0.dazf2fq.mongodb.net/", {
  dbName: "NodeJs_Course"
}).then(()=> console.log ("MongoDb Connected Succefully...!")).catch((err)=>console.log(err))


// Rendering the ejs file
app.get('/', (req,res)=> {
  res.render('index.ejs', {shorturl:null})
})


// Shorting URL logic
app.post('/short', shorturl )


//Redirect to original url using short Route :- Dynamic Routing
app.get("/:shortCode", getOriginalUrl)


const port = 1000;
app.listen(port,()=>console.log(`Server is Running on the port ${port}`))