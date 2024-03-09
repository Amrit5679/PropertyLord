import React from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../home/Home";

import AdminLogin from "../Admin/AdminLogin/AdminLogin";
import AdminReg from "../Admin/AdminReg/AdminReg";
import Login from "../Auth/Login/Login";
import Registration from "../Auth/Registration/Registration";

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Registration />} />
          <Route exact path="/admin/login" element={<AdminLogin />} />
          <Route exact path="/admin/signup" element={<AdminReg />} />

      
        </Routes>
      </Router>
    </>
  );
};

export default Pages;
