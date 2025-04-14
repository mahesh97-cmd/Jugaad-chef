const express=require("express")
const recipeImproviser=require("../controllers/aiController")
const router=express.Router()

router.post("/recipe",recipeImproviser);


module.exports=router;
