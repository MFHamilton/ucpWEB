import React, { useState, useEffect } from 'react';
import WebHeader from "../../components/ui/WebHeader/WebHeader";
import Button from '../../components/ui/Button/button';
import './processes.css';

export default function CoursePreSelection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [preSelectedCourses, setPreSelectedCourses] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [coursesData, setCoursesData] = useState({}); // State for courses from the database

  // Fetch courses from the database when the component mounts
  useEffect(() => {
    fetch('/api/courses') // Replace with your actual API endpoint
      .then(response => response.json())
      .then(data => {
        setCoursesData(data); // Store courses data in state
      })
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const course = coursesData[searchTerm.toUpperCase()];
    if (course) {
      setSelectedCourse({ id: searchTerm.toUpperCase(), ...course });
      setShowDropdown(false);
      setErrorMessage('');
    } else {
      setSelectedCourse(null);
      setErrorMessage('Curso no encontrado');
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
    // Save the preSelectedCourses for later use
    localStorage.setItem('preSelectedCourses', JSON.stringify(preSelectedCourses));
    setSuccessMessage('Preselección guardada con éxito');
    setErrorMessage('');
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
