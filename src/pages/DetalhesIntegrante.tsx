import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TeamMember } from '../types';
import Loading from '../components/Loading';

const DetalhesIntegrante: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [member, setMember] = useState<TeamMember | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando carregamento de dados do integrante
    const teamMembers: TeamMember[] = [
      {
        id: '1',
        name: 'João Silva',
        rm: '123456',
        class: '1TDS',
        role: 'Desenvolvedor Frontend',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
      },
      {
        id: '2',
        name: 'Maria Santos',
        rm: '123457',
        class: '1TDS',
        role: 'Desenvolvedora Frontend',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face'
      },
      {
        id: '3',
        name: 'Pedro Oliveira',
        rm: '123458',
        class: '1TDS',
        role: 'Desenvolvedor Frontend',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
      },
      {
        id: '4',
        name: 'Ana Costa',
        rm: '123459',
        class: '1TDS',
        role: 'Desenvolvedora Frontend',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face'
      }
    ];

    const foundMember = teamMembers.find(m => m.id === id);
    
    setTimeout(() => {
      setMember(foundMember || null);
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loading message="Carregando informações do integrante..." size="lg" />
      </div>
    );
  }

  if (!member) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Integrante não encontrado</h1>
          <button
            onClick={() => navigate('/integrantes')}
            className="btn-primary"
          >
            Voltar para Integrantes
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="card">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <div className="flex-shrink-0">
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 rounded-full object-cover border-4 border-primary-100"
              />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {member.name}
              </h1>
              <p className="text-xl text-primary-600 font-medium mb-6">
                {member.role}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">RM</h3>
                  <p className="text-gray-600">{member.rm}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Turma</h3>
                  <p className="text-gray-600">{member.class}</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/integrantes')}
                  className="btn-secondary"
                >
                  Voltar para Integrantes
                </button>
                <button
                  onClick={() => navigate('/contato')}
                  className="btn-primary"
                >
                  Entrar em Contato
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalhesIntegrante;
