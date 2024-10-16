import React, { useState } from 'react';
import WebHeader from '../../components/ui/WebHeader/WebHeader';
import './midTerm.css';

export default function MidtermReport() {
  const [year, setYear] = useState('');
  const [quarter, setQuarter] = useState('');

  const handleGenerateReport = () => {
    if (year && quarter) {
      alert(`Generating report for ${year} - ${quarter}`);
      // Here you would typically make an API call to fetch the report data
    } else {
      alert('Please select both year and quarter');
    }
  };

  return (
    <div className="midterm-report">
      <WebHeader />
      <main>
        <h3>Volante de Medio Término</h3>
        <div className="report-controls">
          <select 
            value={year} 
            onChange={(e) => setYear(e.target.value)}
            className="dropdown"
          >
            <option value="">Año</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
          <select 
            value={quarter} 
            onChange={(e) => setQuarter(e.target.value)}
            className="dropdown"
          >
            <option value="">Cuatrimestre</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button onClick={handleGenerateReport} className="generate-btn">
            Generar Reporte
          </button>
        </div>
        <div className="student-info">
          <p><strong>ID:</strong> 490867</p>
          <p><strong>Nombre:</strong> Lucía Camila Martínez</p>
          <p><strong>Carrera:</strong> (IND) Ingeniería Industrial</p>
        </div>
        <table className="courses-table">
          <thead>
            <tr>
              <th>Clave</th>
              <th>Sec</th>
              <th>Asignatura</th>
              <th>Profesor</th>
              <th>CR</th>
              <th>Calif Base</th>
              <th>Calif</th>
            </tr>
          </thead>
          <tbody>
            {/* Course rows would be dynamically generated here */}
          </tbody>
        </table>
      </main>
    </div>
  );
}