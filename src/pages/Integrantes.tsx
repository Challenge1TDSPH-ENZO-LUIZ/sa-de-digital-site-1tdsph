import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TeamMember } from '../types';

const Integrantes: React.FC = () => {
  const navigate = useNavigate();
  const [members, setMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    // Simulando carregamento de dados dos integrantes
    const teamMembers: TeamMember[] = [
      {
        id: '1',
        name: 'João Silva',
        rm: '123456',
        class: '1TDS',
        role: 'Desenvolvedor Frontend',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
      },
      {
        id: '2',
        name: 'Maria Santos',
        rm: '123457',
        class: '1TDS',
        role: 'Desenvolvedora Frontend',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
      },
      {
        id: '3',
        name: 'Pedro Oliveira',
        rm: '123458',
        class: '1TDS',
        role: 'Desenvolvedor Frontend',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
      },
      {
        id: '4',
        name: 'Ana Costa',
        rm: '123459',
        class: '1TDS',
        role: 'Desenvolvedora Frontend',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
      }
    ];
    
    setMembers(teamMembers);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossa Equipe
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça os desenvolvedores responsáveis por este projeto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {members.map((member) => (
            <div key={member.id} className="card text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={() => navigate(`/integrantes/${member.id}`)}>
              <div className="mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary-100"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-primary-600 font-medium mb-2">
                {member.role}
              </p>
              <div className="space-y-1 text-sm text-gray-600">
                <p><span className="font-medium">RM:</span> {member.rm}</p>
                <p><span className="font-medium">Turma:</span> {member.class}</p>
              </div>
              <div className="mt-4">
                <span className="text-primary-600 text-sm font-medium">Clique para ver detalhes</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Informações da Equipe
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Detalhes do Projeto
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li><span className="font-medium">Disciplina:</span> Front-End Design Engineering</li>
                <li><span className="font-medium">Sprint:</span> 03</li>
                <li><span className="font-medium">Instituição:</span> FIAP</li>
                <li><span className="font-medium">Período:</span> 2024</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Contribuições
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Desenvolvimento de componentes React</li>
                <li>• Implementação de rotas e navegação</li>
                <li>• Estilização responsiva com TailwindCSS</li>
                <li>• Validação de formulários</li>
                <li>• Versionamento no GitHub</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-primary-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Total de Integrantes: {members.length}
            </h3>
            <p className="text-lg text-primary-100">
              Todos os membros da equipe contribuíram ativamente para o desenvolvimento deste projeto, 
              seguindo as melhores práticas de desenvolvimento front-end e colaboração em equipe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrantes;
