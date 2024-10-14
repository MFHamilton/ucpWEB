import React, { useState, useEffect } from 'react';
import WebHeader from '../../components/ui/WebHeader/WebHeader';
import Button from '../../components/ui/Button/button';
import './midTerm.css';

export default function midTermReport () {
  const [year, setYear] = useState('2024');
  const [quarter, setQuarter] = useState('enero-abril');
  const [studentInfo, setStudentInfo] = useState(null);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Mock function to fetch student info
    const fetchStudentInfo = async () => {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStudentInfo({
        id: '490867',
        name: 'Lucía Camila Martínez',
        career: '(IND) Ingeniería Industrial'
      });
    };

    fetchStudentInfo();
  }, []);

  const generateReport = () => {
    // Mock function to generate report
    console.log(`Generating report for ${year}, ${quarter}`);
    // Here you would typically fetch the course data based on year and quarter
    setCourses([
      // Add mock course data here
    ]);
  };

  const years = Array.from({ length: 10 }, (_, i) => (2024 - i).toString());
  const quarters = ['enero-abril', 'mayo-agosto', 'septiembre-diciembre'];

  return (
    <div className="ucp-container">
      <WebHeader />
      <nav className="ucp-nav">
        <ul>
          <li>Inicio</li>
          <li>Procesos</li>
          <li>Reportes</li>
          <li>Asignaturas</li>
        </ul>
      </nav>
      <main className="ucp-main">
        <h1>Volante de Medio Término</h1>
        <div className="ucp-filters">
          <div className="ucp-select-container">
            <label htmlFor="year">Año</label>
            <select id="year" value={year} onChange={(e) => setYear(e.target.value)}>
              {years.map(y => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>
          <div className="ucp-select-container">
            <label htmlFor="quarter">Cuatrimestre</label>
            <select id="quarter" value={quarter} onChange={(e) => setQuarter(e.target.value)}>
              {quarters.map(q => <option key={q} value={q}>{q}</option>)}
            </select>
          </div>
          <Button onClick={generateReport}>Generar Reporte</Button>
        </div>
        {studentInfo && (
          <div className="ucp-student-info">
            <p><strong>ID:</strong> {studentInfo.id}</p>
            <p><strong>Nombre:</strong> {studentInfo.name}</p>
            <p><strong>Carrera:</strong> {studentInfo.career}</p>
          </div>
        )}
        <table className="ucp-courses-table">
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
            {courses.map((course, index) => (
              <tr key={index}>
                <td>{course.clave}</td>
                <td>{course.sec}</td>
                <td>{course.asignatura}</td>
                <td>{course.profesor}</td>
                <td>{course.cr}</td>
                <td>{course.califBase}</td>
                <td>{course.calif}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};


