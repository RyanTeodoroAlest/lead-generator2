# Gerador de Leads - Time de Vendas

Uma aplicação moderna e intuitiva para geração de leads, desenvolvida especificamente para times de vendas não técnicos.

## 🎨 Design

- **Cores principais**: Cinza e Laranja (tons variados)
- **Temas**: Tema escuro (padrão) e tema claro
- **Interface**: Moderna, limpa e amigável
- **Responsividade**: Totalmente responsivo para desktop, tablet e mobile
- **UX**: Otimizada para usuários não técnicos
- **Transições**: Animações suaves entre temas

## ✨ Funcionalidades

### Filtros de Busca
- **Localidade dos Leads**: Busca por cidade/região
- **Palavras-chave**: Segmentação por área de atuação
- **Formato da Empresa**: Tipo jurídico (MEI, Ltda, SA, etc.)
- **Região**: Filtro por macro-região
- **Número da Empresa**: Busca específica por CNPJ
- **Rede de Venda**: Tipo de canal (Varejo, Atacado, Online, Híbrido)
- **Email Qualificado**: Opção para buscar apenas leads com email validado

### Resultados
- **Visualização em Cards**: Layout limpo e organizado
- **Score de Qualidade**: Pontuação de 0-100% para cada lead
- **Informações Completas**: Nome, email, telefone, localização, segmento
- **Estatísticas**: Resumo dos resultados encontrados
- **Exportação**: Possibilidade de baixar os dados

## 🚀 Tecnologias

- **React 18**: Framework principal
- **Tailwind CSS**: Estilização moderna e responsiva
- **Lucide React**: Ícones consistentes e modernos
- **PostCSS**: Processamento de CSS

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm start

# Build para produção
npm run build
```

## 🎯 Público-Alvo

- Times de vendas
- Profissionais de marketing
- Gestores comerciais
- Usuários não técnicos

## 📱 Interface

### Header
- Logo e branding da empresa
- Indicador de status online
- **Botão de troca de tema** (Sol/Lua)
- Perfil do usuário logado

### Sistema de Temas
- **Tema Escuro** (padrão): Interface com tons de cinza escuro
- **Tema Claro**: Interface com fundo branco e tons claros
- **Persistência**: Tema salvo automaticamente no navegador
- **Transições suaves**: Animações de 300ms entre temas
- **Ícones dinâmicos**: Sol para tema claro, Lua para tema escuro

### Formulário de Busca
- Campos intuitivos com ícones
- Validação em tempo real
- Feedback visual durante a busca

### Resultados
- Cards organizados por relevância
- Score visual de qualidade
- Ações rápidas (visualizar, exportar)
- Estatísticas resumidas

## 🔧 Configuração

O projeto está configurado com:
- Tailwind CSS para estilização
- Componentes reutilizáveis
- Estado gerenciado com React Hooks
- Layout responsivo
- Cores personalizadas (cinza e laranja)

## 📊 Métricas

- Mínimo de 500 leads por busca
- Score médio de qualidade
- Contagem de leads de alta qualidade (>85%)
- Tempo de resposta otimizado

## 🎨 Paleta de Cores

### Laranja (Primary)
- 50: #fff7ed
- 500: #f97316 (principal)
- 600: #ea580c (hover)

### Cinza
- 50: #f9fafb (background)
- 900: #111827 (texto)

## 📝 Próximos Passos

- [ ] Integração com API real de leads
- [ ] Sistema de autenticação
- [ ] Exportação em múltiplos formatos
- [ ] Filtros avançados
- [ ] Dashboard de métricas
- [ ] Histórico de buscas
