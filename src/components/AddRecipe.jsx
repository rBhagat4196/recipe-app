import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/api';
import './AddRecipe.css';

function AddRecipe({ onAddRecipe }) {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecipe = {
      title,
      image,
      description,
      category,
    };

    try {
      const response = await api.post('/recipes', newRecipe);
      onAddRecipe(response.data);
      setTitle('');
      setImage('');
      setDescription('');
      setCategory('');
      navigate('/')
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  };

  return (
    <form className="add-recipe-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipe;
