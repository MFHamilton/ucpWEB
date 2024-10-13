import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/ui/Button/input.jsx';
import Button from '../../components/ui/Button/button.jsx';
import Logo from '../../assets/LogoWeb.jpg';
import background from '../../assets/background01.jpg'
import './login.css';

export default function LogIn() {
  const [studentCode, setStudentCode] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí simplemente navegamos al dashboard sin verificar credenciales
    navigate('/dashboard');
  };

  return (
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
    
  );
}
