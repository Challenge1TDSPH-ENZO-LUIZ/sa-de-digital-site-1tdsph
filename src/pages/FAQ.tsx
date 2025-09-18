import React, { useState, useEffect } from 'react';
import { FAQItem } from '../types';

const FAQ: React.FC = () => {
  const [faqItems, setFaqItems] = useState<FAQItem[]>([]);
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    const faqData: FAQItem[] = [
      {
        id: '1',
        question: 'Quais tecnologias foram utilizadas neste projeto?',
        answer: 'Este projeto foi desenvolvido utilizando React + Vite + TypeScript para o frontend, TailwindCSS para estilização, React Router para navegação e React Hook Form para validação de formulários.'
      },
      {
        id: '2',
        question: 'Como funciona a responsividade da aplicação?',
        answer: 'A aplicação foi desenvolvida com design responsivo utilizando TailwindCSS, garantindo que funcione perfeitamente em dispositivos extra small (xs), small (sm), medium (md), large (lg) e extra large (xl).'
      },
      {
        id: '3',
        question: 'O que é uma Single Page Application (SPA)?',
        answer: 'Uma SPA é uma aplicação web que carrega uma única página HTML e atualiza dinamicamente o conteúdo conforme o usuário interage com a aplicação, sem recarregar a página completa.'
      },
      {
        id: '4',
        question: 'Como foi implementada a componentização?',
        answer: 'A aplicação foi estruturada com componentes reutilizáveis, separando responsabilidades e facilitando a manutenção. Cada página e funcionalidade foi dividida em componentes menores e modulares.'
      },
      {
        id: '5',
        question: 'Quais hooks do React foram utilizados?',
        answer: 'Foram implementados os hooks useState para gerenciamento de estado, useEffect para efeitos colaterais, useNavigate para navegação programática e useParams para captura de parâmetros de rota.'
      },
      {
        id: '6',
        question: 'Como funciona o sistema de rotas?',
        answer: 'O sistema de rotas foi implementado com React Router, permitindo navegação entre páginas sem recarregamento, incluindo rotas estáticas e dinâmicas conforme necessário.'
      },
      {
        id: '7',
        question: 'O projeto possui validação de formulários?',
        answer: 'Sim, os formulários foram implementados com React Hook Form e validação usando Zod, garantindo uma experiência de usuário fluida e validação robusta dos dados.'
      },
      {
        id: '8',
        question: 'Como foi feito o versionamento do projeto?',
        answer: 'O projeto utiliza Git/GitHub para versionamento, com commits frequentes de todos os membros da equipe, documentando a evolução do desenvolvimento e facilitando a colaboração.'
      }
    ];
    
    setFaqItems(faqData);
  }, []);

  const toggleItem = (itemId: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(itemId)) {
      newOpenItems.delete(itemId);
    } else {
      newOpenItems.add(itemId);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Perguntas Frequentes
          </h1>
          <p className="text-xl text-gray-600">
            Tire suas dúvidas sobre o projeto e suas tecnologias
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                      openItems.has(item.id) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              {openItems.has(item.id) && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ainda tem dúvidas?
          </h2>
          <p className="text-lg text-primary-100 mb-6">
            Entre em contato conosco através da nossa página de contato
          </p>
          <button
            onClick={() => window.location.href = '/contato'}
            className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Ir para Contato
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
