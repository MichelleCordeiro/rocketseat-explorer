/*
Solicitar ao usuário que ele insira dois números e, a partir daí, calcular:
  A soma dos dois números;
  A subtração dos dois números;
  A multiplicação dos dois números;
  A divisão dos dois números;
  O resto da divisão dos dois números;

Extra:
  Verifique se a soma dos dois números é par (ou ímpar);
  Verifique se os dois números inseridos são iguais (ou diferentes).
*/

const num1 = Number(prompt("Digite o primeiro número:"))
const num2 = Number(prompt("Digite o segundo número:"))

function ehPar(n) {
  if (n % 2 == 0) {
    return `O número ${n} é par`;
  } else {
    return `O número ${n} é ímpar`;
  }
}

function numIguais(n1, n2) {
  if (n1 == n2) {
    return 'Os números são iguais.';
  } else {
    return 'Os números não são iguais.';
  }
}

function addition(n1, n2) { return n1+n2 }
const addit = addition(num1, num2);
alert(`${num1} + ${num2} = ${addit}`);

// function subtraction(n1, n2) { return n1-n2 }
const subtraction = (n1, n2) => n1-n2
alert(`${num1} - ${num2} = ${subtraction(num1, num2)}`);

const multiplication = (n1, n2) => n1*n2
const division = (n1, n2) => (n1/n2).toFixed(2)
const remaining = (num1, num2) => num1 % num2;

alert(`${num1} * ${num2} = ${multiplication(num1, num2)}`);
alert(`${num1} / ${num2} = ${division(num1, num2)}`);
alert(`${num1} % ${num2} = ${remaining(num1, num2)}`);

alert(ehPar(addit))
alert(numIguais(num1, num2))