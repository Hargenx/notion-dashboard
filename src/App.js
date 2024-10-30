// src/App.js

import React, { useState } from 'react';
import Card from './components/Cards';

function App() {
  // Simular múltiplas avaliações
  const [avaliacao, setAvaliacao] = useState('1ª Avaliação');

  const handleAvaliacaoChange = (event) => {
    setAvaliacao(event.target.value);
  };

  const data = [
    { title: "Avaliação", value: avaliacao, info: "16/10/2024" },
    { title: "Idade", value: "17 anos", info: "29/06/1994" },
    { title: "Peso", value: "58,8kg", info: "+0%" },
    { title: "Altura", value: "1,63cm", info: "+0%" }
  ];

  const results = [
    { title: "Peso Magro", value: "15%", percentage: "+18%", isPositive: false },
    { title: "Peso Gordo", value: "15%", percentage: "+18%", isPositive: false },
    { title: "% Gordura", value: "15%", percentage: "+18%", isPositive: false },
    { title: "IMC", value: "15%", percentage: "+18%", isPositive: false }
  ];

  return (
    <div className="flex min-h-screen bg-gray-900 text-white font-sans">
      {/* Menu Lateral */}
      <aside className="w-1/5 bg-gray-800 p-4 flex flex-col justify-between">
        <nav className="space-y-6">
          <div className="text-center">
            <h2 className="text-xl font-bold text-white">MENU PRINCIPAL</h2>
          </div>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              <span>📊</span>
              <a href="#" className="text-lg text-white">P1 Gordura</a>
            </li>
            <li className="flex items-center space-x-2">
              <span>⚖️</span>
              <a href="#" className="text-lg text-white">P2 Corporal</a>
            </li>
            <li className="flex items-center space-x-2">
              <span>📦</span>
              <a href="#" className="text-lg text-white">P3 Warehouse</a>
            </li>
            <li className="flex items-center space-x-2">
              <span>📐</span>
              <a href="#" className="text-lg text-white">P4 Dobras Subcutâneas</a>
            </li>
            <li className="flex items-center space-x-2">
              <span>💪</span>
              <a href="#" className="text-lg text-white">P5 Bioimpedância</a>
            </li>
            <li className="flex items-center space-x-2">
              <span>⚕️</span>
              <a href="#" className="text-lg text-white">P6 Fisioterapia</a>
            </li>
            <li className="flex items-center space-x-2">
              <span>📈</span>
              <a href="#" className="text-lg text-white">P7 Análise de Desempenho</a>
            </li>
          </ul>
        </nav>
        <div className="space-y-4">
          <a href="#" className="block text-center text-lg text-gray-400">Configurações</a>
          <a href="#" className="block text-center text-lg text-gray-400">Login</a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-full lg:w-4/5 p-4 lg:p-6 relative">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Bem vinda, Anna Mendes</h1>
          <div className="flex items-center space-x-4">
            <span className="text-lg">🔍</span>
            <span className="text-lg">👤 Anna Mendes</span>
          </div>
        </header>

        <p className="text-gray-400 mb-6">
          Esse é seu relatório de Avaliação Física, Fisioterapia e Análise de Desempenho
        </p>

        {/* Seletor de Avaliação */}
        <div className="flex items-center mb-6">
          <label htmlFor="avaliacao" className="mr-4 text-lg text-gray-400">Avaliação:</label>
          <select
            id="avaliacao"
            value={avaliacao}
            onChange={handleAvaliacaoChange}
            className="bg-gray-800 text-white p-2 rounded-lg focus:outline-none focus:ring focus:ring-green-500"
          >
            <option value="1ª Avaliação">1ª Avaliação</option>
            <option value="2ª Avaliação">2ª Avaliação</option>
            <option value="3ª Avaliação">3ª Avaliação</option>
          </select>
        </div>

        {/* Cartões de Informação */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {data.map((item, index) => (
            <Card key={index} title={item.title} value={item.value} info={item.info} />
          ))}
        </section>

        {/* Histórico Gráfico (Placeholder) */}
        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">Histórico</h3>
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="w-full h-64 bg-gray-700 rounded-lg flex justify-center items-center">
              <p className="text-gray-400">[Gráfico Histórico Placeholder]</p>
            </div>
          </div>
        </section>

        {/* Resultados Atuais */}
        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">Resultados Atuais</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {results.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                value={item.value}
                percentage={item.percentage}
                isPositive={item.isPositive}
              />
            ))}
          </div>
        </section>

        {/* Barras Vermelhas e Pretas no Canto */}
        <div className="absolute bottom-4 right-4 flex flex-col space-y-1">
          <div className="w-2 h-12 bg-red-500"></div>
          <div className="w-2 h-12 bg-black"></div>
        </div>

        {/* Logo */}
        <div className="absolute bottom-4 left-0">
          <img src="/logo-nextstep.jpg" alt="Next Step Logo" className="w-32 h-12 object-contain" />
        </div>
      </main>
    </div>
  );
}

export default App;
