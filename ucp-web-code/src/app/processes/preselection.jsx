import React, { useState } from 'react';
import './preselection.css';

// Mock data for demonstration purposes
const coursesData = {
  'MAT101': { name: 'Matemáticas Básicas', schedules: [
    { time: 'Lun/Mie 10:00-12:00', professor: 'Dr. García' },
    { time: 'Mar/Jue 14:00-16:00', professor: 'Dra. Rodríguez' }
  ]},
  'FIS201': { name: 'Física General', schedules: [
    { time: 'Mar/Jue 08:00-10:00', professor: 'Dr. Martínez' },
    { time: 'Mie/Vie 16:00-18:00', professor: 'Dra. López' }
  ]},
};

export default function CoursePreSelection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [preSelectedCourses, setPreSelectedCourses] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSearch = () => {
    const course = coursesData[searchTerm.toUpperCase()];
    if (course) {
      setSelectedCourse({ id: searchTerm.toUpperCase(), ...course });
      setShowDropdown(false);
    } else {
      setSelectedCourse(null);
    }
  };

  const handleCourseClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleScheduleSelect = (schedule) => {
    const newCourse = { ...selectedCourse, selectedSchedule: schedule };
    setPreSelectedCourses([...preSelectedCourses, newCourse]);
    setShowDropdown(false);
  };

  const handleSave = () => {
    setSuccessMessage('Preselección guardada con éxito');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div className="course-pre-selection">
      <header className="header">
        <img src="/placeholder.svg?height=50&width=50" alt="UCP Logo" className="logo" />
        <nav>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#procesos">Procesos</a></li>
            <li><a href="#reportes">Reportes</a></li>
            <li><a href="#asignaturas">Asignaturas</a></li>
          </ul>
        </nav>
        <div className="user-info">
          <span>[Nombre estudiante]</span>
          <button className="logout-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
          </button>
        </div>
      </header>

      <main>
        <h2>Preselección</h2>
        <div className="search-container">
          <input
            type="text"
            placeholder="Ingrese el código o nombre de la asignatura"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Buscar</button>
        </div>

        <div className="course-sections">
          <div className="course-list">
            <h3>Asignatura</h3>
            {selectedCourse && (
              <div className="course-item" onClick={handleCourseClick}>
                <span>{selectedCourse.id} - {selectedCourse.name}</span>
                {showDropdown && (
                  <ul className="schedule-dropdown">
                    {selectedCourse.schedules.map((schedule, index) => (
                      <li key={index} onClick={() => handleScheduleSelect(schedule)}>
                        {schedule.time} - {schedule.professor}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>

          <div className="pre-selection">
            <h3>Preselección</h3>
            {preSelectedCourses.map((course, index) => (
              <div key={index} className="pre-selected-course">
                <span>{course.id} - {course.name}</span>
                <span>{course.selectedSchedule.time} - {course.selectedSchedule.professor}</span>
              </div>
            ))}
          </div>
        </div>

        <button className="save-button" onClick={handleSave}>Guardar</button>

        {successMessage && <div className="success-message">{successMessage}</div>}
      </main>
    </div>
  );
}