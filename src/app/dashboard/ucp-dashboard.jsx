import React, { useState, useEffect } from 'react';
import './dashboard.css';
import '../../components/ui/Menus/menu.css';
import WebHeader from '../../components/ui/WebHeader/WebHeader';

export default function Dashboard() {
  const [studentInfo, setStudentInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.tudominio.com/student/123456'); // Cambia esto a tu endpoint real
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setStudentInfo(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
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

  return (
    <div className="dashboard">
      <WebHeader />
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

      <main className="main-dashboard">
        <div className="widget-grid">
          <div className="widget widget-index-cuatrimestral">
            <h2>Índice Cuatrimestral</h2>
            <p className="widget-value">{studentInfo.quarterlyIndex}</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: `${(parseFloat(studentInfo.quarterlyIndex) / 4) * 100}%`}}></div>
            </div>
          </div>
          <div className="widget widget-cuatrimestres-cursados">
            <h2>Cuatrimestres Cursados</h2>
            <p className="widget-value">{studentInfo.completedQuarters} de {studentInfo.totalQuarters}</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: `${(parseInt(studentInfo.completedQuarters) / parseInt(studentInfo.totalQuarters)) * 100}%`}}></div>
            </div>
          </div>
          <div className="widget widget-creditos-aprobados">
            <h2>Créditos Aprobados</h2>
            <p className="widget-value">{studentInfo.creditsApproved} de {studentInfo.totalCredits}</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: `${(parseInt(studentInfo.creditsApproved) / parseInt(studentInfo.totalCredits)) * 100}%`}}></div>
            </div>
          </div>
          <div className="widget widget-indice-general">
            <h2>Índice General</h2>
            <p className="widget-value">{studentInfo.generalIndex}</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: `${(parseFloat(studentInfo.generalIndex) / 4) * 100}%`}}></div>
            </div>
          </div>
        </div>
      </main>

      <div className="schedule-table">
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Materia</th>
                <th>Aula</th>
                <th>Lunes</th>
                <th>Martes</th>
                <th>Miércoles</th>
                <th>Jueves</th>
                <th>Viernes</th>
                <th>Sábado</th>
              </tr>
            </thead>
            <tbody>
              {studentInfo.schedule.map((item, index) => (
                <tr key={index}>
                  <td>{item.subject}</td>
                  <td>{item.classroom}</td>
                  <td>{item.monday || '-'}</td>
                  <td>{item.tuesday || '-'}</td>
                  <td>{item.wednesday || '-'}</td>
                  <td>{item.thursday || '-'}</td>
                  <td>{item.friday || '-'}</td>
                  <td>{item.saturday || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
