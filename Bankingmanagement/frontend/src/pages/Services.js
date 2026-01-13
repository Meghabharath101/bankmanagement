import React, { useState } from "react";

function Services() {
  const user = JSON.parse(localStorage.getItem("registeredUser"));
  const [serviceType, setServiceType] = useState("ATM");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="services-page">
      <h2 className="services-title">Banking Services</h2>

      {!submitted ? (
        <form className="services-form" onSubmit={handleSubmit}>
          {/* Service Selection */}
          <div className="form-group">
            <label>Select Service</label>
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
            >
              <option value="ATM">ATM / Debit Card Request</option>
              <option value="CHEQUE">Cheque Book Request</option>
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

            <div className="form-group">
              <label>Account Type</label>
              <input type="text" value="Savings Account" readOnly />
            </div>
          </div>

          {/* Cheque Book Options */}
          {serviceType === "CHEQUE" && (
            <div className="form-section">
              <h4>Cheque Book Details</h4>

              <div className="form-group">
                <label>Number of Leaves</label>
                <select>
                  <option>25 Leaves</option>
                  <option>50 Leaves</option>
                </select>
              </div>
            </div>
          )}

          {/* Address */}
          <div className="form-section">
            <h4>Delivery Address</h4>
            <textarea
              rows="3"
              placeholder="Registered address will be used"
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit Request
          </button>
        </form>
      ) : (
        <div className="service-success">
          <h3>Request Submitted Successfully</h3>
          <p>
            Your request for{" "}
            <strong>
              {serviceType === "ATM"
                ? "ATM / Debit Card"
                : "Cheque Book"}
            </strong>{" "}
            has been successfully submitted.
          </p>
          <p>It will be processed within 5–7 working days.</p>
        </div>
      )}
    </div>
  );
}

export default Services;
