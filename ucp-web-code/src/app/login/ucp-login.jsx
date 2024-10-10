import React, { useState } from 'react';
import Input from '../../components/ui/Button/input.jsx';
import Button from '../../components/ui/Button/button.jsx';
import Logo from '../../assets/LogoWeb.jpg';
import './login.module.css';

export default function LogIn() {
  const [studentCode, setStudentCode] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Código Estudiantil:', studentCode);
    console.log('Contraseña:', password);
    // Aquí iría la lógica para enviar los datos al servidor
  };

  return (
    <div className= "login-container">
      <div className= "login-form-container">
        <div cl assName="login-form">
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
                  className="form-input"
                  placeholder="Ej. 123456"
                  value={studentCode}
                  onChange={(e) => setStudentCode(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="form-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                Olvidé mi contraseña
              </a>
            </div>
            <Button type="submit" className="submit-button">
              Ingresar
            </Button>
          </form>
        </div>
      </div>
      <div className="image-container" style={{backgroundImage: `url('assets/background.jpg')`}}>
      </div>
    </div>
  );
};

