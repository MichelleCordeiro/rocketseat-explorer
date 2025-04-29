// Você pode apresentar o resultado tanto no **console** quanto em um **alerta** no navegador.

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

const a = 21;
const b = 4;

function ehPar(x) {
  if (x % 2 === 0)
    return "é um número par";

  return "é um número ímpar";
}

console.log(a, ehPar(a));
console.log(b, ehPar(b));
