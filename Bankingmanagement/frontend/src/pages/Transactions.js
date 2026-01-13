import React, { useState } from "react";

function Transactions() {
  const user = JSON.parse(localStorage.getItem("registeredUser"));

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const transactions = [
    {
      date: "01-01-2026",
      desc: "Opening Balance",
      debit: "",
      credit: "50,000",
      balance: "50,000"
    },
    {
      date: "03-01-2026",
      desc: "ATM Withdrawal",
      debit: "5,000",
      credit: "",
      balance: "45,000"
    },
    {
      date: "06-01-2026",
      desc: "UPI Transfer",
      debit: "2,000",
      credit: "",
      balance: "43,000"
    },
    {
      date: "10-01-2026",
      desc: "Salary Credit",
      debit: "",
      credit: "20,000",
      balance: "63,000"
    }
  ];

  return (
    <div className="txn-page">
      <h2 className="txn-title">Transaction History</h2>

      {/* Date Filter */}
      <div className="txn-filter">
        <div>
          <label>From Date</label>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </div>

        <div>
          <label>To Date</label>
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </div>
      </div>

      {/* Account Info */}
      <div className="txn-account">
        <p><strong>Account Holder:</strong> {user.name}</p>
        <p>
          <strong>Account Number:</strong>{" "}
          {user.accountNumber || user.accNo || user.account_no || "UTBXXXXXX"}
        </p>
        <p><strong>Account Type:</strong> Savings Account</p>
      </div>

      {/* Transaction Table */}
      <div className="txn-table-wrapper">
        <table className="txn-table">
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
                <td className="debit">{t.debit || "-"}</td>
                <td className="credit">{t.credit || "-"}</td>
                <td>{t.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transactions;
