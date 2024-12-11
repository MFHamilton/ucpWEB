import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Menus/menu.css';

export default function ProcessesMenu() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="menu-container">
      <ul className="menu-list vertical">
        <li className="menu-item" onClick={() => handleNavigation('/preseleccion')}>
          <span className="icon document"></span>
          <span>Preselección</span>
        </li>
        <li className="menu-item" onClick={() => handleNavigation('/seleccion')}>
          <span className="icon document"></span>
          <span>Selección</span>
        </li>
        <li className="menu-item" onClick={() => handleNavigation('/retiro')}>
          <span className="icon document"></span>
          <span>Retiro</span>
        </li>
      </ul>
    </div>
  );
}
