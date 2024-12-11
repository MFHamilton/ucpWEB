import React, { useState, useEffect } from 'react';
import WebHeader from '../../components/ui/WebHeader/WebHeader';
import './midTerm.css';

export default function SelectionReport() {
  const [year, setYear] = useState('');
  const [quarter, setQuarter] = useState('');
  const [studentInfo, setStudentInfo] = useState(null);
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Function to fetch student and course data
  const fetchSelectionReport = async () => {
    if (!year || !quarter) {
      alert('Please select both year and quarter');
      return;
    }

    try {
      const studentResponse = await fetch('https://your-backend-endpoint/api/student/490867'); // Reemplaza con el endpoint del estudiante
      const studentData = await studentResponse.json();

      const coursesResponse = await fetch(`https://your-backend-endpoint/api/student/490867/courses?year=${year}&quarter=${quarter}`); // Reemplaza con el endpoint de cursos
      const coursesData = await coursesResponse.json();

      setStudentInfo(studentData);
      setCourses(coursesData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching selection report:", error);
      setIsLoading(false);
    }
  };

  const handleGenerateReport = () => {
    fetchSelectionReport();
  };

  useEffect(() => {
    // You can fetch default student info if needed on component mount
  }, []);

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
                {courses.map((course) => (
                  <tr key={course.code}>
                    <td>{course.code}</td>
                    <td>{course.section}</td>
                    <td>{course.name}</td>
                    <td>{course.credits}</td>
                    <td>{course.schedule.mon}</td>
                    <td>{course.schedule.tue}</td>
                    <td>{course.schedule.wed}</td>
                    <td>{course.schedule.thu}</td>
                    <td>{course.schedule.fri}</td>
                    <td>{course.schedule.sat}</td>
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
