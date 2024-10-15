import React from 'react';
import { Button } from "../Button/button";

export function AlertDialog({ isOpen, onClose, onConfirm, title, description }) {
  if (!isOpen) return null;

  return (
    <div className="alert-dialog-overlay">
      <div className="alert-dialog-content">
        <h2 className="alert-dialog-title">{title}</h2>
        <p className="alert-dialog-description">{description}</p>
        <div className="alert-dialog-actions">
          <Button onClick={onClose} variant="secondary">Cancelar</Button>
          <Button onClick={onConfirm}>Continuar</Button>
        </div>
      </div>
    </div>
  );
}