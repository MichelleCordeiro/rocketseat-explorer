/* 
Nessa aula aprenderemos sobre:
[] Estruturas de dados: Objetos
[] object literal
[] for..of

PROBLEMA
Crie uma lista de pacientes

Cada paciente dentro da lista, deverá conter
  nome
  idade
  peso
  altura

Escreva uma lista contendo os nomes dos pacientes, suas idades, pesos e alturas
*/

const patients = [
  {
    name: "Ana",
    age: 15,
    weight: 40,
    height: 150
  },
  {
    name: "Pedro",
    age: 30,
    weight: 90,
    height: 170
  },
  {
    name: "Mic",
    age: 22,
    weight: 62,
    height: 162
  },
  {
    name: "Laura",
    age: 55,
    weight: 67,
    height: 173
  }
]

let patientsNames = []
let patientsAge = []
let patientsWeight = []
let patientsHeight = []

// for (let index = 0; index < patients.length; index++) {
//   patientsNames[index] = patients[index].name
//   patientsAge[index] = patients[index].age
//   patientsWeight[index] = patients[index].weight
//   patientsHeight[index] = patients[index].height
// }

for (let patient of patients) {
  patientsNames.push(patient.name);
  patientsAge.push(patient.age);
  patientsWeight.push(patient.weight);
  patientsHeight.push(patient.height);
}

alert(patientsNames)
alert(patientsAge)
alert(patientsWeight)
alert(patientsHeight)