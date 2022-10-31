import react from "react";
import styled from "styled-components";
import logo from "./logo.jpg";
import lines from "./lines-san.png";
import Navbar from "./components/Navbar";
import Site from "./container/Site";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Site></Site>
      </BrowserRouter>
    </div>
  );
}

export default App;
