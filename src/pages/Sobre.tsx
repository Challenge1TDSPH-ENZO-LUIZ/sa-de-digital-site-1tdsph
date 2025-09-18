import React from 'react';

const Sobre: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre o Projeto
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Front-End Design Engineering - Sprint 03
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Objetivo do Projeto
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Este projeto foi desenvolvido como parte da Sprint 03 do curso de Front-End Design Engineering da FIAP. 
              O objetivo principal é demonstrar a migração de páginas HTML estáticas para uma aplicação React moderna, 
              utilizando as melhores práticas de desenvolvimento front-end.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              A aplicação foi construída como uma Single Page Application (SPA) com arquitetura modular, 
              componentização adequada e responsividade completa para diferentes dispositivos.
            </p>
          </div>
          
          <div className="card">
            <h3 className="text-2xl font-semibold mb-4">Características Principais</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                <span>Arquitetura SPA com React Router</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                <span>Componentização e reutilização</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                <span>Design responsivo com TailwindCSS</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                <span>Tipagem estática com TypeScript</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                <span>Validação de formulários com HookForm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="card text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Objetivos Alcançados</h3>
            <p className="text-gray-600">
              Migração completa de HTML para React, implementação de hooks, 
              rotas dinâmicas e estilização responsiva.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Performance</h3>
            <p className="text-gray-600">
              Aplicação otimizada com Vite, carregamento rápido e 
              experiência de usuário fluida.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Responsividade</h3>
            <p className="text-gray-600">
              Design adaptável para todos os dispositivos, desde 
              smartphones até desktops.
            </p>
          </div>
        </div>

        <div className="bg-primary-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Tecnologias Utilizadas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-2xl mb-2">⚛️</div>
              <div className="font-semibold">React</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-2xl mb-2">⚡</div>
              <div className="font-semibold">Vite</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-2xl mb-2">📘</div>
              <div className="font-semibold">TypeScript</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-2xl mb-2">🎨</div>
              <div className="font-semibold">TailwindCSS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
