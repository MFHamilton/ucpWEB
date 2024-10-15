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
  const [activeCourse, setActiveCourse] = useState(null); // Track active course for schedule change
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const course = coursesData[searchTerm.toUpperCase()];
    if (course) {
      setSelectedCourse({ id: searchTerm.toUpperCase(), ...course });
      setSuccessMessage(''); // Clear success message on search
    } else {
      setSelectedCourse(null);
      setErrorMessage('Curso no encontrado'); // Set error message
      setTimeout(() => setErrorMessage(''), 3000);
    }
  };

  const handleCourseClick = (course) => {
    // Toggle the active course
    if (activeCourse && activeCourse.id === course.id) {
      setActiveCourse(null); // Close the dropdown
    } else {
      setActiveCourse(course); // Set the clicked course as active
    }
  };

  const handleScheduleSelect = (schedule) => {
    const newCourse = { ...selectedCourse, selectedSchedule: schedule };
    setPreSelectedCourses([...preSelectedCourses, newCourse]);
    setActiveCourse(null);
    setSearchTerm('');
    setSelectedCourse(null);
  };

  const handleScheduleChange = (course, newSchedule) => {
    const updatedCourses = preSelectedCourses.map((c) => 
      c.id === course.id ? { ...c, selectedSchedule: newSchedule } : c
    );
    setPreSelectedCourses(updatedCourses);
    setActiveCourse(null);
  };

  const handleSave = () => {
    setSuccessMessage('Selección guardada con éxito'); // Set success message
    setErrorMessage(''); // Clear error message on save
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div className="course-pre-selection">
      <WebHeader/>
      <main className='main-preselection'>
        <h2>Selección</h2>
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
            {preSelectedCourses.map((course) => (
              <div key={course.id} className="course-item">
                <span>{course.id} - {course.name} - {course.selectedSchedule.time} - {course.selectedSchedule.professor}</span>
                <button onClick={() => handleCourseClick(course)}>Cambiar Horario</button>
                {activeCourse && activeCourse.id === course.id && (
                  <ul className="schedule-dropdown">
                    {course.schedules.map((schedule, index) => (
                      <li key={index} onClick={() => handleScheduleChange(course, schedule)}>
                        {schedule.time} - {schedule.professor}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {selectedCourse && (
              <div className="course-item" onClick={() => handleCourseClick(selectedCourse)}>
                <span>{selectedCourse.id} - {selectedCourse.name}</span>
                {activeCourse && activeCourse.id === selectedCourse.id && (
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
        </div>

        <button className="save-button" onClick={handleSave}>Guardar</button>
      </main>
    </div>
  );
}
