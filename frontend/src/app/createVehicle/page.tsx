"use client";
import React from "react";
import "./VehicleModal.scss";

type VehicleModalProps = {
  onClose: () => void;
};

const VehicleModal: React.FC<VehicleModalProps> = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="vehicle-modal">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <div className="modal-header">
          <h2>Cadastrar novo veículo</h2>
        </div>
        <form className="modal-form">
          <label htmlFor="name">Nome do Veículo</label>
          <input id="name" type="text" placeholder="Digite o nome do veículo" />

          <label htmlFor="plate">Placa do Veículo</label>
          <input
            id="plate"
            type="text"
            placeholder="Digite a placa do veículo"
          />

          <button type="submit">Criar Veículo</button>
        </form>
      </div>
    </div>
  );
};

export default VehicleModal;
