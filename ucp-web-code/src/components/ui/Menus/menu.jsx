import React from 'react';
import './Menus.css';

const MenuIcon = ({ type }) => {
  switch (type) {
    case 'document':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      );
    case 'dollar':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      );
    case 'minus':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      );
    default:
      return null;
  }
};

const MenuItem = ({ icon, text }) => (
  <li className="menu-item">
    <MenuIcon type={icon} />
    <span>{text}</span>
  </li>
);

export const ProcessesMenu = () => (
  <div className="menu-container">
    <h2 className="menu-title">Procesos</h2>
    <ul className="menu-list">
      <MenuItem icon="document" text="Preselección de Asignaturas" />
      <MenuItem icon="document" text="Selección de Asignaturas" />
      <MenuItem icon="document" text="Retiro de Asignaturas" />
    </ul>
  </div>
);

export const ReportsMenu = () => (
  <div className="menu-container">
    <h2 className="menu-title">Reportes</h2>
    <ul className="menu-list">
      <MenuItem icon="document" text="Volante de Calificaciones Medio Término" />
      <MenuItem icon="document" text="Volante de Calificaciones Finales" />
      <MenuItem icon="document" text="Volante de Preselección" />
      <MenuItem icon="document" text="Volante de Selección" />
      <MenuItem icon="dollar" text="Hoja de Pago" />
      <MenuItem icon="minus" text="Volante de Retiros" />
    </ul>
  </div>
);