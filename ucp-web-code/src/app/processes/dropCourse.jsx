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

  const handleCourseClick = (courseId) => {
    setSelectedCourse(coursesData[courseId]);
    setShowDropdown(!showDropdown);
  };

  const handleScheduleSelect = (schedule) => {
    const newCourse = { ...selectedCourse, selectedSchedule: schedule };
    setPreSelectedCourses([...preSelectedCourses, newCourse]);
    setShowDropdown(false);
    setSelectedCourse(null);
  };

  const handleSave = () => {
    console.log('Preselección guardada con éxito');
  };

  const handleMoveToPreSelected = (courseId) => {
    const courseToMove = coursesData[courseId];
    if (courseToMove) {
      const newCourse = { id: courseId, name: courseToMove.name, selectedSchedule: null };
      setPreSelectedCourses([...preSelectedCourses, newCourse]);
    }
  };

  const handleRemoveFromPreSelected = (courseId) => {
    const updatedCourses = preSelectedCourses.filter(course => course.id !== courseId);
    setPreSelectedCourses(updatedCourses);
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
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>{courseId} - {coursesData[courseId].name}</span>
                <img 
                  src="src/assets/cuadrado-x.png" 
                  alt="Eliminar" 
                  style={{ width: '20px', height: '20px', cursor: 'pointer' }} 
                  onClick={(e) => {
                    e.stopPropagation(); // Para evitar que se active handleCourseClick
                    handleMoveToPreSelected(courseId);
                  }} 
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
              <div key={index} className="pre-selected-course" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>{course.id} - {course.name}</span>
                <span>{course.selectedSchedule ? `${course.selectedSchedule.time} - ${course.selectedSchedule.professor}` : 'Sin horario seleccionado'}</span>
                <button onClick={() => handleRemoveFromPreSelected(course.id)}>Retirar</button>
              </div>
            ))}
          </div>
        </div>

        <button className="save-button" onClick={handleSave}>Guardar</button>
      </main>
    </div>
  );
}
