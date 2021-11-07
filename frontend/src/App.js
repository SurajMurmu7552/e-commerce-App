import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//import css
import "./App.css";

//import components
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Nav from "./components/Nav/Nav";
import Product from "./pages/Product/Product";
import Confirm from "./pages/Confirm/Confirm";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Product />} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
