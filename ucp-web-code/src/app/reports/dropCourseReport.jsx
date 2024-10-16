import React, { useState, useEffect } from 'react';
import WebHeader from '../../components/ui/WebHeader/WebHeader';
import './midTerm.css';

export default function CourseReport() {
  const [year, setYear] = useState('');
  const [quarter, setQuarter] = useState('');
  const [reportData, setReportData] = useState(null);
  const [studentInfo, setStudentInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Function to fetch report data based on year and quarter
  const fetchReportData = async (year, quarter) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://your-backend-endpoint/api/report?year=${year}&quarter=${quarter}`); // Reemplaza con tu URL real
      const data = await response.json();
      setReportData(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching report data:', error);
      setIsLoading(false);
    }
  };

  // Function to fetch student information from the database
  const fetchStudentInfo = async () => {
    try {
      const response = await fetch('https://your-backend-endpoint/api/student/490867'); // Reemplaza con tu URL real y ID de estudiante
      const data = await response.json();
      setStudentInfo(data);
    } catch (error) {
      console.error('Error fetching student info:', error);
    }
  };

  useEffect(() => {
    // Fetch student info when component mounts
    fetchStudentInfo();
  }, []);

  const handleGenerateReport = () => {
    if (year && quarter) {
      fetchReportData(year, quarter);
    } else {
      alert('Please select both year and quarter');
    }
  };

  return (
    <div className="midterm-report">
      <WebHeader />
      <main>
        <h3>Volante de Retiro</h3>
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
        
        {isLoading ? (
          <p>Cargando reporte...</p>
        ) : reportData ? (
          <>
            {studentInfo && (
              <div className="student-info">
                <p><strong>ID:</strong> {studentInfo.id}</p>
                <p><strong>Nombre:</strong> {studentInfo.name}</p>
                <p><strong>Carrera:</strong> {studentInfo.major}</p>
              </div>
            )}

            <table className="courses-table">
              <thead>
                <tr>
                  <th>Clave</th>
                  <th>Sec</th>
                  <th>Asignatura</th>
                  <th>Profesor</th>
                  <th>CR</th>
                </tr>
              </thead>
              <tbody>
                {reportData.courses.map((course, index) => (
                  <tr key={index}>
                    <td>{course.id}</td>
                    <td>{course.section}</td>
                    <td>{course.name}</td>
                    <td>{course.professor}</td>
                    <td>{course.credits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <p>No se ha generado ningún reporte.</p>
        )}
      </main>
    </div>
  );
}
