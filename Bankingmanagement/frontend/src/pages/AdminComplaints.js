import { useState } from "react";

function AdminComplaints() {
  const complaint = JSON.parse(
    localStorage.getItem("complaint")
  );
  const [reply, setReply] = useState("");

  if (!complaint) return <p>No complaints</p>;

  const sendReply = () => {
    localStorage.setItem(
      "complaint",
      JSON.stringify({ ...complaint, reply })
    );
    alert("Reply sent");
  };

  return (
    <div className="form-box">
      <p>Complaint: {complaint.message}</p>
      <textarea
        placeholder="Reply"
        onChange={(e) => setReply(e.target.value)}
      />
      <button onClick={sendReply}>Send</button>
    </div>
  );
}

export default AdminComplaints;
