//Adicionado a variavel listaNumerosSorteados como uma lista vazia (Aula 4)
let listaNumerosSorteados = [];
//Adicionamos a variavel  numeroLimite para delimitar a qtd maxima de numeros que fazem parte do jogo. (Aula 4)
let numeroLimite = 100;
//adicionado a variavel numeroSecreto na aula 2(chamando a funcao que retorna o numero aleatorio criado)
let numeroSecreto = gerarNumeroAleatorio();
//adicionado a variavel tentativas na aula 3
let tentativas = 1;
//Adicionado por mim para vermos o numero secreto no console.
console.log(numeroSecreto);
//Maneira que fizemos na Aula 1
//titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Número Secreto';

//Maneira que fizemos na Aula 1
//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número de 1 a 10';

//Maneira que fizemos na aula 2 (Melhorando o codigo).
//Adicionamos a função para fala (Aula 5).
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}

//Ajustado para uma função de Mensagem Inicial para nao ter que repetir o código - Aula 3
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        //Adicionado variavel com operador ternario
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        //Adicionado variavel mensagemTentativas na aula 3.
        let mensagemTentativas = `Você descobriu que o número secreto era ${chute} usando ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //adicionei o ${chute} para aparecer no texto o chute do usuario.
        if (chute > numeroSecreto)
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}!`);
        else {
            exibirTextoNaTela('p', `O número secreto é maior que ${chute}!`);
        }
        //tentativas = tentativas + 1 (adicionado na aula 3 e depois ajustado para tentativas++)
        tentativas++;
        limparCampo();
    }
}

//adicionamos o RETURN para enviar o numero gerado para a variavel numeroSecreto - Aula 2
//function gerarNumeroAleatorio() {
//    return parseInt(Math.random() * 100 + 1);
//}

//ajustamos a função acima para guardar o numeroEscolhido, (retiramos o return e adicionamos a variavel numeroEscolhido)
//utilizamos o .includes para verificar se o elemento já esta na lista
//utilizamos 0 .push para adicionar o elemento a lista
//utilizamos o length para nao preencher todos os espaços da lista.
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeNumerosNaLista = listaNumerosSorteados.length;

    if (quantidadeNumerosNaLista == numeroLimite / 10) {
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}




//Criamos essa funcção para limpar o campo - Aula 3
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
//Criamos essa função para reiniciar o jogo - Aula 3
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    console.log(numeroSecreto);

}