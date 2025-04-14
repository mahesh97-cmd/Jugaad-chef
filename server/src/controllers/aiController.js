const {improviseRecipe} =require("../services/aiService")

const recipeImproviser=async(req,res)=>{
try {
    
        const { ingredients } = req.body;
    
        if (!ingredients || ingredients.trim() === "") {
          return res.status(400).json({ error: "Ingredients are required." });
        }
    
        const recipe = await improviseRecipe(ingredients);
        const improvedRecipe=recipe 
        .replace(/\\n/g, '\n')  
        .replace(/\\\"/g, '"')   
        .replace(/\\\\/g, '\\');
        res.status(200).json({ improvisedRecipe:improvedRecipe });
} catch (error) {
    console.error(error)
}
}

module.exports=recipeImproviser