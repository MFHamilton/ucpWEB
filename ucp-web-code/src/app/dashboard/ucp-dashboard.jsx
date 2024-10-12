import React, { useState, useEffect } from 'react';

export default function Dashboard() {
    const [studentInfo, setStudentInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
  
    return (
      <div className="dashboard">
        <header className="header">
          <div className="logo-container">
            <img src="/placeholder.svg?height=50&width=50" alt="UCP Logo" className="logo" />
            <h1 className="title">Dashboard Estudiantil</h1>
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
            <li><a href="#procesos">Procesos</a></li>
            <li><a href="#reportes">Reportes</a></li>
            <li><a href="#asignaturas">Asignaturas</a></li>
          </ul>
        </nav>
  
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
  
          <div className="student-info-card">
            <h2>Información del Estudiante</h2>
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
        </main>
      </div>
    );
  }