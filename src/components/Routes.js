import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

export default (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/Home" element={<Home />} />
    <Route></Route>
  </Routes>
);
