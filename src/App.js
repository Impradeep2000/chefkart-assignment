import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Ingredient from "./pages/Ingredient";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ingredient" element={<Ingredient />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
