import React, { useEffect, useState } from "react";
import RecipeList from "../components/RecipeList/RecipeList";
import RecipeDetails from "../components/RecipeDetails/RecipeDetails";
import { fetchRecipes } from "../services/api";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  const [sidebarActive, setSidebarActive] = useState(false);

  useEffect(() => {
    const getRecipes = async () => {
      const data = await fetchRecipes();
      setRecipes(data);
    };
    getRecipes();
  }, []);

  const selectRecipe = (id) => {
    setSelectedRecipeId(id);
    if (window.innerWidth <= 768) {
      setSidebarActive(false);
    }
  };

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const selectedRecipe = recipes.find((r) => r.id === selectedRecipeId);

  return (
    <div className="app-container">
      <button onClick={toggleSidebar} className="sidebar-toggle">
        ☰
      </button>
      <div className={`sidebar ${sidebarActive ? "active" : ""}`}>
        <RecipeList
          recipes={recipes}
          selectRecipe={selectRecipe}
          selectedRecipeId={selectedRecipeId}
        />
      </div>
      <div className="content-area">
        <RecipeDetails recipe={selectedRecipe} />
      </div>
    </div>
  );
}

export default App;
