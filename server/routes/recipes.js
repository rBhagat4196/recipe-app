const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

// Get all recipes
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single recipe
router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new recipe
router.post('/', async (req, res) => {
  const { title, image, description, category } = req.body;

  const recipe = new Recipe({
    title,
    image,
    description,
    category,
  });

  try {
    const newRecipe = await recipe.save();
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a recipe
router.put('/:id', async (req, res) => {
  const { title, image, description, category } = req.body;

  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });

    recipe.title = title;
    recipe.image = image;
    recipe.description = description;
    recipe.category = category;

    const updatedRecipe = await recipe.save();
    res.json(updatedRecipe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a recipe
router.delete('/:id', async (req, res) => {
  // console.log(req.params.id);
  try {
    const recipe = await Recipe.findOneAndDelete({ _id: req.params.id });
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    res.json({ message: 'Recipe deleted' });
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


module.exports = router;
