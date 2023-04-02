/* 
  Solicite 2 números, faça a soma deles
  e apresente o resultado final ao usuário
*/

alert('Somaremos dois números');

let n1 = prompt('Informe o primeiro número:');
let n2 = prompt('Informe o segundo número:');

// O dado informado na tela será sempre uma string
// type conversion(type casting)
let soma = Number(n1) + Number(n2);

// alert('A soma de ' + n1 + ' + ' + n2 + ' = ' + soma);
alert(`A soma de ${n1} + ${n2} = ${soma}`);

alert('Resultado: ' + (Number(n1) + Number(n2)));
