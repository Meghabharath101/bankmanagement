import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Dashboard() {
  const navigate = useNavigate();

  const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));
  const session = localStorage.getItem("userSession");

  useEffect(() => {
    if (!registeredUser || !session) {
      navigate("/login");
    }
  }, [registeredUser, session, navigate]);

  if (!registeredUser || !session) return null;

  return (
    <div className="bank-app">
      
      {/* HEADER */}
      <header className="bank-header">
        <div className="bank-left">
          <span className="bank-brand">Unity Trust Bank</span>
        </div>
      </header>

      {/* WELCOME */}
      <div className="welcome-screen">
        Welcome, {registeredUser.name}
      </div>

      {/* CONTENT */}
      <main className="bank-content">

        {/* ACCOUNT SUMMARY */}
        <section className="bank-summary">
          <h3>Account Summary</h3>

          <div className="summary-profile">
            <img
              src={
                registeredUser.photo ||
                "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              }
              alt="profile"
            />
          </div>

          <p><b>Account Holder:</b> {registeredUser.name}</p>
          <p><b>Account Number:</b> {registeredUser.account}</p>
          <p><b>Account Type:</b> Savings</p>
          <p className="balance">
            Available Balance: ₹{registeredUser.balance}
          </p>
        </section>

        {/* ACTION BUTTONS */}
        <section className="bank-actions">

          {/* ✅ FUND TRANSFER */}
          <button onClick={() => navigate("/transfer")}>
            Fund Transfer
          </button>

          <button onClick={() => navigate("/profile")}>
            Profile & Password Update
          </button>

          <button onClick={() => navigate("/loan-apply")}>
            Apply for Loan
          </button>

          <button onClick={() => navigate("/statement")}>
            Download Bank Statement
          </button>

          <button onClick={() => navigate("/services")}>
            ATM / Cheque Book Request
          </button>

          <button onClick={() => navigate("/complaints")}>
            Complaint / Feedback
          </button>

          <button onClick={() => navigate("/transactions")}>
            Transaction History
          </button>


        </section>
      </main>

      {/* FOOTER */}
      <footer className="bank-footer">
        <button
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem("userSession");
            navigate("/login");
          }}
        >
          Logout
        </button>
      </footer>

    </div>
  );
}

export default Dashboard;
