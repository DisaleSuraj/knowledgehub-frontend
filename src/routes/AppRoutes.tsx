import { Routes, Route, Navigate } from "react-router-dom";

import AdminDashboard from "../pages/admin/AdminDashboard";
import UsersPage from "../pages/admin/UsersPage";
import DepartmentsPage from "../pages/admin/DepartmentsPage";
import DocumentsPage from "../pages/admin/DocumentsPage";
import AIManagementPage from "../pages/admin/AIManagementPage";
import SecurityPage from "../pages/admin/SecurityPage";
import AuditLogsPage from "../pages/admin/AuditLogsPage";
import AnalyticsPage from "../pages/admin/AnalyticsPage";
import StoragePage from "../pages/admin/StoragePage";
import SettingsPage from "../pages/admin/SettingsPage";

const AppRoutes = () => {
  return (
    <Routes>

      {/* Redirect root to Super Admin */}
      <Route
        path="/"
        element={<Navigate to="/admin/dashboard" replace />}
      />

      {/* Super Admin */}
      <Route
        path="/admin"
        element={<Navigate to="/admin/dashboard" replace />}
      />

      <Route
        path="/admin/dashboard"
        element={<AdminDashboard />}
      />

      <Route
        path="/admin/users"
        element={<UsersPage />}
      />

      <Route
        path="/admin/departments"
        element={<DepartmentsPage />}
      />

      <Route
        path="/admin/documents"
        element={<DocumentsPage />}
      />

      <Route
        path="/admin/ai"
        element={<AIManagementPage />}
      />

      <Route
        path="/admin/security"
        element={<SecurityPage />}
      />

      <Route
        path="/admin/audit-logs"
        element={<AuditLogsPage />}
      />

      <Route
        path="/admin/analytics"
        element={<AnalyticsPage />}
      />

      <Route
        path="/admin/storage"
        element={<StoragePage />}
      />

      <Route
        path="/admin/settings"
        element={<SettingsPage />}
      />

      {/* Unknown routes */}
      <Route
        path="*"
        element={<Navigate to="/admin/dashboard" replace />}
      />

    </Routes>
  );
};

export default AppRoutes;