import React from "react";
import styled from "styled-components";
import Home from "./Home";
import Navbar from "../components/Navbar";
import { Switch, Route, Routes } from "react-router-dom";
import Error from "../components/Error";

export default function site() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<h1>Page de Contact</h1>} />
        <Route
          path="*"
          element={<Error type="404">La page n'existe pas</Error>}
        />
      </Routes>
      <Home></Home>
    </>
  );
}
