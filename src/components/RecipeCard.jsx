import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css';

function RecipeCard({ recipe, onDelete }) {
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      onDelete(recipe._id);
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

  return (
    <div className="card">
      <button className="delete-button" onClick={handleDelete}>X</button>
      <Link to={`/recipes/${recipe._id}`}>
        <img src={recipe.image} alt={recipe.title} className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{recipe.title}</h2>
        </div>
      </Link>
    </div>
  );
}

export default RecipeCard;
