import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import RecipeList from './components/RecipeList.jsx';
import RecipeDetail from './components/RecipeDetail.jsx';
import AddRecipe from './components/AddRecipe.jsx'; // Import the AddRecipe component
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: 'Spaghetti Carbonara',
      image: '/images/spaghettu.jpg',
      description: 'Classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
      category: 'Dinner',
    },
    {
      id: 2,
      title: 'Chicken Curry',
      image: '/images/Instant-Pot-Chicken-Curry-Recipe.jpg',
      description: 'Spicy and savory chicken curry made with a variety of spices.',
      category: 'Lunch',
    },
    // Add more recipes as needed
  ]);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<RecipeList recipes={recipes} />} />
          <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
          {/* Pass handleAddRecipe function as a prop */}
          <Route path="/add-recipe" element={<AddRecipe onAddRecipe={handleAddRecipe} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
