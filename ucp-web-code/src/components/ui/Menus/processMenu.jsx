import React from 'react';
import '../Menus/menu.css';

export default function ProcessesMenu() {
  return (
    <div className="menu-container">
      <ul className="menu-list vertical">
        <li className="menu-item">
          <span className="icon document"></span>
          <span>Preselección</span>
        </li>
        <li className="menu-item">
          <span className="icon document"></span>
          <span>Selección</span>
        </li>
        <li className="menu-item">
          <span className="icon document"></span>
          <span>Retiro</span>
        </li>
      </ul>
    </div>
  );
}