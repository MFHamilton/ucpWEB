import React, { useState } from 'react';
import WebHeader from "../../components/ui/WebHeader/WebHeader";
import Button from '../../components/ui/Button/button';
import './processes.css';

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
  const [errorMessage, setErrorMessage] = useState(''); // Nueva variable para mensajes de error

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission
    const course = coursesData[searchTerm.toUpperCase()];
    if (course) {
      setSelectedCourse({ id: searchTerm.toUpperCase(), ...course });
      setShowDropdown(false);
      setErrorMessage(''); // Limpiar mensaje de error al buscar
    } else {
      setSelectedCourse(null);
      setErrorMessage('Curso no encontrado'); // Establecer mensaje de error
      setTimeout(() => setErrorMessage(''), 3000);
    }
  };

  const handleCourseClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleScheduleSelect = (schedule) => {
    const newCourse = { ...selectedCourse, selectedSchedule: schedule };
    setPreSelectedCourses([...preSelectedCourses, newCourse]);
    setShowDropdown(false);
    setSearchTerm('');
    setSelectedCourse(null);
  };

  const handleSave = () => {
    setSuccessMessage('Preselección guardada con éxito'); // Establecer mensaje de éxito
    setErrorMessage(''); // Limpiar mensaje de error al guardar
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div className="course-pre-selection">
      <WebHeader/>
      <main className='main-preselection'>
        <h2>Preselección</h2>
        <form onSubmit={handleSearch} className="search-container">
          <input
            type="text"
            placeholder="Ingrese el código o nombre de la asignatura"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button type="submit" className='search-button-preselection'>Buscar</Button>
        </form>
        
        {successMessage && <div className="success-message">{successMessage}</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>} 

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

        
      </main>
    </div>
  );
}
