import React from 'react';
import './CategoryFilter.css';

function CategoryFilter({ selectedCategory, onCategoryChange }) {
  const categories = ['All', 'Breakfast', 'Lunch', 'Dinner'];

  return (
    <div className="category-filter">
      {categories.map(category => (
        <button
          key={category}
          className={`category-button ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
