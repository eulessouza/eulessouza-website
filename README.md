# 🌐 Website Pessoal - Eules Souza

Uma aplicação web moderna e responsiva desenvolvida com HTML, CSS e JS, apresentando um portfólio pessoal completo com sistema de temas, calculadora interativa e design profissional.

## ✨ Features Principais

### 🎨 **Sistema de Temas Avançado**
- 🌙 **Modo Escuro/Claro**: Alternância suave entre temas com persistência local
- 🎨 **CSS Variables**: Sistema consistente de cores e tipografia
- 💾 **localStorage**: Preferência de tema salva automaticamente
- 🔄 **Transições Suaves**: Animações elegantes na mudança de tema

### 🧮 **Calculadora Interativa**
- ➕ **Operações Básicas**: Soma, subtração, multiplicação e divisão
- 🎯 **Interface Intuitiva**: Design limpo e responsivo
- ⌨️ **Suporte a Teclado**: Funciona com entrada via teclado
- 🎨 **Tema Integrado**: Adapta-se ao tema claro/escuro do site

### 📱 **Design Responsivo**
- 📱 **Mobile First**: Otimizado para dispositivos móveis
- 💻 **Desktop Ready**: Experiência completa em telas grandes
- 🖥️ **Breakpoints**: 320px, 480px, 768px, 1024px
- 👆 **Touch Friendly**: Suporte completo para dispositivos touch

### 🏠 **Páginas Principais**
- 🏠 **Home**: Landing page com apresentação pessoal
- 👤 **Quem Sou Eu**: Biografia detalhada e informações pessoais
- 💼 **Portfólio**: Showcase de projetos e trabalhos realizados
- 🧮 **Calculadora**: Ferramenta interativa integrada

### ⚡ **Performance e Tecnologia**
- ⚛️ **React.js**: Arquitetura baseada em componentes
- 🚀 **Vanilla JS**: Código otimizado sem dependências desnecessárias
- 🎯 **Lazy Loading**: Carregamento otimizado de recursos

## 🛠️ Tecnologias Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Styling**: CSS Variables, Flexbox, CSS Grid
- **Icons**: FontAwesome
- **Server**: Node.js
- **Tools**: npm, Git

## 🌟 Destaques Técnicos

### 🎨 **Sistema de Estilização**
```css
/* CSS Variables para consistência */
:root {
  --primary-color: #007bff;
  --background-color: #ffffff;
  --text-color: #333333;
}

[data-theme="dark"] {
  --background-color: #1a1a1a;
  --text-color: #ffffff;
}
```

### 📱 **Responsividade Avançada**
- Layout adaptativo para todas as telas
- Componentes que se reorganizam automaticamente
- Otimização de imagens e recursos
- Testes em múltiplos dispositivos

### 🔧 **Arquitetura Limpa**
- Separação clara entre componentes
- Código modular e reutilizável
- Documentação inline
- Padrões de desenvolvimento modernos

## 🚀 Demonstração

A aplicação está otimizada para:
- ⚡ **Carregamento Rápido**: < 3 segundos na primeira visita
- 🎯 **SEO Friendly**: Meta tags e estrutura semântica
- ♿ **Acessibilidade**: Compatível com leitores de tela
- 🌐 **Cross-browser**: Funciona em todos os navegadores modernos

---

## 📋 Instalação e Configuração

### Pré-requisitos

Certifique-se de ter o Node.js e npm instalados em sua máquina:
- [Node.js](https://nodejs.org/) (versão 14+ recomendada)
- npm (incluído com Node.js)

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/SEU_USUARIO/eulessouza-website.git
   ```

2. **Navegue até o diretório:**
   ```bash
   cd my-react-app
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

### Executando a Aplicação

**Modo de desenvolvimento:**
```bash
npm start
```
A aplicação será aberta em [http://localhost:3000](http://localhost:3000)

**Servidor de produção:**
```bash
node server.js
```
Servidor estático disponível em [http://localhost:8080](http://localhost:8080)

### Estrutura do Projeto

```
my-react-app/
├── 📁 public/
│   ├── 🏠 index.html          # Página principal
│   ├── 🧮 calculadora.html    # Calculadora interativa
│   ├── 👤 quem-sou-eu.html    # Página sobre
│   ├── 💼 portifolio.html     # Portfólio
│   ├── 🎨 styles.css          # Estilos globais
│   └── 📄 main.js             # Funcionalidades principais
├── 📁 src/
│   ├── ⚛️ components/
│   │   ├── App.js             # Componente principal
│   │   └── Footer.js          # Componente do rodapé
│   ├── 🎨 index.css           # Estilos do React
│   └── 🚀 index.js            # Entry point do React
├── 🚀 server.js               # Servidor Express
├── 📦 package.json            # Dependências
└── 📖 README.md               # Este arquivo
```

### Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

### Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.
