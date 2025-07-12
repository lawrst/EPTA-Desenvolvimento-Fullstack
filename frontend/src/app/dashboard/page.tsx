"use client";
import React, { useState } from "react";
import "../globals.scss";
import { Pencil, Archive, ArchiveRestore, Trash2 } from "lucide-react";

const DashboardPage = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [selectedVehicle, setSelectedVehicle] = useState<{
    id: number;
    nome: string;
    placa: string;
    status: string;
  } | null>(null);

  const [veiculo, setVeiculo] = useState("");
  const [placa, setPlaca] = useState("");

  const [vehicles, setVehicles] = useState([
    { id: 1, nome: "Fiat Strada", placa: "BRA4019", status: "Ativo" },
    { id: 2, nome: "Volkswagen Polo", placa: "XYZ7427", status: "Ativo" },
    { id: 3, nome: "Chevrolet Onix", placa: "QWE1234", status: "Inativo" },
    { id: 4, nome: "Toyota Corolla", placa: "ASD5678", status: "Ativo" },
    { id: 5, nome: "Honda Civic", placa: "ZXC9876", status: "Ativo" },
    { id: 6, nome: "Ford Ka", placa: "MNB3456", status: "Inativo" },
    { id: 7, nome: "Renault Kwid", placa: "POI6543", status: "Ativo" },
    { id: 8, nome: "Hyundai HB20", placa: "LKJ3210", status: "Ativo" },
    { id: 9, nome: "Nissan Versa", placa: "GHJ8901", status: "Inativo" },
    { id: 10, nome: "Peugeot 208", placa: "VBN1357", status: "Ativo" },
    { id: 11, nome: "Citroën C3", placa: "TRE2468", status: "Inativo" },
    { id: 12, nome: "Jeep Renegade", placa: "YUI3698", status: "Ativo" },
  ]);

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    const newVehicle = {
      id: Date.now(),
      nome: veiculo,
      placa: placa,
      status: "Ativo",
    };
    setVehicles((prev) => [...prev, newVehicle]);
    setShowCreateModal(false);
    setVeiculo("");
    setPlaca("");
  };

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedVehicle) return;

    setVehicles((prev) =>
      prev.map((v) =>
        v.id === selectedVehicle.id ? { ...v, nome: veiculo, placa } : v
      )
    );
    setShowEditModal(false);
    setSelectedVehicle(null);
    setVeiculo("");
    setPlaca("");
  };

  const handleDelete = () => {
    if (!selectedVehicle) return;
    setVehicles((prev) => prev.filter((v) => v.id !== selectedVehicle.id));
    setShowDeleteModal(false);
    setSelectedVehicle(null);
  };

  const toggleStatus = (id: number) => {
    setVehicles((prev) =>
      prev.map((v) =>
        v.id === id
          ? { ...v, status: v.status === "Ativo" ? "Inativo" : "Ativo" }
          : v
      )
    );
  };

  const openEditModal = (vehicle: any) => {
    setSelectedVehicle(vehicle);
    setVeiculo(vehicle.nome);
    setPlaca(vehicle.placa);
    setShowEditModal(true);
  };

  const openDeleteModal = (vehicle: any) => {
    setSelectedVehicle(vehicle);
    setShowDeleteModal(true);
  };

  const ativos = vehicles.filter((v) => v.status === "Ativo").length;
  const inativos = vehicles.filter((v) => v.status === "Inativo").length;

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="logo">
          <img src="/logo.png" alt="EPTA Tecnologia" />
        </div>

        <nav className="menu">
          <a className="active" href="/dashboard">
            Dashboard
          </a>
          <a href="/report">Relatórios</a>
        </nav>
      </aside>

      <main className="content">
        <header className="dashboard-header">
          <h1>Olá Lawrence,</h1>
          <p>Cadastre e gerencie seus veículos</p>
        </header>

        <section className="cards">
          <div className="card">
            <p>Total</p>
            <strong>{vehicles.length}</strong>
          </div>
          <div className="card">
            <p>Ativos</p>
            <strong>{ativos}</strong>
          </div>
          <div className="card">
            <p>Inativos</p>
            <strong>{inativos}</strong>
          </div>
        </section>

        <button className="add-button" onClick={() => setShowCreateModal(true)}>
          + Cadastrar Veículo
        </button>

        <table className="vehicle-table">
          <thead>
            <tr>
              <th>Veículo</th>
              <th>Placa</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle) => (
              <tr key={vehicle.id}>
                <td>{vehicle.nome}</td>
                <td>{vehicle.placa}</td>
                <td>
                  <span
                    className={`status ${
                      vehicle.status === "Ativo" ? "ativo" : "inativo"
                    }`}
                  >
                    {vehicle.status}
                  </span>
                </td>
                <td>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <button
                      className="icon-btn"
                      onClick={() => openEditModal(vehicle)}
                      title="Editar"
                    >
                      <Pencil />
                    </button>

                    <button
                      className="icon-btn"
                      onClick={() => toggleStatus(vehicle.id)}
                      title={
                        vehicle.status === "Ativo" ? "Arquivar" : "Desarquivar"
                      }
                    >
                      {vehicle.status === "Ativo" ? (
                        <Archive />
                      ) : (
                        <ArchiveRestore />
                      )}
                    </button>

                    <button
                      className="icon-btn"
                      onClick={() => openDeleteModal(vehicle)}
                      title="Excluir"
                    >
                      <Trash2 />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showCreateModal && (
          <div className="modal-overlay">
            <div className="vehicle-modal">
              <button
                className="close-btn"
                onClick={() => setShowCreateModal(false)}
              >
                ✖
              </button>
              <div className="modal-header">
                <h2>Cadastrar Novo Veículo</h2>
              </div>
              <form className="modal-form" onSubmit={handleCreate}>
                <label htmlFor="veiculo">Nome do Veículo</label>
                <input
                  id="veiculo"
                  value={veiculo}
                  onChange={(e) => setVeiculo(e.target.value)}
                  placeholder="Digite o nome do veículo"
                  required
                />
                <label htmlFor="placa">Placa do Veículo</label>
                <input
                  id="placa"
                  value={placa}
                  onChange={(e) => setPlaca(e.target.value)}
                  placeholder="Digite a placa do veículo"
                  required
                />
                <button type="submit">Criar Veículo</button>
              </form>
            </div>
          </div>
        )}

        {showEditModal && (
          <div className="modal-overlay">
            <div className="vehicle-modal">
              <button
                className="close-btn"
                onClick={() => setShowEditModal(false)}
              >
                ✖
              </button>
              <div className="modal-header">
                <span className="emoji">
                  <Pencil className="pencil-icon" />
                </span>
                <h2>Editar Veículo</h2>
              </div>
              <form className="modal-form" onSubmit={handleEdit}>
                <label htmlFor="editVeiculo">Nome do Veículo</label>
                <input
                  id="editVeiculo"
                  value={veiculo}
                  onChange={(e) => setVeiculo(e.target.value)}
                />
                <label htmlFor="editPlaca">Placa do Veículo</label>
                <input
                  id="editPlaca"
                  value={placa}
                  onChange={(e) => setPlaca(e.target.value)}
                />
                <button type="submit">Salvar Alterações</button>
              </form>
            </div>
          </div>
        )}

        {showDeleteModal && (
          <div className="modal-overlay">
            <div className="vehicle-modal">
              <button
                className="close-btn"
                onClick={() => setShowDeleteModal(false)}
              >
                ✖
              </button>
              <div className="modal-header">
                <div className="icon-btn">
                  <Trash2 />
                </div>
                <h2>Confirmar Exclusão</h2>
              </div>

              <div className="modal-form">
                <p style={{ marginBottom: "20px", textAlign: "center" }}>
                  Tem certeza que deseja deletar o veículo{" "}
                  <strong>{selectedVehicle?.nome}</strong>?
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "10px",
                  }}
                >
                  <button
                    style={{ backgroundColor: "#ccc", color: "#000" }}
                    onClick={() => setShowDeleteModal(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    style={{ backgroundColor: "#e53935" }}
                    onClick={handleDelete}
                  >
                    Confirmar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default DashboardPage;
