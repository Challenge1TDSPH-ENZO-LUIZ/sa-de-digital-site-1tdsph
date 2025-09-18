import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ContactForm } from '../types';

const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  subject: z.string().min(5, 'Assunto deve ter pelo menos 5 caracteres'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

const Contato: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Simulando envio do formulário
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Dados do formulário:', data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tem alguma dúvida ou sugestão? Envie-nos uma mensagem!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário de Contato */}
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Envie sua Mensagem
            </h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                Mensagem enviada com sucesso! Entraremos em contato em breve.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                Erro ao enviar mensagem. Tente novamente.
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                  placeholder="Seu nome completo"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Assunto *
                </label>
                <input
                  {...register('subject')}
                  type="text"
                  id="subject"
                  className={`input-field ${errors.subject ? 'border-red-500' : ''}`}
                  placeholder="Qual o assunto da sua mensagem?"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={5}
                  className={`input-field resize-none ${errors.message ? 'border-red-500' : ''}`}
                  placeholder="Escreva sua mensagem aqui..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary text-lg py-3 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Informações do Projeto
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-5 h-5 text-primary-600 mr-3">📚</span>
                  <span className="text-gray-600">Front-End Design Engineering</span>
                </div>
                <div className="flex items-center">
                  <span className="w-5 h-5 text-primary-600 mr-3">🏫</span>
                  <span className="text-gray-600">FIAP</span>
                </div>
                <div className="flex items-center">
                  <span className="w-5 h-5 text-primary-600 mr-3">🚀</span>
                  <span className="text-gray-600">Sprint 03</span>
                </div>
                <div className="flex items-center">
                  <span className="w-5 h-5 text-primary-600 mr-3">📅</span>
                  <span className="text-gray-600">2024</span>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Tecnologias Utilizadas
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center">
                  <span className="w-4 h-4 text-blue-600 mr-2">⚛️</span>
                  <span className="text-sm text-gray-600">React</span>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 text-purple-600 mr-2">⚡</span>
                  <span className="text-sm text-gray-600">Vite</span>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 text-blue-600 mr-2">📘</span>
                  <span className="text-sm text-gray-600">TypeScript</span>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 text-cyan-600 mr-2">🎨</span>
                  <span className="text-sm text-gray-600">TailwindCSS</span>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Links Úteis
              </h3>
              <div className="space-y-3">
                <a
                  href="https://github.com"
                  className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                >
                  <span className="w-5 h-5 mr-3">🔗</span>
                  Repositório GitHub
                </a>
                <a
                  href="https://youtube.com"
                  className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                >
                  <span className="w-5 h-5 mr-3">📺</span>
                  Vídeo no YouTube
                </a>
                <a
                  href="/sobre"
                  className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                >
                  <span className="w-5 h-5 mr-3">ℹ️</span>
                  Sobre o Projeto
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
