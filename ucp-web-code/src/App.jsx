import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LogIn from './app/login/ucp-login.jsx';
import Dashboard from './app/dashboard/ucp-dashboard.jsx';
import Preseleccion from './app/processes/preselection.jsx';
import Seleccion from './app/processes/selection.jsx';
import Retiro from './app/processes/dropCourse.jsx';
import MidTerm from './app/reports/midTerm.jsx';
import FinalsReport from './app/reports/finalsReport.jsx';
import PreselectionReport from './app/reports/preselectionReport.jsx';
import SelectionReport from './app/reports/selectionReport.jsx';
import PaymentInfo from './app/reports/paymentInfo.jsx';
import DropCourse from './app/reports/dropCourseReport.jsx';
import CourseSearch from '../src/app/courses/searchCourses.jsx';
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
        <Route path="/finalsReport" element={<FinalsReport />} />
        <Route path="/preselectionReport" element={<PreselectionReport />} />
        <Route path="/selectionReport" element={<SelectionReport />} />
        <Route path="/paymentInfo" element={<PaymentInfo />} />
        <Route path="/dropCourse" element={<DropCourse />} />
        <Route path="/coursesearch" element={<CourseSearch />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
