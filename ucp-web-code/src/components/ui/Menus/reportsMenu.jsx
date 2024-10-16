import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Menus/menu.css';

function ReportsMenu() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="menu-container-reports">
      <ul className="menu-list vertical">
        <li className="menu-item" onClick={() => handleNavigation('/midterm')}>
          <span className="icon document"></span>
          <span>Volante de Calificaciones Medio Término</span>
        </li>
        <li className="menu-item" onClick={() => handleNavigation('/finalsReport')}>
          <span className="icon document"></span>
          <span>Volante de Calificaciones Finales</span>
        </li>
        <li className="menu-item" onClick={() => handleNavigation('/preselectionReport')}>
          <span className="icon document"></span>
          <span>Volante de Preselección</span>
        </li>
        <li className="menu-item" onClick={() => handleNavigation('/selectionReport')}>
          <span className="icon document"></span>
          <span>Volante de Selección</span>
        </li>
        <li className="menu-item" onClick={() => handleNavigation('/paymentInfo')}>
          <span className="icon dollar"></span>
          <span>Hoja de Pago</span>
        </li>
        <li className="menu-item" onClick={() => handleNavigation('/dropCourse')}>
          <span className="icon minus"></span>
          <span>Volante de Retiros</span>
        </li>
      </ul>
    </div>
  );
}

export default ReportsMenu;
