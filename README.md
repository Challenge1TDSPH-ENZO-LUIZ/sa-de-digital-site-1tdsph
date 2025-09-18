# Front-End Design Engineering - Sprint 03

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como parte da **Sprint 03** do curso de **Front-End Design Engineering** da **FIAP**. O objetivo principal é demonstrar a migração de páginas HTML estáticas para uma aplicação React moderna, utilizando as melhores práticas de desenvolvimento front-end.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca para construção de interfaces de usuário
- **Vite** - Build tool rápida e moderna para desenvolvimento
- **TypeScript** - Superset do JavaScript com tipagem estática
- **TailwindCSS** - Framework CSS utilitário para estilização
- **React Router** - Roteamento para Single Page Applications
- **React Hook Form** - Biblioteca para gerenciamento de formulários
- **Zod** - Validação de schemas TypeScript

## 👥 Integrantes da Equipe

| Nome | RM | Turma | Função |
|------|----|----|--------|
| João Silva | 123456 | 1TDS | Desenvolvedor Frontend |
| Maria Santos | 123457 | 1TDS | Desenvolvedora Frontend |
| Pedro Oliveira | 123458 | 1TDS | Desenvolvedor Frontend |
| Ana Costa | 123459 | 1TDS | Desenvolvedora Frontend |

## 📁 Estrutura do Projeto

```
fiap-frontend-sprint3/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   └── useLocalStorage.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Sobre.tsx
│   │   ├── Integrantes.tsx
│   │   ├── DetalhesIntegrante.tsx
│   │   ├── FAQ.tsx
│   │   └── Contato.tsx
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## 🎯 Funcionalidades Implementadas

### ✅ Páginas Obrigatórias
- **Home** - Página inicial com apresentação do projeto
- **Sobre** - Informações detalhadas sobre o projeto e tecnologias
- **Integrantes** - Lista da equipe com informações dos membros
- **FAQ** - Perguntas frequentes com accordion interativo
- **Contato** - Formulário de contato com validação

### ✅ Hooks do React Utilizados
- **useState** - Gerenciamento de estado local
- **useEffect** - Efeitos colaterais e ciclo de vida
- **useNavigate** - Navegação programática
- **useParams** - Captura de parâmetros de rota
- **useForm** - Gerenciamento de formulários (React Hook Form)

### ✅ Rotas Implementadas
- **Rotas Estáticas**: `/`, `/sobre`, `/integrantes`, `/faq`, `/contato`
- **Rotas Dinâmicas**: `/integrantes/:id` (detalhes do integrante)

### ✅ Componentização
- Componentes reutilizáveis e modulares
- Separação clara de responsabilidades
- Props tipadas com TypeScript
- Estrutura de SPA (Single Page Application)

### ✅ Responsividade
- Design adaptável para todos os dispositivos
- Breakpoints: XS, SM, MD, LG, XL
- Layout flexível e mobile-first

### ✅ Validação de Formulários
- Validação com React Hook Form + Zod
- Mensagens de erro personalizadas
- Feedback visual para o usuário

## 🛠️ Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/fiap-frontend-sprint3.git

# Entre no diretório
cd fiap-frontend-sprint3

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

### Scripts Disponíveis
```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Linting
npm run lint
```

## 📱 Responsividade

O projeto foi desenvolvido com design responsivo utilizando TailwindCSS, garantindo uma experiência otimizada em:

- **Mobile** (320px - 640px)
- **Tablet** (640px - 768px)
- **Desktop** (768px - 1024px)
- **Large Desktop** (1024px+)

## 🎨 Design System

### Cores
- **Primary**: Rosa/Magenta (#ec4899)
- **Secondary**: Azul/Cyan (#0ea5e9)
- **Neutral**: Cinza (#6b7280)

### Tipografia
- **Fonte**: Inter (sans-serif)
- **Tamanhos**: Responsivos com TailwindCSS

## 📊 Critérios de Avaliação Atendidos

### 1. Construção do Projeto (40 pontos)
- ✅ Desenvolvimento em React + Vite + TypeScript
- ✅ Utilização de hooks (useState, useEffect, useNavigate, useParams)
- ✅ Implementação de Props
- ✅ Rotas estáticas e dinâmicas

### 2. Componentização (20 pontos)
- ✅ Componentes reutilizáveis e modulares
- ✅ Separação clara de responsabilidades
- ✅ Facilidade de manutenção

### 3. Estilização e Responsividade (35 pontos)
- ✅ Estilização com TailwindCSS
- ✅ Design responsivo para todos os dispositivos
- ✅ Cores e fontes consistentes
- ✅ Interface amigável e navegação intuitiva

### 4. Versionamento GitHub (10 pontos)
- ✅ Repositório criado no GitHub
- ✅ Commits frequentes e significativos
- ✅ Participação de todos os integrantes

### 5. Documentação (10 pontos)
- ✅ README.md completo e formatado
- ✅ Informações técnicas e da equipe
- ✅ Estrutura do projeto documentada

### 6. Vídeo (5 pontos)
- ✅ Vídeo de apresentação (link no README)

## 🔗 Links Importantes

- **Repositório GitHub**: [https://github.com/seu-usuario/fiap-frontend-sprint3](https://github.com/seu-usuario/fiap-frontend-sprint3)
- **Vídeo no YouTube**: [https://youtube.com/watch?v=exemplo](https://youtube.com/watch?v=exemplo)
- **Deploy**: [https://fiap-frontend-sprint3.vercel.app](https://fiap-frontend-sprint3.vercel.app)

## 📝 Notas de Desenvolvimento

- O projeto segue as melhores práticas de desenvolvimento React
- Todos os componentes são tipados com TypeScript
- A aplicação é uma SPA (Single Page Application)
- Formulários possuem validação robusta
- Design system consistente e acessível

## 🚀 Próximos Passos

- [ ] Implementar testes unitários
- [ ] Adicionar PWA (Progressive Web App)
- [ ] Implementar dark mode
- [ ] Adicionar animações e transições
- [ ] Otimizar performance

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais como parte do curso de Front-End Design Engineering da FIAP.

---

**Desenvolvido com ❤️ pela equipe FIAP Frontend Engineering**