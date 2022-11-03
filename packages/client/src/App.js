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
