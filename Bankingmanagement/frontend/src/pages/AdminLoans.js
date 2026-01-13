import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLoans() {
  const navigate = useNavigate();

  // ✅ admin session (no state needed)
  const admin = localStorage.getItem("adminSession");

  // ✅ loan state (important)
  const [loan, setLoan] = useState(
    JSON.parse(localStorage.getItem("loan"))
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

  if (!loan) {
    return (
      <div className="center-page">
        <div className="form-box">
          <p>No loan applications</p>
          <button onClick={() => navigate("/admin/dashboard")}>
            Back
          </button>
        </div>
      </div>
    );
  }

  // ✅ safe default
  const status = loan.status || "PENDING";

  const updateLoan = (newStatus) => {
    const updatedLoan = {
      ...loan,
      status: newStatus
    };
    localStorage.setItem("loan", JSON.stringify(updatedLoan));
    setLoan(updatedLoan); // ✅ re-render
    alert("Loan " + newStatus);
  };

  return (
    <div className="center-page">
      <div className="form-box">
        <h2>Loan Applications</h2>

        <p><b>Loan Type:</b> {loan.loanType}</p>
        <p><b>Amount:</b> ₹{loan.amount}</p>
        <p><b>Status:</b> {status}</p>
        <p><b>Document:</b> {loan.document || "Not uploaded"}</p>

        <button onClick={() => updateLoan("APPROVED")}>
          Approve
        </button>

        <button onClick={() => updateLoan("REJECTED")}>
          Reject
        </button>

        <button onClick={() => navigate("/admin/dashboard")}>
          Back
        </button>
      </div>
    </div>
  );
}

export default AdminLoans;
