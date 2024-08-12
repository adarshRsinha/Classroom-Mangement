import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 text-center">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-around">
        <div className="mb-5 min-w-[200px]">
          <h4 className="text-lg mb-4 text-gray-100">About Us</h4>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-gray-200">Our Mission</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-gray-200">Team</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-gray-200">Careers</a></li>
          </ul>
        </div>
        <div className="mb-5 min-w-[200px]">
          <h4 className="text-lg mb-4 text-gray-100">Services</h4>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-gray-200">School Management</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-gray-200">Student Management</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-gray-200">Teacher Management</a></li>
          </ul>
        </div>
        <div className="mb-5 min-w-[200px]">
          <h4 className="text-lg mb-4 text-gray-100">Contact</h4>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-gray-200">Support</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-gray-200">Contact Us</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-gray-200">FAQ</a></li>
          </ul>
        </div>
        <div className="mb-5 min-w-[200px]">
          <h4 className="text-lg mb-4 text-gray-100">Follow Us</h4>
          <ul className="flex justify-center space-x-4">
            <li><a href="#" className="text-gray-400 hover:text-gray-200 text-xl"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#" className="text-gray-400 hover:text-gray-200 text-xl"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#" className="text-gray-400 hover:text-gray-200 text-xl"><i className="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-6">
        <p>&copy; 2024 Schoolify. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
