let numGerado = gerarNumero();

function principal() {

    let numero = document.getElementById('numero');
    let resposta = document.getElementById('resposta');
    
    resposta.innerHTML = '';
    
    console.log(numGerado);
    

    let comp = comparar(+numero.value, numGerado);

    if (comp === -1) {
        resposta.innerHTML = 'Tente um número maior!';
    } else if (comp === 1) {
        resposta.innerHTML = 'Tente um número menor!';
    } else if (comp === 0) {
        resposta.innerHTML = 'Parabéns, você acertou! Aperte F5 para jogar novamente!'
    }

}

