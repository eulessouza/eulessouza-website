// Calculadora em JavaScript
// Criado por Eules Souza - 2025

// ===== VARIÁVEIS GLOBAIS =====
let numeroAtual = '';
let numeroAnterior = '';
let operacao = '';
let operacaoAnterior = ''; // Variável para rastrear operação anterior
let deveResetarDisplay = false;
let aguardandoOperando = false; // Variável para controlar estado

// ===== FUNÇÕES UTILITÁRIAS =====

// Captura um elemento pelo ID
function pegarElemento(id) {
    return document.getElementById(id);
}

// Adiciona um evento de clique a um elemento
function adicionarEventoClique(elemento, funcao) {
    if (elemento) {
        elemento.addEventListener('click', funcao);
    }
}

// ===== FUNÇÕES PRINCIPAIS DA CALCULADORA =====

// Atualiza o display da calculadora
function atualizarDisplay(valor) {
    const display = pegarElemento('display');
    if (display) {
        display.value = valor;
    }
}

// Mostra o operador selecionado no display
function mostrarOperador(operador) {
    const display = pegarElemento('display');
    if (display) {
        display.value += operador;
    }
}

// Escolhe a operação e atualiza o estado da calculadora
function escolherOperacao(novaOperacao) {
    if (novaOperacao === '×') novaOperacao = '*';
    if (novaOperacao === '÷') novaOperacao = '/';
    
    if (numeroAtual === '' && numeroAnterior === '') {
        return;
    }
    
    if (operacao !== '' && aguardandoOperando) {
        // Troca a operação sem calcular
        operacao = novaOperacao;
        atualizarDisplayOperacao(); // Mostra a operação no display
        return;
    }
    
    if (numeroAnterior !== '' && operacao !== '' && numeroAtual !== '') {
        calcular(); // Calcula o resultado intermediário
    }
    
    if (numeroAtual !== '' && numeroAnterior === '') {
        numeroAnterior = numeroAtual;
        numeroAtual = '';
    }
    
    operacao = novaOperacao;
    aguardandoOperando = true;
    deveResetarDisplay = false;
    
    atualizarDisplayOperacao();
}

// Atualiza o display para mostrar a operação atual
function atualizarDisplayOperacao() {
    const display = pegarElemento('display');
    if (display) {
        let textoDisplay = numeroAnterior;
        if (operacao) {
            let simboloOperacao = operacao;
            // Converte operadores para símbolos mais bonitos
            if (operacao === '*') simboloOperacao = '×';
            if (operacao === '/') simboloOperacao = '÷';
            textoDisplay += ' ' + simboloOperacao;
        }
        display.value = textoDisplay;
    }
}

// A função roda quando digitamos um número ou ponto decimal
function digitarNumero(numero) {
    if (aguardandoOperando) {
        numeroAtual = '';
        aguardandoOperando = false;
    }
    
    if (deveResetarDisplay) {
        numeroAtual = '';
        numeroAnterior = '';
        operacao = '';
        deveResetarDisplay = false;
    }
    
    if (numero === '.' && numeroAtual.includes('.')) {
        return;
    }
    
    numeroAtual += numero;
    atualizarDisplay(numeroAtual);
}

// Realiza o calculo da operação atual
function calcular() {
    let resultado;
    const anterior = parseFloat(numeroAnterior);
    const atual = parseFloat(numeroAtual);
    
    // Verifica se os números são válidos
    if (isNaN(anterior) || isNaN(atual) || operacao === '') {
        return;
    }
    
    // Realiza o cálculo baseado na operação
    switch (operacao) {
        case '+':
            resultado = anterior + atual;
            break;
        case '-':
            resultado = anterior - atual;
            break;
        case '*':
            resultado = anterior * atual;
            break;
        case '/':
            if (atual === 0) {
                atualizarDisplay('Erro: Divisão por zero');
                setTimeout(() => limpar(), 2000); // Limpa após 2 segundos
                return;
            }
            resultado = anterior / atual;
            break;
        default:
            return;
    }
    
    // Formata o resultado e atualiza variáveis
    // Limita casas decimais para evitar números muito longos
    if (resultado % 1 !== 0) {
        resultado = parseFloat(resultado.toFixed(8));
    }
    
    numeroAtual = resultado.toString();
    operacao = '';
    numeroAnterior = '';
    aguardandoOperando = false;
    deveResetarDisplay = true;
    
    atualizarDisplay(numeroAtual);
}

// Função para limpar a calculadora (botão C)
function limpar() {
    numeroAtual = '';
    numeroAnterior = '';
    operacao = '';
    deveResetarDisplay = false;
    atualizarDisplay('0');
}

// Função para deletar o último caractere (botão ⌫)
function deletarUltimo() {
    if (numeroAtual.length > 0) {
        numeroAtual = numeroAtual.slice(0, -1);
        atualizarDisplay(numeroAtual || '0');
    }
}

// ===== FUNÇÕES GLOBAIS =====
// Função global para adicionar ao display (usada pelos onclick)
function appendToDisplay(valor) {
    if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '×') {
        // Converte × para *
        if (valor === '×') valor = '*';
        escolherOperacao(valor);
    } else {
        digitarNumero(valor);
    }
}

// Função global para limpar display (usada pelos onclick)
function clearDisplay() {
    limpar();
}

// Função global para deletar último (usada pelos onclick)
function deleteLast() {
    deletarUltimo();
}

// Função global para calcular (usada pelos onclick)
function calculate() {
    calcular();
}

// Função global para mostrar o operador no display (usada pelos onclick)
function showOperator(operator) {
    escolherOperacao(operator);
}

// ===== FUNCIONALIDADES EXTRAS =====

// Suporte para teclado
function adicionarSuporteTeclado() {
    document.addEventListener('keydown', function(event) {
        const tecla = event.key;
        
        // Previne o comportamento padrão para algumas teclas
        if (tecla === '/' || tecla === 'Enter') {
            event.preventDefault();
        }
        
        // Números e ponto decimal
        if ((tecla >= '0' && tecla <= '9') || tecla === '.') {
            digitarNumero(tecla);
        }
        
        // Operações
        else if (tecla === '+' || tecla === '-' || tecla === '*' || tecla === '/') {
            escolherOperacao(tecla);
        }
        
        // Calcular
        else if (tecla === 'Enter' || tecla === '=') {
            calcular();
        }
        
        // Limpar
        else if (tecla === 'Escape' || tecla.toLowerCase() === 'c') {
            limpar();
        }
        
        // Deletar último
        else if (tecla === 'Backspace') {
            deletarUltimo();
        }
    });
}

// ===== INICIALIZAÇÃO =====

// Função que roda quando a página carrega
function iniciarCalculadora() {
    console.log('Calculadora em JavaScript');
    
    // Conectar botões de números (0-9) - se existirem
    for (let i = 0; i <= 9; i++) {
        const botao = pegarElemento(`btn-${i}`);
        if (botao) {
            adicionarEventoClique(botao, () => digitarNumero(i.toString()));
        }
    }
    
    // Conectar botões de operações - se existirem
    const botaoSoma = pegarElemento('btn-add');
    const botaoSubtracao = pegarElemento('btn-subtract');
    const botaoMultiplicacao = pegarElemento('btn-multiply');
    const botaoDivisao = pegarElemento('btn-divide');
    const botaoIgual = pegarElemento('btn-equals');
    const botaoLimpar = pegarElemento('btn-clear');
    const botaoDeletar = pegarElemento('btn-delete');
    const botaoPonto = pegarElemento('btn-decimal');
    
    if (botaoSoma) adicionarEventoClique(botaoSoma, () => escolherOperacao('+'));
    if (botaoSubtracao) adicionarEventoClique(botaoSubtracao, () => escolherOperacao('-'));
    if (botaoMultiplicacao) adicionarEventoClique(botaoMultiplicacao, () => escolherOperacao('*'));
    if (botaoDivisao) adicionarEventoClique(botaoDivisao, () => escolherOperacao('/'));
    if (botaoIgual) adicionarEventoClique(botaoIgual, calcular);
    if (botaoLimpar) adicionarEventoClique(botaoLimpar, limpar);
    if (botaoDeletar) adicionarEventoClique(botaoDeletar, deletarUltimo);
    if (botaoPonto) adicionarEventoClique(botaoPonto, () => digitarNumero('.'));
    
    // Inicializar display
    atualizarDisplay('0');
    
    // Adicionar suporte ao teclado
    adicionarSuporteTeclado();

    showOperator(''); // Limpa o operador no início
    
    console.log('Calculadora configurada com sucesso!');
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', iniciarCalculadora);

// Log para debug
console.log('Arquivo calculadora.js carregado!');

// Exportar funções para uso em outras páginas se necessário
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        atualizarDisplay,
        mostrarOperador,
        escolherOperacao,
        digitarNumero,
        calcular,
        limpar,
        deletarUltimo,
        adicionarEventoClique,
        pegarElemento,
        iniciarCalculadora,
        adicionarSuporteTeclado,
        appendToDisplay,
        clearDisplay,
        deleteLast,
        calculate,
        showOperator
    };
}
