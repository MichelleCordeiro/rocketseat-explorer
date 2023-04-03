/*
Criar uma lista de estudantes e, cada estudante dentro dessa lista, deverá 
conter os seguintes dados:
  - nome;
  - nota da primeira prova;
  - nota da segunda prova.

Depois de criada a lista:
  Crie uma função que irá calcular a média das notas de cada aluno;
  Supondo que a média, para esse concurso é 7, verifique se cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

O resultado final desse desafio deve ser algo em torno de:
*/

let students = [
  {
    name: "Ana",
    grade_1: 7,
    grade_2: 9
  },
  {
    name: "Mic",
    grade_1: 6,
    grade_2: 6
  },
  {
    name: "Laura",
    grade_1: 4,
    grade_2: 10
  }
]

function averange(n1, n2) {
  return (n1 + n2) / 2
}

function ehSucesso(num, name) {
  if (num >= 7) {
    return `Parabéns, ${name}! Você foi aprovado(a) no concurso!`
  } else {
    return `Lamento, ${name}. Você não passou!`
  }
}

for (let student of students) {
  let avg = averange(student.grade_1, student.grade_2)
  let msg = ehSucesso(avg, student.name)
  alert(`
  A média do(a) estudante ${student.name} é ${avg}
  ${msg}
  `);
}