import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-12 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">What Our Users Say</h2>
      <div className="flex justify-around flex-wrap">
        <div className="bg-white rounded-lg shadow-lg max-w-xs m-5 p-6 text-left">
          <div className="flex items-center mb-5">
            <img src="/images/user1.jpg" alt="User 1" className="rounded-full w-16 h-16 mr-5" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-500 text-sm">Principal</p>
            </div>
          </div>
          <p className="text-gray-600 text-base leading-relaxed">
            "Schoolify has revolutionized the way we manage our school. The dashboard is intuitive and helps us keep everything organized!"
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg max-w-xs m-5 p-6 text-left">
          <div className="flex items-center mb-5">
            <img src="/images/user2.jpg" alt="User 2" className="rounded-full w-16 h-16 mr-5" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-500 text-sm">Teacher</p>
            </div>
          </div>
          <p className="text-gray-600 text-base leading-relaxed">
            "Managing my classroom has never been easier. Schoolify allows me to focus on teaching rather than administrative tasks."
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg max-w-xs m-5 p-6 text-left">
          <div className="flex items-center mb-5">
            <img src="/images/user3.jpg" alt="User 3" className="rounded-full w-16 h-16 mr-5" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Michael Brown</h3>
              <p className="text-gray-500 text-sm">Student</p>
            </div>
          </div>
          <p className="text-gray-600 text-base leading-relaxed">
            "I love how I can easily check my class schedule and see what assignments are due. Schoolify keeps me on track!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
