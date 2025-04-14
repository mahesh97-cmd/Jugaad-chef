// services/aiService.js
const { GoogleGenerativeAI }=require("@google/generative-ai");
const dotenv =require("dotenv");
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const improviseRecipe = async (ingredients) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `
You are a creative Indian chef. Given the following ingredients, suggest a tasty and unique Indian recipe.
Mention:
1. Recipe name
2. Description
3. Ingredients list
4. Step-by-step cooking instructions
5. Tips (optional)

Ingredients: ${ingredients}

Keep the tone friendly and easy to follow.
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return text;
  } catch (error) {
    console.error("Gemini AI Error:", error);
    return "❌ Failed to generate recipe. Please try again later.";
  }
};


module.exports={improviseRecipe}