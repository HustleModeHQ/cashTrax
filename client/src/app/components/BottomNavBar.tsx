import React from 'react';
import './BottomNavBar.css'; // Import the CSS styles for the bottom navigation bar

const BottomNavBar: React.FC = () => {
  return (
    <nav className="bottom-nav">
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavBar;
