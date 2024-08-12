import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { toast } from "react-hot-toast";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Login = () => {


  const [password, setPassword] = useState(true);
  const [PrincipleData, setPrincipleData] = useState({
    Email: "",
    Password: "",
  });

  const HandleShowPwd = () => {
    setPassword(!password);
  };

  const HandleInputElement = (e) => {
    const { name, value } = e.target;

    setPrincipleData((Preve) => {
      return {
        ...Preve,
        [name]: value,
      };
    });
  };

  const nav = useNavigate();

  const HandlePrincipleLogin = async (e) => {
    e.preventDefault();

    console.log(PrincipleData.Email);
    console.log(PrincipleData.Password);

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    try {
      const response = await axios.post(`${backendUrl}FullStack/LoginPrinciple`, {
        Email: PrincipleData?.Email,
        Password: PrincipleData.Password,
      }, {
        withCredentials: true,
      });

      if (response?.data?.success) {
        // toast.success(response?.data?.message);
        localStorage.setItem("PrincipleToken", response.data.token);
        nav('/PrincipleDashBoard', {
          state : response.data.token
        })
      } else {
        toast.error(response?.data?.success);
      }
    } catch (error) {
      console.error("Error details:", error);
  
      if (error.response) {
        toast.error(error.response.data?.message || "An error occurred. Please try again.");
        console.log("Error response data:", error.response.data);
      } else {
        toast.error("An unexpected error occurred. Please try again.");
        console.log("Error:", error);
      }
    }
  

  };



return (
<>
<div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-600 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-center text-2xl font-bold mb-6 text-gray-800">
          Login Principle
        </h2>
        <form onSubmit={HandlePrincipleLogin} className="flex flex-col">
          <div className="mb-4">
            <label htmlFor="Email" className="block text-lg font-semibold mb-1.5 text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="Email"
              id="Email"
              required
              value={PrincipleData?.Email}
              onChange={HandleInputElement}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-lg focus:border-blue-500 transition-colors"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Password" className="block text-lg font-semibold mb-1.5 text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={password ? "password" : "text"}
                name="Password"
                id="Password"
                required
                value={PrincipleData?.Password}
                onChange={HandleInputElement}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-lg focus:border-blue-500 transition-colors"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                {password ? (
                  <FaEye size={18} onClick={HandleShowPwd} />
                ) : (
                  <IoEyeOff size={18} onClick={HandleShowPwd} />
                )}
              </div>
            </div>
          </div>
          <button
            className="w-full py-2 px-4 mt-8 bg-blue-600 text-white rounded-md text-lg hover:bg-blue-700 transition-colors"
            type="submit"
          >
            Login Principle
          </button>
        </form>
      </div>
    </div>

</>
  )
}

export default Login
