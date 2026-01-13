import React from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const logoutAdmin = () => {
    localStorage.removeItem("adminSession");
    navigate("/admin/login");
  };

  return (
    <div className="dashboard-container">
      {/* Top Bar */}
      <div className="topbar">
        <h2>Unity Trust Bank</h2>
        <button onClick={logoutAdmin} className="logout-btn">
          Logout
        </button>
      </div>

      <h1 className="welcome-text">Welcome, Admin</h1>

      {/* Admin Dashboard Buttons */}
      <div className="dashboard-grid">
        <button onClick={() => navigate("/admin/users")}>
          User Approvals
        </button>

        <button onClick={() => navigate("/admin/accounts")}>
          Account Management
        </button>

        <button onClick={() => navigate("/admin/services")}>
          Service Requests
        </button>

        <button onClick={() => navigate("/admin/complaints")}>
          Complaints & Feedback
        </button>

        <button onClick={() => navigate("/admin/transactions")}>
          Transactions Monitor
        </button>

        <button onClick={() => navigate("/admin/audit")}>
          Audit Logs
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;
