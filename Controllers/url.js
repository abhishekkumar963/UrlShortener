import { Url } from "../Models/Url.js"
import shortid from "shortid"


export const shorturl = async (req,res) => {
   const longUrl = req.body.longUrl;
   const shortCode = shortid.generate();

   const shorturl = `http://localhost:1000/${shortCode}`

  //Save to datsabase

  const newUrl = new Url({shortCode, longUrl})
  await newUrl.save()

  console.log("short saved = ", newUrl)

  res.render("index.ejs", {shorturl})
}


export const getOriginalUrl = async (req,res) => {
  const shortCode = req.params.shortCode;

  //Finding on Database
  const originalUrl = await Url.findOne({shortCode})

  if(originalUrl) {
    res.redirect(originalUrl.longUrl)
  } else {
  res.json({message: "Invalid Shortcode"})
  }

} 