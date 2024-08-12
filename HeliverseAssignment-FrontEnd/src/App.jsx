import "./App.css";
// import { Outlet } from "react-router-dom";
// import toast, { Toaster } from "react-hot-toast";
import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainHome from './Component/MainHome';
// import Home from "./Component/Student/Home";


function App() {

  console.log(document.cookie)

  return (
    <>
      <MainHome/>
    </>
  );
}

export default App;
