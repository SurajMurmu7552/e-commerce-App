import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//import css
import "./App.css";

//import components
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
