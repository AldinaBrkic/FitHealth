import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Menu = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="menu">
      <div className="backToFirstPage" id="dashboard" onClick={handleBackClick}>Back</div>
      <h1 className="menu-title">FitHealth</h1>
      <ul className="menu-options">
        <li className="menu-item">Healthy Diet</li>
        <li className="menu-item">Weight Loss</li>
        <li className="menu-item">Weight Gain</li>
        <li className="menu-item">Exercises</li>
      </ul>
    </div>
  );
};

export default Menu;
