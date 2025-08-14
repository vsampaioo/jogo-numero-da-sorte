let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


const inputChute = document.querySelector('.container__input');
const btnChutar = document.querySelector('#btnChutar');
const btnReiniciar = document.querySelector('#reiniciar');
const imagemVegetti = document.querySelector('.container__imagem-pessoa');


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}


function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
}
exibirMensagemInicial();


btnChutar.addEventListener('click', verificarChute);
btnReiniciar.addEventListener('click', reiniciarJogo);


inputChute.addEventListener('input', () => {
    if (inputChute.value.length > 3) {
        inputChute.value = inputChute.value.slice(0, 3);
    }
});


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

        btnReiniciar.removeAttribute('disabled');
        btnChutar.setAttribute('disabled', true);
        imagemVegetti.style.display = 'block';
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


function limparCampo() {
    inputChute.value = '';
}


function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    btnReiniciar.setAttribute('disabled', true);
    btnChutar.removeAttribute('disabled');
    imagemVegetti.style.display = 'none';
}
