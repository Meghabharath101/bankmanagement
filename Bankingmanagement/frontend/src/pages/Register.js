import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const registerUser = () => {
    // EMPTY FIELD CHECK
    if (!name || !mobile || !password) {
      setError("All fields are mandatory");
      return;
    }

    // MOBILE NUMBER CHECK
    if (mobile.length !== 10) {
      setError("Enter a valid 10-digit mobile number");
      return;
    }

    setError("");

    // STORE USER (FRONTEND SIMULATION)
    const user = {
      name,
      mobile,
      password: btoa(password),
      account: "UTB" + Math.floor(100000 + Math.random() * 900000),
      balance: 50000
    };

    localStorage.setItem("registeredUser", JSON.stringify(user));

    alert("Registration successful. Please login.");
    navigate("/login");
  };

  return (
    <>
      <div className="center-page">
        <div className="form-box">
          <h2>Register</h2>

          {error && <p className="error">{error}</p>}

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Mobile Number"
            maxLength="10"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />

         <div className="password-wrapper">
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Create Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />

  <span
    className="eye-icon"
    onClick={() => setShowPassword(!showPassword)}
  >
    👁
  </span>
</div>




          <button onClick={registerUser}>Register</button>
        </div>
      </div>

      
    </>
  );
}

export default Register;
