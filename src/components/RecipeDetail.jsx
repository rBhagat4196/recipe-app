import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../utils/api';
import './RecipeDetail.css';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  console.log(recipe)
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await api.get(`/recipes/${id}`);
        setRecipe(response.data);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-detail-container">
      <img src={recipe.image} alt={recipe.title} className="recipe-detail-image" />
      <h2 className="recipe-detail-title">{recipe.title}</h2>
      <p className="recipe-detail-description">{recipe.description}</p>
      <p className="recipe-detail-details">{recipe.details}</p>
    </div>
  );
}

export default RecipeDetail;
