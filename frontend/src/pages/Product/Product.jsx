import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import BackIcon from "../../components/BackIcon/BackIcon";
import { addToCart } from "../../redux/cartSlice";
import "./Product.css";

export default function Product() {
  const dispatch = useDispatch();

  const { item } = useSelector((state) => state.singleData);

  function handleAddToCart() {
    dispatch(addToCart(item));
  }

  if (item) {
    return (
      <div className="product">
        <div className="product-container">
          <BackIcon />
          <div className="product-img">
            <img src={item.image} alt="" />
          </div>
          <div className="product-header">
            <div className="product-header-left">
              <div className="product-title">{item.title}</div>
              <div className="product-price">
                <p>
                  Price: <span>&#8377;</span>
                  {item.price}
                </p>
              </div>
            </div>
            <div className="product-header-right">
              <div className="product-rating">
                <p>{item.rating.rate} / 5</p>
                <p>{item.rating.count} sold</p>
              </div>
            </div>
          </div>
          <div className="product-desc">
            <div className="desc-heading">Product description</div>
            <p>{item.description}</p>
          </div>
        </div>
        <div className="product-icon" onClick={handleAddToCart}>
          <p>add to cart</p>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/" from="/product" />;
  }
}
