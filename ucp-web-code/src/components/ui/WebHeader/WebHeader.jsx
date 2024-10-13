import React, { useState, useEffect } from 'react';
import Logo from '../../../assets/logo04.jpg';
import ProcessesMenu from '../Menus/processMenu';
import ReportsMenu from '../Menus/reportsMenu';
import './WebHeader.css';

export default function WebHeader(){
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

    return(
        <div className="web-header">
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
      </div>

    );
}