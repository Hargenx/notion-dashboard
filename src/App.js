// src/App.js
import React, { useState } from 'react';
import Card from './components/Cards';
import Chart from './components/Chart';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [avaliacao, setAvaliacao] = useState('1ª Avaliação');

  const handleAvaliacaoChange = (event) => {
    setAvaliacao(event.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const data = [
    { title: "Avaliação", value: avaliacao, info: "16/10/2024" },
    { title: "Idade", value: "17 anos", info: "29/06/1994" },
    { title: "Peso", value: "58,8kg", info: "+0%" },
    { title: "Altura", value: "1,63cm", info: "+0%" },
  ];

  const results = [
    { title: "Peso Magro", value: "15%", percentage: "+18%", isPositive: false },
    { title: "Peso Gordo", value: "15%", percentage: "+18%", isPositive: false },
    { title: "% Gordura", value: "15%", percentage: "+18%", isPositive: false },
    { title: "IMC", value: "15%", percentage: "+18%", isPositive: false },
  ];

  return (
    <div className="flex min-h-screen bg-gray-900 text-white font-sans">
      {/* Menu Lateral */}
      <aside className={`${isMenuOpen ? 'w-64' : 'w-16'} transition-width duration-300 bg-gray-800 p-4 flex flex-col justify-between h-screen overflow-y-auto`}>
        <button onClick={toggleMenu} className="text-lg mb-4 focus:outline-none">
          {isMenuOpen ? '<<' : '>>'}
        </button>
        <nav className="space-y-6">
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              <span>📊</span>
              <a href="#" className={`${isMenuOpen ? 'block' : 'hidden'} text-lg text-white`}>P1 Gordura</a>
            </li>
            <li className="flex items-center space-x-2">
              <span>⚖️</span>
              <a href="#" className={`${isMenuOpen ? 'block' : 'hidden'} text-lg text-white`}>P2 Corporal</a>
            </li>
            <li className="flex items-center space-x-2">
              <span>📦</span>
              <a href="#" className={`${isMenuOpen ? 'block' : 'hidden'} text-lg text-white`}>P3 Warehouse</a>
            </li>
            <li className="flex items-center space-x-2">
              <span>📐</span>
              <a href="#" className={`${isMenuOpen ? 'block' : 'hidden'} text-lg text-white`}>P4 Dobras Subcutâneas</a>
            </li>
            <li className="flex items-center space-x-2">
              <span>💪</span>
              <a href="#" className={`${isMenuOpen ? 'block' : 'hidden'} text-lg text-white`}>P5 Bioimpedância</a>
            </li>
            <li className="flex items-center space-x-2">
              <span>⚕️</span>
              <a href="#" className={`${isMenuOpen ? 'block' : 'hidden'} text-lg text-white`}>P6 Fisioterapia</a>
            </li>
            <li className="flex items-center space-x-2">
              <span>📈</span>
              <a href="#" className={`${isMenuOpen ? 'block' : 'hidden'} text-lg text-white`}>P7 Análise de Desempenho</a>
            </li>
          </ul>
        </nav>
        <div className="space-y-4 mt-10">
          <a href="#" className="block text-center text-lg text-gray-400">Configurações</a>
          <a href="#" className="block text-center text-lg text-gray-400">Login</a>
        </div>
      </aside>


      {/* Main Content */}
      <main className="w-full p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-extrabold">Bem-vinda, Anna Mendes</h1>
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

        {/* Histórico Gráfico */}
        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">Histórico</h3>
          <div className="bg-gray-800 p-6 rounded-lg">
            <Chart />
          </div>
        </section>

        {/* Resultados Atuais */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {results.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              value={item.value}
              percentage={item.percentage}
              isPositive={item.isPositive}
            />
          ))}
        </section>

        {/* Barras no Canto */}
        <div className="absolute bottom-4 right-4 flex flex-col space-y-1">
          <div className="w-2 h-12 bg-red-500"></div>
          <div className="w-2 h-12 bg-black"></div>
        </div>

        {/* Logo NextStep */}
        <div className="absolute bottom-4 left-0">
          <img src="/logo-nextstep.jpg" alt="Next Step Logo" className="w-32 h-12 object-contain" />
        </div>
      </main>
    </div>
  );
}

export default App;
