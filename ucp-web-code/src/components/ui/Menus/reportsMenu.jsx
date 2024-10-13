import React from 'react';
import '../Menus/menu.css';

export default function ReportsMenu() {
  return (
    <div className="menu-container-reports">
      <ul className="menu-list vertical">
        <li className="menu-item">
          <span className="icon document"></span>
          <span>Volante de Calificaciones Medio Término</span>
        </li>
        <li className="menu-item">
          <span className="icon document"></span>
          <span>Volante de Calificaciones Finales</span>
        </li>
        <li className="menu-item">
          <span className="icon document"></span>
          <span>Volante de Preselección</span>
        </li>
        <li className="menu-item">
          <span className="icon document"></span>
          <span>Volante de Selección</span>
        </li>
        <li className="menu-item">
          <span className="icon dollar"></span>
          <span>Hoja de Pago</span>
        </li>
        <li className="menu-item">
          <span className="icon minus"></span>
          <span>Volante de Retiros</span>
        </li>
      </ul>
    </div>
  );
}