import React, { useState } from "react";

function Complaints() {
  const user = JSON.parse(localStorage.getItem("registeredUser"));
  const [type, setType] = useState("COMPLAINT");
  const [submitted, setSubmitted] = useState(false);
  const [refNo] = useState("UTB" + Math.floor(100000 + Math.random() * 900000));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="complaint-page">
      <h2 className="complaint-title">Complaint / Feedback</h2>

      {!submitted ? (
        <form className="complaint-form" onSubmit={handleSubmit}>
          {/* Type */}
          <div className="form-group">
            <label>Type</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="COMPLAINT">Complaint</option>
              <option value="FEEDBACK">Feedback</option>
            </select>
          </div>

          {/* Account Details */}
          <div className="form-section">
            <h4>Account Details</h4>

            <div className="form-group">
              <label>Account Holder Name</label>
              <input type="text" value={user.name} readOnly />
            </div>

            <div className="form-group">
              <label>Account Number</label>
              <input
                type="text"
                value={
                  user.accountNumber ||
                  user.accNo ||
                  user.account_no ||
                  "UTBXXXXXX"
                }
                readOnly
              />
            </div>
          </div>

          {/* Category */}
          <div className="form-group">
            <label>Category</label>
            <select required>
              <option value="">-- Select --</option>
              <option>ATM / Debit Card</option>
              <option>Cheque Book</option>
              <option>Fund Transfer</option>
              <option>Net Banking</option>
              <option>Service Quality</option>
              <option>Others</option>
            </select>
          </div>

          {/* Description */}
          <div className="form-group">
            <label>Description</label>
            <textarea
              rows="4"
              placeholder={
                type === "COMPLAINT"
                  ? "Describe your issue clearly"
                  : "Share your feedback"
              }
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      ) : (
        <div className="complaint-success">
          <h3>Submitted Successfully</h3>
          <p>
            Your {type === "COMPLAINT" ? "complaint" : "feedback"} has been
            registered.
          </p>
          <p>
            <strong>Reference Number:</strong> {refNo}
          </p>
          <p>Our team will review and respond shortly.</p>
        </div>
      )}
    </div>
  );
}

export default Complaints;
