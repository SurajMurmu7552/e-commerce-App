import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./Card.css";
import { addItem } from "../../redux/singleDataSlice";

export default function Card({ item, lastItem }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleProductLink() {
    dispatch(addItem(item));
    navigate("/product");
  }

  return (
    <div className="card" ref={lastItem}>
      <div className="card-container" onClick={handleProductLink}>
        <div className="card-img">
          <img src={item.image} alt="" />
        </div>
        <div className="card-content">
          <div className="card-title">{item.title.slice(0, 30)}...</div>
          <div className="card-price">
            <p>
              <span>&#8377;</span>
              {item.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
