import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-gradient-to-r from-blue-500 to-blue-800">
      <div className="text-white text-2xl font-bold">Schoolify</div>
      <nav>
        <ul className="flex space-x-5">
          <li><a href="#home" className="text-white text-lg">Home</a></li>
          <li><a href="#features" className="text-white text-lg">Features</a></li>
          <li><a href="#pricing" className="text-white text-lg">Pricing</a></li>
          <li><a href="#contact" className="text-white text-lg">Contact</a></li>
        </ul>
      </nav>
      <div className="flex space-x-3">
        <Link to='/option'>
          <button className="bg-transparent text-white py-2 px-4 rounded">Login</button>
        </Link>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
