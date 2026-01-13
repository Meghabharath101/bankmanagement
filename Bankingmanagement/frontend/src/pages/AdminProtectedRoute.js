import { Navigate } from "react-router-dom";

function AdminProtectedRoute({ children }) {
  const admin = localStorage.getItem("adminSession");

  if (admin !== "true" && admin !== "ACTIVE") {
    return <Navigate to="/admin" />;
  }

  return children;
}

export default AdminProtectedRoute;
