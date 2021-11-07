import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";

import "./CartItem.css";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  function handleRemove() {
    console.log("remove");
    dispatch(removeFromCart(item));
  }

  return (
    <li className="cart-item">
      <div className="item-img">
        <img src={item.image} alt="" />
      </div>
      <div className="item-content">
        <div className="item-title">
          <p>{item.title}</p>
        </div>
        <div className="item-price">
          <p>
            Price : <span>&#8377;</span>
            {item.price}
          </p>
        </div>
      </div>
      <div className="remove-cart-item" onClick={handleRemove}>
        <p>Remove</p>
      </div>
    </li>
  );
}
