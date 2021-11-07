import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./Nav.css";

export default function Nav() {
  const navigate = useNavigate();

  const { cart } = useSelector((state) => state.cart);

  function handleHomeLink() {
    navigate("/");
  }

  function handleCartLink() {
    navigate("/cart");
  }

  return (
    <div className="nav">
      <div className="nav-container">
        <div className="nav-heading">
          <header onClick={handleHomeLink}>
            Fresh<span>Stock</span>
          </header>
        </div>
        <div className="nav-icon" onClick={handleCartLink}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          {cart.length > 0 ? (
            <div className="nav-icon-number">{cart.length}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
