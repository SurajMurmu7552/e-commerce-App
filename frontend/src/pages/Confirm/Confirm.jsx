import { Link } from "react-router-dom";
import "./Confirm.css";

export default function Confirm() {
  return (
    <div className="placed">
      <div className="placed-heading">
        <p>The order has been placed</p>
        <p>Expect the delivery soon.</p>
      </div>
      <div className="back-link">
        <Link to="/">Go back to Homepage</Link>
      </div>
    </div>
  );
}
