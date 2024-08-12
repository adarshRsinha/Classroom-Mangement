import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import {useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from 'axios'

const Login = () => {

  const [password, setPassword] = useState(true);
  const [StudentData, setStudentData] = useState({
    Email: "",
    Rollno : "",
    Password: "",
  });

  const HandleShowPwd = () => {
    setPassword(!password);
  };

  const HandleInputElement = (e) => {
    const { name, value } = e.target;

    setStudentData((Preve) => {
      return {
        ...Preve,
        [name]: value,
      };
    });
  };
  
  const nav = useNavigate();

  const HandleStudentLogin = async (e) => {
    e.preventDefault();
    console.log(StudentData);
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}FullStack/LoginStudent`, {
        Email: StudentData?.Email,
        Password: StudentData?.Password,
        Rollno: StudentData?.Rollno,
      },{
        withCredentials : true
      });

      if (response?.data?.success) {
        toast.success(response?.data?.message);
        console.log(response?.data);
        localStorage.setItem("StudentToken", response.data.token);
        nav('/StudentHome', {
          state : response.data.token
        })
      } else {
        toast.error(response?.data?.success);
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
      console.log(error.response?.data?.message || "An error occurred. Please try again.");
    }

  };
  
  return (
    <>
      <div class="flex justify-center items-center h-screen bg-gradient-to-br from-blue-600 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
  <h2 class="text-center mb-[20px] text-2xl font-bold">Login Student</h2>
  <form onSubmit={HandleStudentLogin} class="flex flex-col">
    <div class="flex flex-col mb-4">
      <label htmlFor="Email" class="text-lg mb-1.5">Email</label>
      <input
        type="email"
        name="Email"
        id="Email"
        required
        value={StudentData?.Email}
        onChange={HandleInputElement}
        class="w-full px-3 py-2 border border-gray-300 rounded-md text-lg"
      />
    </div>
    <div class="flex flex-col mb-4">
      <label htmlFor="Rollno" class="text-lg mb-1.5">Roll No</label>
      <input
        type="number"
        name="Rollno"
        id="Rollno"
        required
        value={StudentData?.Rollno}
        onChange={HandleInputElement}
        class="w-full px-3 py-2 border border-gray-300 rounded-md text-lg"
      />
    </div>
    <div class="flex flex-col mb-4">
      <label htmlFor="Password" class="text-lg mb-1.5">Password</label>
      <div class="flex items-center">
        <input
          type={password ? "password" : "text"}
          name="Password"
          id="Password"
          required
          value={StudentData?.Password}
          onChange={HandleInputElement}
          class="w-full px-3 py-2 border border-gray-300 rounded-md text-lg"
        />
        <div class="-ml-8 cursor-pointer" onClick={HandleShowPwd}>
          {password ? (
            <FaEye size={18} />
          ) : (
            <IoEyeOff size={18} />
          )}
        </div>
      </div>
    </div>
    <button
      class="w-full py-2 px-4 mt-8 rounded-md bg-blue-500 text-white text-lg hover:bg-blue-600"
      type="submit"
    >
      Login Student
    </button>
  </form>
</div>
</div>

    </>
  )
}

export default Login
