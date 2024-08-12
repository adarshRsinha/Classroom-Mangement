import React from 'react';
import dashboardPreview from '../assets/dashboard-preview.png';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="flex items-center justify-between p-12 bg-gradient-to-r from-blue-500 to-blue-800 text-white">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold mb-5 ">Manage your school efficiently with Schoolify</h1>
        <p className="text-lg mb-8">Schoolify is your all-in-one school management solution tailored for every role.</p>
        <Link to='/option'>
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-200 transition">
            Get Started
          </button>
        </Link>
      </div>
      <div className="flex-shrink-0">
        <img src={dashboardPreview} alt="Dashboard preview" className="rounded-lg max-w-full w-[40%] ml-[12rem]"  />
      </div>
    </section>
  );
};

export default HeroSection;
