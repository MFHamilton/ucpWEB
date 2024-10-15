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
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [preSelectedCourses, setPreSelectedCourses] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

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

  const handleMoveToPreSelected = (courseId) => {
    const courseToMove = coursesData[courseId];
    if (courseToMove) {
      const newCourse = { id: courseId, name: courseToMove.name, selectedSchedule: null };
      setPreSelectedCourses([...preSelectedCourses, newCourse]);
      setSuccessMessage(`Curso ${courseToMove.name} movido a Retirar con éxito`); // Mensaje de éxito
      setTimeout(() => setSuccessMessage(''), 3000);
    }
  };

  return (
    <div className="course-pre-selection">
      <WebHeader/>
      <main className='main-preselection'>
        <h2 style={{marginBottom: '20px'}}>Retiro de Asignatura</h2>
        <div className="course-sections">
          <div className="course-list">
            <h3>Asignatura</h3>
            {Object.keys(coursesData).map(courseId => (
              <div 
                key={courseId} className="course-item" 
                onClick={() => handleCourseClick(courseId)} 
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'left' }}>
                <span>{courseId} - {coursesData[courseId].name}</span>
                <img 
                  src="src/assets/cuadrado-x.png" 
                  alt="Eliminar" 
                  style={{ width: '20px', height: '20px' }} 
                  onClick={() => handleMoveToPreSelected(courseId)} // Llama a la nueva función al hacer clic
                /> 
                {showDropdown && selectedCourse?.id === courseId && (
                  <ul className="schedule-dropdown">
                    {coursesData[courseId].schedules.map((schedule, index) => (
                      <li key={index} onClick={() => handleScheduleSelect(schedule)}>
                        {schedule.time} - {schedule.professor}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="pre-selection">
            <h3>Retirar</h3>
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
