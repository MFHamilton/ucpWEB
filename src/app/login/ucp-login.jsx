import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/ui/Button/input.jsx';
import Button from '../../components/ui/Button/button.jsx';
import Logo from '../../assets/LogoWeb.jpg';
import background from '../../assets/background01.jpg';
import './login.css';

export default function LogIn() {
  const [studentCode, setStudentCode] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // Estado para manejar errores
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.tudominio.com/login', { // Cambia esto a tu endpoint real
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ studentCode, password }), // Envía las credenciales
      });

      if (!response.ok) {
        throw new Error('Credenciales incorrectas'); // Manejo de error si las credenciales no son válidas
      }

      const data = await response.json();
      // Suponiendo que el token o datos del estudiante están devueltos, puedes almacenarlos
      localStorage.setItem('token', data.token); // Ejemplo de almacenamiento de token
      navigate('/dashboard'); // Redirige al dashboard si la autenticación es exitosa
    } catch (err) {
      setError(err.message); // Establece el error en el estado
    }
  };

  return (
    <div className="image-container">
      <div className="login-container"> 
        <div className="login-form-container">
          <div className="login-form">
            <div className="logo-container">
              <img
                src={Logo}
                alt="UCP Logo" 
                className="logo"
              />
            </div>
            {error && <div className="error-message">{error}</div>} {/* Mensaje de error */}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <div>
                  <label htmlFor="student-code" className="form-label">
                    Código Estudiantil
                  </label>
                  <Input
                    id="student-code"
                    name="student-code"
                    type="text"
                    required
                    className="text-code"
                    placeholder="Ej. 123456"
                    value={studentCode}
                    onChange={(e) => setStudentCode(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="text-password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="text-sm">
                <a href="#" className="forgot-password">
                  Olvidé mi contraseña
                </a>
              </div>
              <Button type="submit" className="submit-button">
                Ingresar
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
