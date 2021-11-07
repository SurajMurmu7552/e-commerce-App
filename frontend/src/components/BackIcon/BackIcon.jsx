import { useNavigate } from "react-router-dom";

import "./BackIcon.css";

export default function BackIcon() {
  const navigate = useNavigate();
  function handleBackLink() {
    navigate("../");
  }
  return (
    <div className="back-icon" onClick={handleBackLink}>
      <div></div>
      <div></div>
      <div></div>
      go back
    </div>
  );
}
