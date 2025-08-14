let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

<<<<<<< HEAD
// Elementos DOM
=======
>>>>>>> a647e5b (atualização do jogo)
const inputChute = document.querySelector('.container__input');
const btnChutar = document.querySelector('#btnChutar');
const btnReiniciar = document.querySelector('#reiniciar');
const imagemVegetti = document.querySelector('.container__imagem-pessoa');

<<<<<<< HEAD
// Função para exibir texto e falar
=======
>>>>>>> a647e5b (atualização do jogo)
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}

<<<<<<< HEAD
// Mensagem inicial
=======
>>>>>>> a647e5b (atualização do jogo)
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
}
exibirMensagemInicial();

<<<<<<< HEAD
// Eventos
btnChutar.addEventListener('click', verificarChute);
btnReiniciar.addEventListener('click', reiniciarJogo);

// Limite de 3 dígitos no input
=======
btnChutar.addEventListener('click', verificarChute);
btnReiniciar.addEventListener('click', reiniciarJogo);

>>>>>>> a647e5b (atualização do jogo)
inputChute.addEventListener('input', () => {
    if (inputChute.value.length > 3) {
        inputChute.value = inputChute.value.slice(0, 3);
    }
});

<<<<<<< HEAD
// Função principal de verificação
=======
>>>>>>> a647e5b (atualização do jogo)
function verificarChute() {
    let chute = Number(inputChute.value);

    if (!chute || chute < 1 || chute > numeroLimite) {
        exibirTextoNaTela('p', `Digite um número válido entre 1 e ${numeroLimite}`);
        return;
    }

    if (chute === numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);

<<<<<<< HEAD
        btnReiniciar.removeAttribute('disabled'); // habilita "Novo jogo"
        btnChutar.setAttribute('disabled', true); // desabilita "Chutar"
        imagemVegetti.style.display = 'block';     // mostra Vegetti
=======
        btnReiniciar.removeAttribute('disabled');
        btnChutar.setAttribute('disabled', true);
        imagemVegetti.style.display = 'block';
>>>>>>> a647e5b (atualização do jogo)
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

<<<<<<< HEAD
// Gera número aleatório sem repetição
=======
>>>>>>> a647e5b (atualização do jogo)
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    if (listaDeNumerosSorteados.length === numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

<<<<<<< HEAD
// Limpa campo de input
=======
>>>>>>> a647e5b (atualização do jogo)
function limparCampo() {
    inputChute.value = '';
}

<<<<<<< HEAD
// Reinicia jogo
=======
>>>>>>> a647e5b (atualização do jogo)
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    btnReiniciar.setAttribute('disabled', true);
<<<<<<< HEAD
    btnChutar.removeAttribute('disabled'); // reabilita "Chutar"
    imagemVegetti.style.display = 'none';  // esconde Vegetti
=======
    btnChutar.removeAttribute('disabled');
    imagemVegetti.style.display = 'none';
>>>>>>> a647e5b (atualização do jogo)
}
