var numTentativas = 1;
let numSecreto;

function adivinhar(){

    const res = document.getElementById('res');
    const numInput = document.getElementById('numero');
    const num = Number(numInput.value);
    
    if (num < numSecreto) {
        res.innerHTML = `O número é MENOR que o número secreto<br>Número de tentativas: ${numTentativas}`;
        numTentativas++;
    } else if (num > numSecreto) {
        res.innerHTML = `O número é MAIOR que o número secreto<br>Número de tentativas: ${numTentativas}`;
        numTentativas++;
    } else if (num == numSecreto) {
        res.innerHTML = `Parabéns! Você encontrou o número secreto!<br>Número de tentativas: ${numTentativas}`;
        numTentativas = 0
    }
}

function gerarNúmeroAleatorio(){
    numSecreto = Math.floor((Math.random() * 100));
    numTentativas = 1;

    return numSecreto;
}