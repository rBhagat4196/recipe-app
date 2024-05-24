import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css';

function RecipeCard({ recipe }) {
  return (
    <div className="card">
      <Link to={`/recipes/${recipe._id}`}>
        <img src={recipe.image} alt={recipe.title} className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{recipe.title}</h2>
          <p className="card-description">{recipe.description}</p>
        </div>
      </Link>
    </div>
  );
}

export default RecipeCard;
