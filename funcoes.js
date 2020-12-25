function comparar (palpite, gerado) {
    if (palpite > gerado) {
        return 1;
    } else if (palpite < gerado) {
        return -1;
    } else {
        return 0;
    }
}

function gerarNumero () {
    let x = Math.floor(Math.random() * 20 + 1);
    return x;
}