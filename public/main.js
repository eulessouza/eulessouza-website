// Script principal simplificado - Eules Souza
console.log('🚀 Main.js carregado!');

// Função para criar navbar
function criarNavBar() {
    console.log('📱 Criando navbar...');
    
    // Remove navbar existente se houver
    const navbarExistente = document.querySelector('.navbar-js');
    if (navbarExistente) {
        navbarExistente.remove();
    }
    
    const navbar = document.createElement('nav');
    navbar.className = 'navbar-js';
    navbar.innerHTML = `
        <div class="navbar-content">   
            <img src="https://encurtador.com.br/HStsO" alt="Eules Souza" width="50">
            <h2>Eules Souza</h2>
            <a href="index.html">Início</a>
            <a href="quem-sou-eu.html">Quem sou eu</a>
            <a href="portifolio.html">Portfólio</a>
            <button class="theme-toggle" id="theme-toggle-btn" title="Alternar tema">
                <i class="fas fa-moon"></i>
            </button>
        </div>
    `;
    
    document.body.insertBefore(navbar, document.body.firstChild);
    console.log('✅ Navbar criada');
    
    // Adicionar event listener do tema
    const botaoTema = document.getElementById('theme-toggle-btn');
    if (botaoTema) {
        botaoTema.addEventListener('click', function() {
            console.log('🎨 Botão de tema clicado');
            alternarTema();
        });
        console.log('✅ Event listener do tema adicionado');
    }
}

// Função para criar footer
function criarFooter() {
    console.log('🦶 Criando footer...');
    
    // Remove footer existente se houver
    const footerExistente = document.querySelector('.footer-js');
    if (footerExistente) {
        footerExistente.remove();
    }
    
    const footer = document.createElement('footer');
    footer.className = 'footer-js';
    footer.innerHTML = `
        <div class="footer-content">
            <p>&copy; ${new Date().getFullYear()} Eules Souza - Desenvolvedor Front-end Junior</p>
            <div class="footer-links">
                <a href="https://github.com/eulessouza" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github"></i> GitHub
                </a>
                <a href="https://www.instagram.com/eulessouza0/" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-instagram"></i> Instagram
                </a>
            </div>
        </div>
    `;
    
    document.body.appendChild(footer);
    console.log('✅ Footer criado');
}

// Função para alternar tema
function alternarTema() {
    console.log('🌓 Alternando tema...');
    const body = document.body;
    const isDark = body.classList.contains('dark-theme');
    
    if (isDark) {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
        console.log('☀️ Tema claro ativado');
    } else {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
        console.log('🌙 Tema escuro ativado');
    }
    
    // Atualizar ícone
    const botaoTema = document.getElementById('theme-toggle-btn');
    if (botaoTema) {
        const icone = botaoTema.querySelector('i');
        if (icone) {
            icone.className = body.classList.contains('dark-theme') ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
}

// Função para carregar tema salvo
function carregarTemaSalvo() {
    console.log('💾 Carregando tema salvo...');
    const temaSalvo = localStorage.getItem('theme');
    
    if (temaSalvo === 'dark') {
        document.body.classList.add('dark-theme');
        console.log('🌙 Tema escuro carregado');
    } else {
        console.log('☀️ Tema claro carregado');
    }
    
    // Atualizar ícone se botão existir
    setTimeout(() => {
        const botaoTema = document.getElementById('theme-toggle-btn');
        if (botaoTema) {
            const icone = botaoTema.querySelector('i');
            if (icone) {
                icone.className = document.body.classList.contains('dark-theme') ? 'fas fa-sun' : 'fas fa-moon';
            }
        }
    }, 100);
}

// Função principal de inicialização
function inicializarSite() {
    console.log('🚀 Inicializando site...');
    
    try {
        criarNavBar();
        criarFooter();
        carregarTemaSalvo();
        console.log('✅ Site inicializado com sucesso!');
    } catch (error) {
        console.error('❌ Erro ao inicializar:', error);
    }
}

// Tornar funções globais
window.criarNavBar = criarNavBar;
window.criarFooter = criarFooter;
window.alternarTema = alternarTema;
window.carregarTemaSalvo = carregarTemaSalvo;
window.inicializarSite = inicializarSite;

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM carregado');
    
    // Inicializar imediatamente
    inicializarSite();
    
    // Verificação adicional após 1 segundo
    setTimeout(() => {
        const navbar = document.querySelector('.navbar-js');
        const footer = document.querySelector('.footer-js');
        
        if (!navbar || !footer) {
            console.log('⚠️ Elementos não encontrados, tentando novamente...');
            inicializarSite();
        }
    }, 1000);
});

// Verificação final no window.load
window.addEventListener('load', function() {
    console.log('🔄 Window load - verificação final');
    
    setTimeout(() => {
        const navbar = document.querySelector('.navbar-js');
        const footer = document.querySelector('.footer-js');
        
        if (!navbar) {
            console.log('⚠️ Recriando navbar...');
            criarNavBar();
        }
        
        if (!footer) {
            console.log('⚠️ Recriando footer...');
            criarFooter();
        }
        
        carregarTemaSalvo();
    }, 500);
});

console.log('📜 Script main.js carregado completamente');
