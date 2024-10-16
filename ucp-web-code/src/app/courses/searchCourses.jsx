import React, { useState } from 'react';
import WebHeader from '../../components/ui/WebHeader/WebHeader';
import './searchCourses.css';

// Mock data for courses and schedules
const coursesData = [
  {
    id: 'ICS202',
    name: 'ALGORITMOS MALICIOSOS',
    credits: 3,
    schedules: [
      { day: 'Lunes', time: '14:00 - 16:00', room: 'AV-01' },
      { day: 'Miércoles', time: '14:00 - 16:00', room: 'AV-01' },
    ],
  },
  {
    id: 'ICS202L',
    name: 'LABORATORIO DE ALGORITMOS MALICIOSOS',
    credits: 1,
    schedules: [
      { day: 'Viernes', time: '14:00 - 16:00', room: 'LAB-03' },
    ],
  },
];

export default function CourseSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCourse, setExpandedCourse] = useState(null);

  const filteredCourses = coursesData.filter((course) =>
    course.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCourseClick = (courseId) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  return (
    <div className="course-search">
        <WebHeader />

      <h3>Oferta Académica</h3>

      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar asignatura..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button className="search-button">Buscar</button>
      </div>

      <div className="courses-container">
        <div className="course-category">
          <h3>ASIGNATURAS</h3>

          {filteredCourses.map((course) => (
            <div key={course.id} className="course-item">
              <div className="course-header" onClick={() => handleCourseClick(course.id)}>
                <span>{course.id} - {course.name}</span>
                <span className="credits">Cr: {course.credits}</span>
              </div>

              {expandedCourse === course.id && (
                <div className="course-schedules">
                  <h3>Horarios:</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Día</th>
                        <th>Hora</th>
                        <th>Aula</th>
                      </tr>
                    </thead>
                    <tbody>
                      {course.schedules.map((schedule, index) => (
                        <tr key={index}>
                          <td>{schedule.day}</td>
                          <td>{schedule.time}</td>
                          <td>{schedule.room}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
