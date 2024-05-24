import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <Link to="/">
      <h1>Recipe App</h1>
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add-recipe">Add Recipe</Link>
      </nav>
    </header>
  );
}

export default Header;
