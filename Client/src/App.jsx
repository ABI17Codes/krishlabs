import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Offering from "./pages/Offering";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Layout from "./AppLayout/Layout";

// Admin-related pages/components
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";

const App = () => {
  return (
    <Routes>
      {/* Public  routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="offering" element={<Offering />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      {/* Admin routes */}
      <Route path="/admin">
        {/* Admin route Login Page */}
        <Route path="login" element={<AdminLogin />} />
        {/* Protected route Admin Dashboard */}
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
