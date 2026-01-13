                     import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Transfer from "./pages/Transfer";
import Transactions from "./pages/Transactions";
import Profile from "./pages/Profile";
import LoanApplication from "./pages/LoanApplication";
import Services from "./pages/Services";
import BankStatement from "./pages/BankStatement";
import Complaints from "./pages/Complaints";

/* ===== ADMIN IMPORTS ===== */
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminAccounts from "./pages/AdminAccounts";
import AdminLoans from "./pages/AdminLoans";
import AdminServices from "./pages/AdminServices";
import AdminComplaints from "./pages/AdminComplaints";
import AdminProtectedRoute from "./pages/AdminProtectedRoute";

function App() {
  return (
    <Routes>
      {/* ===== PUBLIC ROUTES ===== */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* ===== USER ROUTES ===== */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/transfer" element={<Transfer />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/loan-apply" element={<LoanApplication />} />
      <Route path="/services" element={<Services />} />
      <Route path="/statement" element={<BankStatement />} />
      <Route path="/complaints" element={<Complaints />} />

      {/* ===== ADMIN LOGIN ===== */}
      <Route path="/admin" element={<AdminLogin />} />

      {/* ===== PROTECTED ADMIN ROUTES ===== */}
      <Route
        path="/admin/dashboard"
        element={
          <AdminProtectedRoute>
            <AdminDashboard />
          </AdminProtectedRoute>
        }
      />

      <Route
        path="/admin/accounts"
        element={
          <AdminProtectedRoute>
            <AdminAccounts />
          </AdminProtectedRoute>
        }
      />

      <Route
        path="/admin/loans"
        element={
          <AdminProtectedRoute>
            <AdminLoans />
          </AdminProtectedRoute>
        }
      />

      <Route
        path="/admin/services"
        element={
          <AdminProtectedRoute>
            <AdminServices />
          </AdminProtectedRoute>
        }
      />

      <Route
        path="/admin/complaints"
        element={
          <AdminProtectedRoute>
            <AdminComplaints />
          </AdminProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
