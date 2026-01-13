import { useState, useEffect } from "react";

function Profile() {
  const user = JSON.parse(localStorage.getItem("registeredUser"));

  const [verified, setVerified] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");

  const [name, setName] = useState(user.name);
  const [photo, setPhoto] = useState(
    user.photo ||
      "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
  );

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // 🔐 SIMPLE OTP (THIS WAS WORKING EARLIER)
  useEffect(() => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);
    alert("Your OTP is: " + otp);
    console.log("OTP:", otp);
  }, []);

  const verifyOtp = () => {
    if (enteredOtp === generatedOtp) {
      setVerified(true);
    } else {
      alert("Invalid OTP");
    }
  };

  if (!verified) {
    return (
      <div className="profile-page center-page">
        <div className="security-card">
          <h2 className="security-title">Confirm Your Identity</h2>

          <p className="security-text">
            Enter the OTP sent to your registered mobile/email.
          </p>

          <input
            className="security-input"
            value={enteredOtp}
            onChange={(e) => setEnteredOtp(e.target.value)}
            placeholder="Enter OTP"
          />

          <button className="security-btn" onClick={verifyOtp}>
            Verify & Continue
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <h2>Profile & Security Settings</h2>

      <div className="profile-card">
        <h3>Profile Information</h3>

        <div className="profile-photo-section">
          <img src={photo} alt="profile" />
          <label className="photo-btn">
            Change Photo
            <input
              type="file"
              hidden
              onChange={(e) =>
                setPhoto(URL.createObjectURL(e.target.files[0]))
              }
            />
          </label>
        </div>

        <input value={user.account} disabled />
        <input value={name} onChange={(e) => setName(e.target.value)} />

        <button
          onClick={() => {
            localStorage.setItem(
              "registeredUser",
              JSON.stringify({ ...user, name, photo })
            );
            alert("Profile updated");
          }}
        >
          Update Profile
        </button>
      </div>

      <div className="profile-card">
        <h3>Change Password</h3>

        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button
          onClick={() => {
            if (newPassword === confirmPassword) {
              localStorage.setItem(
                "registeredUser",
                JSON.stringify({ ...user, password: newPassword })
              );
              alert("Password updated");
            } else {
              alert("Passwords do not match");
            }
          }}
        >
          Update Password
        </button>
      </div>
    </div>
  );
}

export default Profile;
