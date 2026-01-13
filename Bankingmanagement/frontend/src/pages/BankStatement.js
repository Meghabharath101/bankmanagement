import React, { useState } from "react";

function BankStatement() {
  const user = JSON.parse(localStorage.getItem("registeredUser"));

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [showStatement, setShowStatement] = useState(false);

  const transactions = [
    { date: "01-01-2026", desc: "Opening Balance", debit: "-", credit: "50,000", balance: "50,000" },
    { date: "03-01-2026", desc: "ATM Withdrawal", debit: "5,000", credit: "-", balance: "45,000" },
    { date: "06-01-2026", desc: "UPI Transfer", debit: "2,000", credit: "-", balance: "43,000" },
    { date: "10-01-2026", desc: "Salary Credit", debit: "-", credit: "20,000", balance: "63,000" }
  ];

  return (
    <div className="statement-container">
      {!showStatement && (
        <div className="filter-box">
          <h2>Download Bank Statement</h2>

          <label>From Date</label>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />

          <label>To Date</label>
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />

          <button onClick={() => setShowStatement(true)}>
            View Statement
          </button>
        </div>
      )}

      {showStatement && (
        <>
          <div className="statement">
            <div className="bank-header">
              <h1>Unity Trust Bank</h1>
              <p>Official Account Statement</p>
            </div>

            <div className="account-details">
              <p><strong>Account Holder:</strong> {user.name}</p>
              <p><strong>Account Number:</strong> {user.accountNumber}</p>
              <p><strong>Account Type:</strong> Savings</p>
              <p><strong>Statement Period:</strong> {fromDate} to {toDate}</p>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Debit (₹)</th>
                  <th>Credit (₹)</th>
                  <th>Balance (₹)</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((t, i) => (
                  <tr key={i}>
                    <td>{t.date}</td>
                    <td>{t.desc}</td>
                    <td>{t.debit}</td>
                    <td>{t.credit}</td>
                    <td>{t.balance}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="note">
              This is a system generated statement and does not require signature.
            </p>
          </div>

          <div className="actions">
            <button onClick={() => window.print()}>
              Download PDF
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default BankStatement;
