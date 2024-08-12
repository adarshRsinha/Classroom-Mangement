import React from 'react';

const Pricing = () => {
  return (
    <section className="py-12 text-center bg-gray-100" id="pricing">
      <h2 className="text-4xl mb-10 text-blue-900 font-bold">Choose Your Plan</h2>
      <div className="flex justify-around gap-4">
        <div className="bg-white p-8 rounded-lg shadow-lg flex-1 max-w-xs">
          <h3 className="text-2xl text-black mb-4 font-semibold">Basic Plan</h3>
          <p className="text-xl text-blue-600 mb-6">$10/month</p>
          <ul className="list-none mb-8 text-black">
            <li className="text-lg mb-3">Up to 50 Students</li>
            <li className="text-lg">Basic Features</li>
          </ul>
          <button className="px-5 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Choose Plan</button>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg flex-1 max-w-xs">
          <h3 className="text-2xl text-black mb-4 font-semibold">Standard Plan</h3>
          <p className="text-xl text-blue-600 mb-6">$20/month</p>
          <ul className="list-none mb-8 text-black">
            <li className="text-lg mb-3">Up to 100 Students</li>
            <li className="text-lg">All Features</li>
          </ul>
          <button className="px-5 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Choose Plan</button>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg flex-1 max-w-xs">
          <h3 className="text-2xl text-black mb-4 font-semibold">Premium Plan</h3>
          <p className="text-xl text-blue-600 mb-6">$30/month</p>
          <ul className="list-none mb-8 text-black">
            <li className="text-lg mb-3">Unlimited Students</li>
            <li className="text-lg">All Features + Support</li>
          </ul>
          <button className="px-5 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Choose Plan</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
