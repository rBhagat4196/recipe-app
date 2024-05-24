import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import api from '../../utils/api';
import Loader from './Loader';
import './RecipeList.css';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await api.get('/recipes');
        setRecipes(response.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/recipes/${id}`);
      setRecipes(recipes.filter(recipe => recipe._id !== id));
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

  useEffect(() => {
    const filtered = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'All' || recipe.category.toLowerCase() === selectedCategory.toLowerCase())
    );
    setFilteredRecipes(filtered);
  }, [recipes, searchTerm, selectedCategory]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="recipe-list-container">
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
      <div className="recipe-column-container layout">
        {filteredRecipes.map(recipe => (
          <div key={recipe._id} className="recipe-column">
            <RecipeCard recipe={recipe} onDelete={handleDelete} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
