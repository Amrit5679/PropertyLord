import React from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default Pages;
