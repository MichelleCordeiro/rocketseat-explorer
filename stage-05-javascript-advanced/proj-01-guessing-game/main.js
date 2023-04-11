const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');
let randomNumber = Math.round(Math.random() * 10)
console.log(randomNumber);
let xAttenpts = 1

// eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
  if(e.key=='Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
})

// faunções callback
function handleTryClick(event) {
  event.preventDefault();
  /* como o botão ta dentro de um form a página atualiza 
  apos o botão ser clicado, resolve isso passando o parâmetro 
  event no onclick no botão do html(melhor nao chamar função 
  no html) e chamando a função preventDefault*/
  const inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value) < 0 || 
      Number(inputNumber.value > 10) || 
      inputNumber.value == '') {
    alert('O número deve ser entre 0 e 10. Tente novamente.');
  } else if (Number(inputNumber.value) == randomNumber) {
    toggleScreen();
    //document.querySelector('.screen2 h2').innerText = `Acertou em ${xAttenpts} tentativas!`
    screen2.querySelector('h2').innerText = `Acertou em ${xAttenpts} tentativas!`;
  } else {
    xAttenpts++;
  }

  inputNumber.value = ""
}

function handleResetClick() {
  toggleScreen()
  xAttenpts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}