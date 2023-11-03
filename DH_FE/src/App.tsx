import { Routes, Route, Navigate } from "react-router-dom";

import MainDashboard from "src/views/admin/default";
import DataTables from "src/views/admin/tables";
import AdminLayout from "src/layouts/admin";
import AuthLayout from "src/layouts/auth";
import Register from "./views/auth/Register";
import SignIn from "./views/auth/SignIn";
import ResetPassword from "./views/auth/ResetPassword";
import EmailConfirm from "./views/auth/EmailConfirm";

const App = () => {
  return (
    <Routes>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="register" element={<Register />} />
        <Route path="sign-in" element={<SignIn /> } />
        <Route path="reset-password" element={<ResetPassword /> } />
        <Route path="confirm-password" element={<EmailConfirm /> } />
      </Route>
      <Route path="admin/" element={<AdminLayout />}>
        <Route path="patients/" element={<DataTables />} />
        <Route path="view-patients/:userId" element={<MainDashboard />} />
      </Route>
      <Route path="/" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default App;
