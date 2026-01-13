import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function MainHeader() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="header-inner">
        <div className="logo-area">
          <img
  src={logo}
  alt="Unity Trust Bank"
  style={{ height: "60px" }}
/>

        </div>
<div className="menu">
      <span>Accounts & Deposits</span>
      <span>Fund Transfer</span>
      <span>Transaction History</span>
      <span>Loans</span>
    </div>

    <div className="auth-buttons">
      <button className="login-btn" onClick={() => navigate("/login")}>
        Login
      </button>

      <button
        className="register-btn"
        onClick={() => navigate("/register")}
      >
        Register
      </button>
    </div>

  </div>
</div>
  );
}

export default MainHeader;
