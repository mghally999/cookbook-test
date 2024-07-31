import React from "react";
import "./RecipeDetails.css";

function RecipeDetails({ recipe }) {
  if (!recipe) {
    return (
      <div className="recipe-details-initial">
        Select a recipe to see details
      </div>
    );
  }

  return (
    <div className="recipe-details">
      <h2>{recipe.name}</h2>
      <p className="author">
        <strong>Author:</strong> {recipe.author}
      </p>
      <img src={recipe.image} alt={recipe.name} />
      <h3>Description:</h3>
      <p className="description">{recipe.description}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeDetails;
