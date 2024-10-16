import React, { useState, useEffect } from 'react';
import WebHeader from '../../components/ui/WebHeader/WebHeader';
import './midTerm.css';

export default function MidtermReport() {
  const [year, setYear] = useState('');
  const [quarter, setQuarter] = useState('');
  const [studentInfo, setStudentInfo] = useState(null);
  const [midtermGrades, setMidtermGrades] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Función para obtener los datos del estudiante y las calificaciones de medio término
  const fetchMidtermReport = async () => {
    if (!year || !quarter) {
      alert('Please select both year and quarter');
      return;
    }

    setIsLoading(true);

    try {
      const studentResponse = await fetch('https://your-backend-endpoint/api/student/490867'); // Reemplaza con tu endpoint
      const studentData = await studentResponse.json();

      const gradesResponse = await fetch(`https://your-backend-endpoint/api/student/490867/midterm-grades?year=${year}&quarter=${quarter}`); // Reemplaza con tu endpoint
      const gradesData = await gradesResponse.json();

      setStudentInfo(studentData);
      setMidtermGrades(gradesData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching midterm report:", error);
      setIsLoading(false);
    }
  };

  const handleGenerateReport = () => {
    fetchMidtermReport();
  };

  useEffect(() => {
    // Si es necesario, se puede cargar información inicial al montar el componente
  }, []);

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
          <p>Cargando datos...</p>
        ) : (
          <>
            {studentInfo && (
              <div className="student-info">
                <p><strong>ID:</strong> {studentInfo.id}</p>
                <p><strong>Nombre:</strong> {studentInfo.name}</p>
                <p><strong>Carrera:</strong> {studentInfo.career}</p>
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
                  <th>Calif Base</th>
                  <th>Calif</th>
                </tr>
              </thead>
              <tbody>
                {midtermGrades.map((course) => (
                  <tr key={course.code}>
                    <td>{course.code}</td>
                    <td>{course.section}</td>
                    <td>{course.name}</td>
                    <td>{course.professor}</td>
                    <td>{course.credits}</td>
                    <td>{course.baseGrade}</td>
                    <td>{course.midtermGrade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </main>
    </div>
  );
}
