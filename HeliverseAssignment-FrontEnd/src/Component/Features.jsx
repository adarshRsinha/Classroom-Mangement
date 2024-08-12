import React from 'react';

const Features = () => {
  return (
    <section className="py-12 bg-gray-100 text-center" id="features">
      <h2 className="text-4xl mb-10 text-blue-900 font-bold">Key Features</h2>
      <div className="flex justify-between gap-4 text-blue-900">
        <div className="bg-white p-8 rounded-lg shadow-md flex-1">
          <h3 className="text-2xl mb-4">Teacher Management</h3>
          <p className="text-gray-600">Easily manage teacher details, assignments, and classrooms.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md flex-1">
          <h3 className="text-2xl mb-4">Student Management</h3>
          <p className="text-gray-600">Track student progress and maintain updated records.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md flex-1">
          <h3 className="text-2xl mb-4">Classroom Scheduling</h3>
          <p className="text-gray-600">Create and edit timetables for optimal classroom management.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
