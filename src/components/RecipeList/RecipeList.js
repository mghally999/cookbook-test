import React from "react";
import "./RecipeList.css";

function RecipeList({ recipes, selectRecipe, selectedRecipeId }) {
  return (
    <div className="recipe-list">
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li
            key={recipe.id}
            className={`card ${selectedRecipeId === recipe.id ? "active" : ""}`}
            onClick={() => selectRecipe(recipe.id)}
          >
            <img src={recipe.image} alt={recipe.name} />
            <div>
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
