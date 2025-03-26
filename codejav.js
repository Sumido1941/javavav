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

console.log(inverterTexto("JavaScript")); 

function contarCaracteres(texto) {
    return texto.length;
}

console.log(contarCaracteres("JavaScript")); 


const carro = {
    marca: "uno",
    modelo: "gol",
    ano: 2022
};

console.log(carro.modelo); 



function mensagemPersonalizada(nome, mensagem = "Olá!") {
    console.log(`${mensagem} ${nome}`);
}

mensagemPersonalizada("Ana"); 
mensagemPersonalizada("Carlos", "Bom dia!"); 

function media(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}


console.log(media(10, 20, 30)); 


for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(`${i}: Múltiplo de 3`);
    } else {
        console.log(`${i}: Não múltiplo de 3`);
    }
}

function verificarPalindromo(palavra) {
    const invertida = palavra.split('').reverse().join('');
    return palavra === invertida;
}


console.log(verificarPalindromo("arara")); 
console.log(verificarPalindromo("javascript"));



