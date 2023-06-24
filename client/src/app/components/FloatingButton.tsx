import React from 'react';
import './FloatingButton.css'; // Assuming you have a CSS file for styling
import Link from 'next/link';


const FloatingButton: React.FC = () => {
    return (
      <Link href="/add-transaction">
        <button className="floating-button">Add Transaction</button>
      </Link>
    );
  }
  

  export default FloatingButton;