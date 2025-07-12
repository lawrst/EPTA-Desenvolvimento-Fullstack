"use client";
import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

import "../globals.scss";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const ReportsPage = () => {
  const ativos = 324;
  const inativos = 26;

  const pieData = {
    labels: ["Ativos", "Inativos"],
    datasets: [
      {
        label: "Status dos Veículos",
        data: [ativos, inativos],
        backgroundColor: ["#4caf50", "#f44336"],
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: ["Janeiro", "Fevereiro", "Março", "Abril"],
    datasets: [
      {
        label: "Veículos Ativos",
        data: [80, 90, 75, 100],
        backgroundColor: "#4caf50",
      },
      {
        label: "Veículos Inativos",
        data: [10, 5, 15, 6],
        backgroundColor: "#f44336",
      },
    ],
  };

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="logo">
          <img src="/logo.png" alt="EPTA Tecnologia" />
        </div>

        <nav className="menu">
          <a href="/dashboard">Dashboard</a>
          <a className="active" href="#">
            Relatórios
          </a>
        </nav>
      </aside>

      <main className="content">
        <header className="dashboard-header">
          <h1>Relatórios</h1>
          <p>Visualize o status dos veículos cadastrados graficamente</p>
        </header>

        <section className="cards">
          <div className="card">
            <p>Total de Veículos</p>
            <strong>{ativos + inativos}</strong>
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

        <section className="charts">
          <div className="chart-container">
            <h3>Status Atual</h3>
            <Pie data={pieData} />
          </div>

          <div className="chart-container">
            <h3>Histórico Mensal</h3>
            <Bar data={barData} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default ReportsPage;
