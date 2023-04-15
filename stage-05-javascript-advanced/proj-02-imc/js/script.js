import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { notANumber, calculateIMC } from './utils.js';

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return  // não executará as demais linha de código
  }

  AlertError.close()

  const result = calculateIMC(weight, height);
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const msg = `Seu IMC é de ${result}`
  
  Modal.msg.innerText = msg
  Modal.open()
}