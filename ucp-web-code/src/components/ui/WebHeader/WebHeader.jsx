import React from "react";
import Logo from '../../assets/logo04.jpg';
import './WebHeader.css';

export default function WebHeader(){
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