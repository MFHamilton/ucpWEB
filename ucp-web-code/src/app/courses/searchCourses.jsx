import React, { useState, useEffect } from 'react';
import WebHeader from '../../components/ui/WebHeader/WebHeader';
import './searchCourses.css';

export default function CourseSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [coursesData, setCoursesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Function to fetch course data from the API
  const fetchData = async () => {
    try {
      const response = await fetch('https://your-backend-endpoint/api/courses'); // Reemplaza con tu endpoint real
      const data = await response.json();
      setCoursesData(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching courses:', error);
      setIsLoading(false);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

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

      {isLoading ? (
        <p>Cargando cursos...</p>
      ) : (
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
      )}
    </div>
  );
}
