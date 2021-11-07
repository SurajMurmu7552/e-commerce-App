import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import BackIcon from "../../components/BackIcon/BackIcon";
import "./Cart.css";
import CartItem from "../../components/CartItem/CartItem";
import { confirmOrder } from "../../redux/cartSlice";

export default function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cart, total, delivery } = useSelector((state) => state.cart);

  function handleConfirm() {
    dispatch(confirmOrder());
    navigate("/confirm");
  }

  if (cart.length > 0) {
    return (
      <div className="cart">
        <div className="cart-container">
          <BackIcon />
          <ul className="cart-items">
            {cart.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </ul>
          <div className="order">
            <div className="order-heading">
              <p>Order details</p>
            </div>
            <ul className="order-details">
              <li className="order-detail">
                <div className="order-title">
                  <p>Cart total</p>
                </div>
                <div className="order-price">
                  <p>
                    <span>&#8377;</span>
                    {total}
                  </p>
                </div>
              </li>
              <li className="order-detail">
                <div className="order-title">
                  <p>Delivery</p>
                </div>
                <div className="order-price">
                  <p>
                    <span>&#8377;</span>
                    {delivery}
                  </p>
                </div>
              </li>
              <li className="order-detail">
                <div className="order-title">
                  <p>Total amount</p>
                </div>
                <div className="order-price">
                  <p>
                    <span>&#8377;</span>
                    {parseFloat(total) + parseFloat(delivery)}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="confirm">
          <div className="order-total">
            <p>
              <span>&#8377;</span>
              {parseFloat(total) + parseFloat(delivery)}
            </p>
          </div>
          <div className="confirm-order" onClick={handleConfirm}>
            <p>confirm order</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="cart">
      <div className="cart-container cart-empty">
        <BackIcon />
      </div>

      <div className="placed">
        <div className="placed-heading">
          <p>Add items to cart to order</p>
        </div>
        <div className="back-link">
          <Link to="/">Go back to Homepage</Link>
        </div>
      </div>
    </div>
  );
}
