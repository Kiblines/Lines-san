import React from "react";
import styled, { keyframes } from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 800px;
`;

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    `;

const Spinner = styled.div`
  height: 38px;
  width: 38px;
  border-radius: 50%;
  border: 5px solid #eae9ee;
  border-top-color: #052e50;
  transform: rotate(45deg);
  animation: ${spin} 1s ease infinite;
`;

const Loader = () => (
  <Div className="loader">
    <Spinner className="spinner" />
  </Div>
);

export default Loader;
