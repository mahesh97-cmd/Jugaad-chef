const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv")
const aiRoute=require("../server/src/routes/aiRoute")
dotenv.config()


const app=express()
app.use(cors())
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("home page")
})
app.use("/api/improvised",aiRoute)


PORT=process.env.PORT || 3003

app.listen(PORT,()=>{console.log(`app is running on ${PORT}`)})