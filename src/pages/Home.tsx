import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/sobre');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Front-End Design
              <span className="block text-primary-600">Engineering</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Projeto desenvolvido com React + Vite + TypeScript para a Sprint 03 da FIAP.
              Uma aplicação moderna, responsiva e componentizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleGetStarted}
                className="btn-primary text-lg px-8 py-3"
              >
                Conhecer o Projeto
              </button>
              <button
                onClick={() => navigate('/integrantes')}
                className="btn-secondary text-lg px-8 py-3"
              >
                Ver Equipe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tecnologias Utilizadas
            </h2>
            <p className="text-lg text-gray-600">
              Stack moderna e robusta para desenvolvimento front-end
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚛️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">React</h3>
              <p className="text-gray-600">
                Biblioteca para construção de interfaces de usuário
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Vite</h3>
              <p className="text-gray-600">
                Build tool rápida e moderna para desenvolvimento
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📘</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">TypeScript</h3>
              <p className="text-gray-600">
                Superset do JavaScript com tipagem estática
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">TailwindCSS</h3>
              <p className="text-gray-600">
                Framework CSS utilitário para estilização
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para explorar?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Navegue pelas páginas e descubra todas as funcionalidades implementadas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/faq')}
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Ver FAQ
            </button>
            <button
              onClick={() => navigate('/contato')}
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Entrar em Contato
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
