function verificarPar(numero){
    if (numero % 2 === 0){
        console.log("Par");
    } else {
        console.log("impar")
    }
}
//verificarPar(12);
//verificarPar(2)







function calcular(n1, n2){
    const soma = n1 + n2;
    const subtracao = n1 - n2;
    const divisao = n2 !== 0 ? n1 / n2: 'Não pode dividir por zero'
    const multiplicacao = n1 * n2;

    console.log(soma);
    console.log(subtracao);
    console.log(divisao);
    console.log(multiplicacao);
}

//let n1 = parseFloat(prompt("digite seu primeiro numero"));
//let n2 = parseFloat(prompt("digite seu segundo numero"));

//calcular( n1,n2);

let numero = 100;
let delay =0;
while (numero >=1){
    //console.log(numero);
    //numero--;
}
function inverterTexto(texto) {
    return texto.split('').reverse().join('');
}

// Exemplo de uso
console.log(inverterTexto("JavaScript")); // Saída: "tpircSavaJ"
