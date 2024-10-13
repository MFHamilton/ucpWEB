import React, { useState, useEffect } from 'react';
import Logo from '../../assets/logo04.jpg';
import './dashboard.css';
import '../../components/ui/Menus/menu.css';
// New imports for the dropdown menus
import ProcessesMenu from '../../components/ui/Menus/processMenu';
import ReportsMenu from '../../components/ui/Menus/reportsMenu';


export default function Dashboard() {
  const [studentInfo, setStudentInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    // Simulate fetching student data
    setTimeout(() => {
      const dummyData = {
        name: "John Doe",
        id: "123456",
        career: "Computer Science",
        enrollmentQuarter: "Fall 2023",
        generalIndex: "3.5",
        quarterlyIndex: "3.7",
        lastQuarter: "Spring 2024",
        completedQuarters: "4",
        totalQuarters: "8",
        creditsApproved: "60",
        totalCredits: "120"
      };

      setStudentInfo(dummyData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!studentInfo) {
    return <div>No student information available.</div>;
  }

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <div className="dashboard">
      <header className="header">
        <div className="logo-container-dashboard">
          <img src={Logo} alt="UCP Logo" className="logo-dashboard" />
        </div>
        <div className="user-info">
          <span>{studentInfo.name}</span>
          <button className="menu-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>
      </header>
      <nav className="nav">
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li>
            <a href="#procesos" onClick={() => toggleDropdown('processes')}>Procesos</a>
            {activeDropdown === 'processes' && <ProcessesMenu />}
          </li>
          <li>
            <a href="#reportes" onClick={() => toggleDropdown('reports')}>Reportes</a>
            {activeDropdown === 'reports' && <ReportsMenu />}
          </li>
          <li><a href="#asignaturas">Asignaturas</a></li>
        </ul>
      </nav>

      <div className="student-info-card">
        <h2>Datos Generales</h2>
        <div className="info-grid">
          <div>
            <p><strong>ID:</strong> {studentInfo.id}</p>
            <p><strong>Carrera:</strong> {studentInfo.career}</p>
            <p><strong>Cuatrimestre de Ingreso:</strong> {studentInfo.enrollmentQuarter}</p>
          </div>
          <div>
            <p><strong>Índice General:</strong> {studentInfo.generalIndex}</p>
            <p><strong>Índice Cuatrimestral:</strong> {studentInfo.quarterlyIndex}</p>
            <p><strong>Último Cuatrimestre:</strong> {studentInfo.lastQuarter}</p>
          </div>
        </div>
      </div>

      <main className="main">
        <div className="widget-grid">
          <div className="widget">
            <h2>Índice Cuatrimestral</h2>
            <p className="widget-value">{studentInfo.quarterlyIndex}</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: `${(parseFloat(studentInfo.quarterlyIndex) / 4) * 100}%`}}></div>
            </div>
          </div>
          <div className="widget">
            <h2>Cuatrimestres Cursados</h2>
            <p className="widget-value">{studentInfo.completedQuarters} de {studentInfo.totalQuarters}</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: `${(parseInt(studentInfo.completedQuarters) / parseInt(studentInfo.totalQuarters)) * 100}%`}}></div>
            </div>
          </div>
          <div className="widget">
            <h2>Créditos Aprobados</h2>
            <p className="widget-value">{studentInfo.creditsApproved} de {studentInfo.totalCredits}</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: `${(parseInt(studentInfo.creditsApproved) / parseInt(studentInfo.totalCredits)) * 100}%`}}></div>
            </div>
          </div>
          <div className="widget">
            <h2>Índice General</h2>
            <p className="widget-value">{studentInfo.generalIndex}</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: `${(parseFloat(studentInfo.generalIndex) / 4) * 100}%`}}></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
