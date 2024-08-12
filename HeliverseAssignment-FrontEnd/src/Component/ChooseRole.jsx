import React from 'react';
import { useNavigate } from 'react-router-dom';
import principalIcon from '../assets/boss.png'; // Add appropriate paths
import teacherIcon from '../assets/classroom.png';
import studentIcon from '../assets/students.png';

function ChooseRole() {
  const navigate = useNavigate();

  return (
    <div className="text-center py-16 px-5 max-w-5xl mx-auto">
      <h1 className="text-4xl mb-12 text-gray-800">Select Your Role</h1>
      <div className="flex justify-around flex-wrap">
        <div
          className="role-card w-72 h-52 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex flex-col items-center justify-center m-5 text-white text-xl font-bold uppercase cursor-pointer transform transition-transform duration-300 hover:translate-y-[-10px] shadow-lg"
          onClick={() => navigate('/PrincipleLogin')}
        >
          <img src={principalIcon} alt="Principal" className="w-20 h-20 object-contain" />
          <h2 className="mt-4 text-2xl tracking-wide">Principal</h2>
        </div>
        <div
          className="role-card w-72 h-52 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex flex-col items-center justify-center m-5 text-white text-xl font-bold uppercase cursor-pointer transform transition-transform duration-300 hover:translate-y-[-10px] shadow-lg"
          onClick={() => navigate('/TeachrLogin')}
        >
          <img src={teacherIcon} alt="Teacher" className="w-20 h-20 object-contain" />
          <h2 className="mt-4 text-2xl tracking-wide">Teacher</h2>
        </div>
        <div
          className="role-card w-72 h-52 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex flex-col items-center justify-center m-5 text-white text-xl font-bold uppercase cursor-pointer transform transition-transform duration-300 hover:translate-y-[-10px] shadow-lg"
          onClick={() => navigate('/StudentLogin')}
        >
          <img src={studentIcon} alt="Student" className="w-20 h-20 object-contain" />
          <h2 className="mt-4 text-2xl tracking-wide">Student</h2>
        </div>
      </div>
    </div>
  );
}

export default ChooseRole;
