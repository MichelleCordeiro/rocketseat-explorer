/*
Nessa aula aprenderemos sobre:
1. Quais os dados de entrada que terei? (inputs)
2. Quais as variáveis?
3. Qual o caminho ideal? (fluxo ideal)
4. Qual(is) o(s) caminho(s) alternativo(s)? (fluxo alternativo)
5. Quais tratamentos de dados preciso fazer? (estrutura de dados, funções)
6. Qual é a saída, ou quais os dados de saída, esperada? (outputs)

Ferramentas da linguagem que abordaremos
[] loop while
[] arrays e funções de arrays (push)
[] condicional switch e if/else
[] template literals (strings)

------------------------------------
PROBLEMA
Faça um programa que tenha um menu e apresente a seguinte mensagem:
  Olá usuário! Digite o número da opção desejada
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa

  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:
    Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
    Caso o usuário digite 2, ele poderá ver os itens cadastrados
      Se não houver nenhum item cadastrado, mostrar a mensagem: 
        "Não existem itens cadastrados"
    Caso o usuário digite 3, a aplicação deverá ser encerrada.
*/

let option
let lista = []

while (option != 3) {
  option = Number(prompt(`
    Olá usuário! Digite o número da opção desejada
      1. Cadastrar um item na lista
      2. Mostrar itens cadastrados
      3. Sair do programa
  `))

  switch (option) {
    case 1:
      let item = prompt('Informe o item a cadastrar:');
      lista.push(item);
      break;
    case 2:
      if (lista.length == 0) {
        alert('Não existem itens cadastrados');
      } else {
        alert(lista);
      }
      break;
    case 3:
      alert('Tchau');
      break;
    default:
  }
}
