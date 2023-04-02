/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let studentName = prompt('Informe o nome do estudante: ');
let firstGrade = prompt('Informe a primeira nota: ');
let secondGrade = prompt('Informe a segunda nota: ');
let thirdGrade = prompt('Informe a terceira nota: ');

firstGrade = Number(firstGrade);
secondGrade = Number(secondGrade);
thirdGrade = Number(thirdGrade);

let average = (firstGrade + secondGrade + thirdGrade) / 3;

average = average.toFixed(2);

if (average > 6) {
  alert(studentName + ' sua média é ' + average + '. Parabéns!');
} else if (average < 3) {
  alert(studentName + ' está reprovado.');
} else {
  alert(studentName + ' sua média é ' + average + '. Estude para a prova de recuperação.');
}
