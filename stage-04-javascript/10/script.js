/* 
Nessa aula aprenderemos sobre:
[] Funções (named), funções anônimas e arrow functions

PROBLEMA
Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima
"Paciente X possui o IMC de: Y"

Onde X é o nome do paciente e Y é o IMC desse paciente

Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

const patients = [
  {
    name: 'Ana',
    age: 15,
    weight: 40,
    height: 150
  },
  {
    name: 'Pedro',
    age: 30,
    weight: 90,
    height: 170
  },
  {
    name: 'Mic',
    age: 22,
    weight: 62,
    height: 162
  },
  {
    name: 'Laura',
    age: 55,
    weight: 67,
    height: 173
  }
]

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}

function printIMC(pacient) {
  return `
  Paciente ${pacient.name} possui o IMC de: ${IMC(pacient.weight, pacient.height)}
  `;
}

for (patient of patients) {
  const msg = printIMC(patient)
  alert(msg)
}