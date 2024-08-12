import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState(true);
  const [TeacherData, setTeacherData] = useState({
    Email: "",
    Password: "",
  });

  const HandleShowPwd = () => {
    setPassword(!password);
  };

  const HandleInputElement = (e) => {
    const { name, value } = e.target;

    setTeacherData((Preve) => {
      return {
        ...Preve,
        [name]: value,
      };
    });
  };

  const nav = useNavigate();

  const HandleTeacherLogin = async (e) => {
    e.preventDefault();
    console.log(TeacherData);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}FullStack/LoginTeacher`,
        {
          Email: TeacherData?.Email,
          Password: TeacherData?.Password,
        },
        {
          withCredentials: true,
        }
      );

      if (response?.data?.success) {
        toast.success(response?.data?.message);
        console.log(response?.data);
        localStorage.setItem("TeacherToken", response.data.token);
        nav("/TeacherDashBoard", {
          state: response.data.token,
        });
      } else {
        toast.error(response?.data?.success);
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
      console.log(error)
      console.log(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  return (
    <>
       <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-600 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-center text-2xl font-bold mb-6 text-gray-800">
          Login Teacher
        </h2>
        <form onSubmit={HandleTeacherLogin} className="flex flex-col">
          <div className="mb-4">
            <label htmlFor="Email" className="block text-lg font-semibold mb-1.5 text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="Email"
              id="Email"
              required
              value={TeacherData?.Email}
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
                value={TeacherData?.Password}
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
            className="w-full py-2 px-4 mt-8 bg-yellow-300 text-black rounded-md text-lg hover:bg-yellow-400 transition-colors"
            type="submit"
          >
            Login Teacher
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
