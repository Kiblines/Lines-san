import React from "react";
import styled from "styled-components";
import Home from "./Home";
import Navbar from "../components/Navbar";
import { Switch, Route, Routes } from "react-router-dom";
import Error from "../components/Error";
import Footer from "../components/Footer";

const styledRow = styled.div`
  min-height: 100vh;
`;

export default function site() {
  return (
    <>
      <styledRow>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<h1>contact route</h1>} />
          <Route
            path="*"
            element={<Error type="404">La page n'existe pas</Error>}
          />
        </Routes>
        <Home></Home>
        <Footer></Footer>
      </styledRow>
    </>
  );
}
