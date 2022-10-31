import "./App.css";

import logo from "./logo.jpg";
import lines from "./lines-san.PNG";

function App() {
  return (
    <div className="App">
      <img style={{ width: 500, height: 600 }} src={logo} alt="logo" />
      <img style={{ width: 500, height: 600 }} src={lines} alt="logo" />
    </div>
  );
}

export default App;
