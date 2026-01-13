import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const [error, setError] = useState("");

  const sendOtp = () => {
    if (!mobile || !password) {
      setError("All fields are required");
      return;
    }

    if (mobile.length !== 10) {
      setError("Enter valid 10-digit mobile number");
      return;
    }

    const registeredUser = JSON.parse(
      localStorage.getItem("registeredUser")
    );

    if (!registeredUser) {
      setError("No user registered. Please register first.");
      return;
    }

    if (
      mobile !== registeredUser.mobile ||
      btoa(password) !== registeredUser.password
    ) {
      setError("Invalid mobile number or password");
      return;
    }

    setError("");

    // ✅ ALWAYS STORE OTP AS STRING
    const generatedOtp = (
      Math.floor(100000 + Math.random() * 900000)
    ).toString();

    localStorage.setItem("otp", generatedOtp);

    alert("OTP sent (demo): " + generatedOtp);
    setOtpSent(true);
  };

  const verifyOtp = () => {
    if (!otp) {
      setError("Please enter OTP");
      return;
    }

    const storedOtp = localStorage.getItem("otp");

    // ✅ TRIM INPUT
    if (otp.trim() === storedOtp) {
      // ✅ SESSION FLAG (IMPORTANT)
      localStorage.setItem("userSession", "true");
      localStorage.setItem(
        "user",
        JSON.stringify({ mobile })
      );

      localStorage.removeItem("otp");
      navigate("/dashboard");
    } else {
      setError("Invalid OTP");
    }
  };

  return (
    <div className="center-page">
      <div className="form-box">
        <h2>Login</h2>

        {error && <p className="error">{error}</p>}

        {!otpSent ? (
          <>
            <input
              type="text"
              placeholder="Registered Mobile Number"
              maxLength="10"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />

            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
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

            <button onClick={sendOtp}>Send OTP</button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={verifyOtp}>Verify OTP</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
