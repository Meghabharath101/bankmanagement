import { useState } from "react";

function LoanApplication() {
  const user = JSON.parse(localStorage.getItem("registeredUser"));

  const [loanType, setLoanType] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [tenure, setTenure] = useState("");
  const [interestType, setInterestType] = useState("");
  const [purpose, setPurpose] = useState("");
  const [agree, setAgree] = useState(false);

  const submitLoan = () => {
    if (
      !loanType ||
      !loanAmount ||
      !tenure ||
      !interestType ||
      !agree
    ) {
      alert("Please complete all mandatory fields");
      return;
    }

    const loanRequest = {
      accountNumber: user.account,
      name: user.name,
      accountType: "Savings",
      loanType,
      loanAmount,
      tenure,
      interestType,
      purpose,
      status: "Pending"
    };

    console.log("Loan Application:", loanRequest);
    alert(
      "Loan application submitted successfully.\nStatus: Pending approval"
    );

    setLoanType("");
    setLoanAmount("");
    setTenure("");
    setInterestType("");
    setPurpose("");
    setAgree(false);
  };

  return (
    <div className="loan-page">
      <h2>Loan Application</h2>

      {/* ACCOUNT DETAILS */}
      <div className="loan-card">
        <h3>Applicant & Account Details</h3>

        <input value={user.name} disabled />
        <input value={user.account} disabled />
        <input value="Savings Account" disabled />
        <input value="UTIB0000456" disabled />
        <input value={`₹${user.balance}`} disabled />
      </div>

      {/* LOAN DETAILS */}
      <div className="loan-card">
        <h3>Loan Details</h3>

        <select
          value={loanType}
          onChange={(e) => setLoanType(e.target.value)}
        >
          <option value="">Select Loan Type</option>
          <option>Personal Loan</option>
          <option>Home Loan</option>
          <option>Education Loan</option>
          <option>Vehicle Loan</option>
        </select>

        <input
          type="number"
          placeholder="Loan Amount (₹)"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />

        <select
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
        >
          <option value="">Select Tenure</option>
          <option>1 Year</option>
          <option>3 Years</option>
          <option>5 Years</option>
          <option>10 Years</option>
          <option>15 Years</option>
        </select>

        <select
          value={interestType}
          onChange={(e) => setInterestType(e.target.value)}
        >
          <option value="">Interest Type</option>
          <option>Fixed</option>
          <option>Floating</option>
        </select>

        <textarea
          placeholder="Purpose of Loan (optional)"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
        />
      </div>

      {/* DECLARATION */}
      <div className="loan-card">
        <h3>Declaration</h3>

        <label>
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          I hereby declare that the information provided above is true and
          correct to the best of my knowledge.
        </label>

        <button onClick={submitLoan}>
          Submit Loan Application
        </button>
      </div>
    </div>
  );
}

export default LoanApplication;
