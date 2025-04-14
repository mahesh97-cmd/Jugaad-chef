import { useState } from "react";
import axios from "axios";
import { parseRecipe } from "../utils/parseRecipe";

function Recipe() {
  const [ingredients, setIngredients] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [diet, setDiet] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!ingredients.trim()) return alert("Please enter ingredients.");

    const fullIngredients = `${ingredients}${cuisine ? ", cuisine: " + cuisine : ""}${
      diet ? ", dietary preference: " + diet : ""
    }`;

    try {
      setLoading(true);
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/improvised/recipe`, {
        ingredients: fullIngredients,
      });

      const rawtext=response.data.improvisedRecipe
      const parsed=parseRecipe(rawtext)
      setRecipe(parsed);
    } catch (err) {
      console.error(err);
      alert("Failed to generate recipe. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(recipe);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 p-6 text-gray-800 font-sans">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-orange-700">🍲 JUGAAD CHEF</h1>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter ingredients (comma-separated)"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-3 border border-orange-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <div className="flex gap-4">
            <select
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
              className="w-1/2 p-3 border border-orange-300 rounded-xl bg-white"
            >
              <option value="">Select Cuisine (optional)</option>
              <option value="North Indian">North Indian</option>
              <option value="South Indian">South Indian</option>
              <option value="Gujarati">Gujarati</option>
              <option value="Rajasthani">Rajasthani</option>
              <option value="Mughlai">Mughlai</option>
            </select>

            <select
              value={diet}
              onChange={(e) => setDiet(e.target.value)}
              className="w-1/2 p-3 border border-orange-300 rounded-xl bg-white"
            >
              <option value="">Select Diet (optional)</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Vegan">Vegan</option>
              <option value="Non-Vegetarian">Non-Vegetarian</option>
              <option value="Gluten-Free">Gluten-Free</option>
            </select>
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full bg-orange-500 text-white font-semibold py-3 rounded-xl hover:bg-orange-600 transition"
          >
            {loading ? "Generating..." : "Generate Recipe"}
          </button>
        </div>

        {recipe && (
  <div className="mt-8 border-t pt-6">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold text-orange-700">🍛 Your Recipe:</h2>
      <button
        onClick={handleCopy}
        className="text-sm text-orange-600 hover:underline"
      >
        {copied ? "✅ Copied!" : "📋 Copy"}
      </button>
    </div>

    <div className="space-y-4 text-gray-800 ">
      <div>
        <h3 className="text-xl font-semibold text-orange-700">1. Recipe Name</h3>
        <pre className="whitespace-pre-wrap bg-orange-50 p-3 rounded-xl ">{recipe.title}</pre>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-orange-700">2. Description</h3>
        <pre className="whitespace-pre-wrap bg-orange-50 p-3 rounded-xl">{recipe.description}</pre>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-orange-700">3. Ingredients</h3>
        <pre className="whitespace-pre-wrap bg-orange-50 p-3 rounded-xl">{recipe.ingredients}</pre>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-orange-700">4. Instructions</h3>
        <pre className="whitespace-pre-wrap bg-orange-50 p-3 rounded-xl">{recipe.instructions}</pre>
      </div>

      {recipe.tips && (
        <div>
          <h3 className="text-xl font-semibold text-orange-700">5. Tips</h3>
          <pre className="whitespace-pre-wrap bg-orange-50 p-3 rounded-xl">{recipe.tips}</pre>
        </div>
      )}
    </div>
  </div>
)}

      </div>
    </div>
  );
}

export default Recipe;
