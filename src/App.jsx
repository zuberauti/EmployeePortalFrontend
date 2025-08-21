import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import MainContent from "./components/layout/MainContent";

// Pages
import Dashboard from "./components/pages/Dashboard";
import Attendance from "./components/pages/Attendance";
import LeaveManagement from "./components/pages/LeaveManagement";
import Payslips from "./components/pages/Payslips";
import Profile from "./components/pages/Profile";
import Settings from "./components/pages/Settings";

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1">
          <Header />
          <MainContent>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/leave-management" element={<LeaveManagement />} />
              <Route path="/payslips" element={<Payslips />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </MainContent>
        </div>
      </div>
    </Router>
  );
}

export default App;
