function AdminServices() {
  const req = JSON.parse(
    localStorage.getItem("serviceRequest")
  );

  if (!req) return <p>No requests</p>;

  const update = (status) => {
    localStorage.setItem(
      "serviceRequest",
      JSON.stringify({ ...req, status })
    );
    alert("Updated");
  };

  return (
    <div className="form-box">
      <p>Service: {req.service}</p>
      <p>Status: {req.status}</p>
      <button onClick={() => update("APPROVED")}>
        Approve
      </button>
      <button onClick={() => update("REJECTED")}>
        Reject
      </button>
    </div>
  );
}

export default AdminServices;
