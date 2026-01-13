import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminAccounts() {
  const navigate = useNavigate();

  // ✅ admin session (no state needed)
  const admin = localStorage.getItem("adminSession");

  // ✅ user state (needed for UI update)
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("registeredUser"))
  );

  // ✅ protect route
  useEffect(() => {
    if (!admin) {
      navigate("/admin");
    }
  }, [admin, navigate]);

  if (!admin) {
    return <p style={{ textAlign: "center" }}>Redirecting...</p>;
  }

  if (!user) {
    return (
      <div className="center-page">
        <div className="form-box">
          <p>No users found</p>
          <button onClick={() => navigate("/admin/dashboard")}>
            Back
          </button>
        </div>
      </div>
    );
  }

  const status = user.status || "ACTIVE";
  const verified = user.verified || false;

  const toggleStatus = () => {
    const updatedUser = {
      ...user,
      status: status === "ACTIVE" ? "INACTIVE" : "ACTIVE"
    };
    localStorage.setItem(
      "registeredUser",
      JSON.stringify(updatedUser)
    );
    setUser(updatedUser);
  };

  const verifyUser = () => {
    const updatedUser = {
      ...user,
      verified: true
    };
    localStorage.setItem(
      "registeredUser",
      JSON.stringify(updatedUser)
    );
    setUser(updatedUser);
  };

  return (
    <div className="center-page">
      <div className="form-box">
        <h2>Customer Account Management</h2>

        <p><b>Name:</b> {user.name}</p>
        <p><b>Account:</b> {user.account}</p>
        <p><b>Status:</b> {status}</p>
        <p><b>Verified:</b> {verified ? "Yes" : "No"}</p>

        <button onClick={toggleStatus}>
          {status === "ACTIVE" ? "Deactivate" : "Activate"} Account
        </button>

        {!verified && (
          <button onClick={verifyUser}>
            Verify Identity
          </button>
        )}

        <button onClick={() => navigate("/admin/dashboard")}>
          Back
        </button>
      </div>
    </div>
  );
}

export default AdminAccounts;
