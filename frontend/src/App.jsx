import NavBar from "./components/NavBar";
import Catering from "./pages/Catering";
import Home from "./pages/Home";
import Market from "./pages/Market";
import Menu from "./pages/Menu";
import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";

const POSTS = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
];

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/coffee" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
