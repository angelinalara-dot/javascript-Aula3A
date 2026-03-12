const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 3;

const soma = primeiroNumero + segundoNumero;
const subtracao = primeiroNumero - segundoNumero;
const divisao = primeiroNumero / segundoNumero;
const multiplicacao = primeiroNumero * segundoNumero;

console.log("A some é: " ,soma)
console.log("A subtracao é: ",subtracao)
console.log("A divisao é: ",divisao)
console.log("A multiplicacao é: ",multiplicacao)

//ponto flutuante
const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

console.log(numeroPontoFlutuante);
console.log("Numero sem zero" ,pontoFlutuanteSemzero);
const novaOperacao = numeroPontoFlutuante * pontoFlutuanteSemZero;
console.log(novaOperacao);

//NaN -> Not A Number (não é um número)
const texto = "Texto";
console.log(texto * primeiroNumero);
