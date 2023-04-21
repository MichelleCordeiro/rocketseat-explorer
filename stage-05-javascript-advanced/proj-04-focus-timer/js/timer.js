// padrão de projeto factory - função q engloba funções e retorna objeto

// shorthand property 
// countdown: countdown se torna countdown

// export sem o 'default' permite renomear (tipo de named) e 
// torna o 'export { novo nome }' no final do código desnecessário

import Sounds from './sounds.js'

const sound = Sounds()

export default function Timer({ 
  // dependências
  minutesDisplay, 
  secondsDisplay, 
  resetControls
}) {

  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }
  
  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }
  
  function countDown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinish = minutes <= 0 && seconds <= 0
      
      updateDisplay(minutes, 0)
      
      if (isFinish) {
        resetControls()
        updateDisplay()
        Sounds().timeEnd()
        return
      }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateDisplay(minutes, String(seconds - 1))
    countDown()
  }, 1000)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function hold() {
  clearTimeout(timerTimeOut)

  }

  // let output = {
  //   countdown: countdown
  // }
  // return countdown

  // ou retorna ao direto
  return {
    countDown,
    reset,
    updateDisplay,
    updateMinutes,
    hold,
  }

}