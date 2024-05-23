import React from 'react';
import { useParams } from 'react-router-dom';
import './RecipeDetail.css';

const recipes = [
  {
    id: 1,
    title: 'Spaghetti Carbonara',
    image: '/images/spaghettu.jpg',
    description: 'Classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
    details: 'Detailed instructions and ingredients for Spaghetti Carbonara.'
  },
  {
    id: 2,
    title: 'Chicken Curry',
    image: '/images/Instant-Pot-Chicken-Curry-Recipe.jpg',
    description: 'Spicy and savory chicken curry made with a variety of spices.',
    details: 'Detailed instructions and ingredients for Chicken Curry.'
  },
  // Add more recipes as needed
];

function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === parseInt(id));

  if (!recipe) {
    return <div>Recipe not found</div>;
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
