import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LogIn from './app/login/ucp-login.jsx';
import Dashboard from './app/dashboard/ucp-dashboard.jsx';
import Preseleccion from './app/processes/preselection.jsx';
import Seleccion from './app/processes/selection.jsx';
import Retiro from './app/processes/dropCourse.jsx';
import MidTerm from './app/reports/midTerm.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/preseleccion" element={<Preseleccion />} />
        <Route path="/seleccion" element={<Seleccion />} />
        <Route path="/retiro" element={<Retiro />} />
        <Route path="/midterm" element={<MidTerm />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
