import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import './RecipeList.css';

function RecipeList({ recipes }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    const filtered = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'All' || recipe.category === selectedCategory)
    );
    setFilteredRecipes(filtered);
  }, [recipes, searchTerm, selectedCategory]);

  return (
    <div className="recipe-list-container">
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
      <div className='styling'>

      {filteredRecipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
      </div>
    </div>
  );
}

export default RecipeList;
