import React from "react";


function Transfer() {
  return React.createElement(
    "div",
    { className: "transfer-page" },

    // Title
    React.createElement(
      "h2",
      { className: "transfer-title" },
      "Fund Transfer"
    ),

    // From Account
    React.createElement(
      "div",
      { className: "transfer-card" },
      React.createElement("h3", null, "From Account"),
      React.createElement(
        "div",
        { className: "row" },
        React.createElement("input", {
          type: "text",
          value: "UTB148477",
          disabled: true
        }),
        React.createElement("input", {
          type: "text",
          value: "Ann",
          disabled: true
        }),
        React.createElement("input", {
          type: "text",
          value: "₹48,166",
          disabled: true
        })
      )
    ),

    // Beneficiary Details
    React.createElement(
      "div",
      { className: "transfer-card" },
      React.createElement("h3", null, "Beneficiary Details"),
      React.createElement(
        "div",
        { className: "row" },
        React.createElement("input", { placeholder: "Beneficiary Name" }),
        React.createElement("input", { placeholder: "Bank Name" })
      ),
      React.createElement(
        "div",
        { className: "row" },
        React.createElement("input", { placeholder: "Account Number" }),
        React.createElement("input", { placeholder: "IFSC Code" })
      )
    ),

    // Transfer Details
    React.createElement(
      "div",
      { className: "transfer-card" },
      React.createElement("h3", null, "Transfer Details"),
      React.createElement(
        "div",
        { className: "row" },
        React.createElement("input", {
          type: "number",
          placeholder: "Amount (₹)"
        }),
        React.createElement(
          "select",
          null,
          React.createElement("option", null, "Select Transfer Type"),
          React.createElement("option", null, "IMPS (Instant)"),
          React.createElement("option", null, "NEFT"),
          React.createElement("option", null, "RTGS")
        )
      ),
      React.createElement("textarea", {
        placeholder: "Remarks (Optional)"
      })
    ),

    // Buttons
    React.createElement(
      "div",
      { className: "button-row" },
      React.createElement(
        "button",
        {
          className: "transfer-btn",
          onClick: function () {
            alert("Transfer Successful (Demo)");
          }
        },
        "Transfer"
      ),
      React.createElement(
        "button",
        {
          className: "cancel-btn",
          onClick: function () {
            window.location.href = "/dashboard";
          }
        },
        "Cancel"
      )
    )
  );
}

export default Transfer;
