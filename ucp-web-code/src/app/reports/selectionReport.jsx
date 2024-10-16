import React, { useState } from 'react';
import WebHeader from '../../components/ui/WebHeader/WebHeader';
import './midTerm.css';

export default function selectionReport() {
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
        <h3>Volante de Selección</h3>
        <div className="report-controls">
          <select 
            value={year} 
            onChange={(e) => setYear(e.target.value)}
            className="dropdown"
          >
            <option value="">Año</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
          </select>
          <select 
            value={quarter} 
            onChange={(e) => setQuarter(e.target.value)}
            className="dropdown"
          >
            <option value="">Cuatrimestre</option>
            <option value="1">ENE-ABR</option>
            <option value="2">MAY-AGO</option>
            <option value="3">SEP-DIC</option>
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
              <th>CR</th>
              <th>Lun</th>
              <th>Mar</th>
                <th>Mie</th>
                <th>Jue</th>
                <th>Vie</th>
                <th>Sab</th>
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