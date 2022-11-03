import React from "react";
import styled from "styled-components";
import HomePage from "./HomePage";
import Navbar from "../components/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import ContactPage from "./ContactPage";
import ErrorPage from "./ErrorPage";
import TrainingPage from "./TrainingPage";
import BooksPage from "./BooksPage";

const StyledRow = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  width: 100vw;
`;

export default function site() {
  return (
    <>
      <StyledRow>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer></Footer>
      </StyledRow>
    </>
  );
}
