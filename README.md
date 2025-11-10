# Gerador de Leads Alest

Aplicação moderna para geração de leads desenvolvida para o time de vendas da Alest.

## 🚀 Demo

🔗 **[Acesse a aplicação](https://ryanteodoroalest.github.io/lead-generator2/)**

## ✨ Funcionalidades

### Autenticação
- Login com Google (simulado)
- Gerenciamento de sessão do usuário
- Logout via menu dropdown

### Filtros de Busca
- **Localização dos Leads**: Busca por cidades/países (separados por vírgula)
- **Localização da Sede (HQ)**: Filtro por localização da empresa
- **Indústrias**: Seleção múltipla via dropdown com checkboxes
- **Cargos Incluídos**: Segmentação por cargos desejados
- **Cargos Excluídos**: Exclusão de cargos específicos
- **Tamanho da Empresa**: Seleção múltipla de portes (1-10 até +5.000 funcionários)
- **Máximo de Leads**: Limite configurável até 10.000 leads
- **Email Qualificado**: Opção para buscar apenas leads com email validado

### Interface
- **Tema Claro/Escuro**: Alternância com persistência no navegador
- **Design Responsivo**: Adaptado para desktop e mobile
- **Visualização de Resultados**: Cards organizados com score de qualidade
- **Estatísticas**: Resumo de leads encontrados, score médio e alta qualidade

## 🛠️ Tecnologias

- **React 18** - Framework JavaScript
- **Tailwind CSS** - Estilização utilitária
- **Lucide React** - Biblioteca de ícones
- **React Context API** - Gerenciamento de tema
- **GitHub Pages** - Hospedagem

## 📦 Instalação

```bash
# Clonar repositório
git clone https://github.com/RyanTeodoroAlest/lead-generator2.git
cd lead-generator2

# Instalar dependências
npm install

# Executar em desenvolvimento
npm start

# Build para produção
npm run build

# Deploy para GitHub Pages
npm run deploy
```

## 📂 Estrutura do Projeto

```
src/
├── components/
│   ├── Header.js           # Cabeçalho com tema e perfil
│   ├── LoginScreen.js      # Tela de autenticação
│   ├── LeadGenerator.js    # Componente principal
│   ├── SearchForm.js       # Formulário de filtros
│   ├── ResultsDisplay.js   # Exibição de resultados
│   └── ThemeToggle.js      # Botão de alternância de tema
├── contexts/
│   └── ThemeContext.js     # Contexto de tema global
├── App.js                  # Componente raiz
├── index.js                # Ponto de entrada
└── index.css               # Estilos globais
```

## 🎨 Paleta de Cores

- **Primary (Laranja)**: `#f97316`
- **Hover**: `#ea580c`
- **Background Claro**: `#f9fafb`
- **Background Escuro**: `#111827`

## 📝 Licença

Este projeto foi desenvolvido para uso interno da Alest.
