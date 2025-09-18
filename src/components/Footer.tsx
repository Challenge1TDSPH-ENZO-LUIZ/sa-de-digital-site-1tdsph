import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">FIAP Frontend Engineering</h3>
            <p className="text-gray-300 text-sm">
              Projeto desenvolvido para a Sprint 03 do curso de Front-End Design Engineering da FIAP.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Tecnologias</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>React + Vite + TypeScript</li>
              <li>TailwindCSS</li>
              <li>React Router</li>
              <li>React Hook Form</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com" className="text-gray-300 hover:text-white transition-colors">
                  GitHub Repository
                </a>
              </li>
              <li>
                <a href="https://youtube.com" className="text-gray-300 hover:text-white transition-colors">
                  Vídeo no YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 FIAP Frontend Engineering. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
