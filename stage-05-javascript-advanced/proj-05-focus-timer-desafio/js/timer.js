export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls
}) {

  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function countDown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      // let minutes = Number(minutesDisplay.textContent)
      let isFinish = minutes <= 0 && seconds <= 0

      updateDisplay(minutes, 0);

      if (isFinish) {
        resetControls()
        updateDisplay()
        return
      }

      if (seconds <= 0) {
        seconds = 4
        --minutes
      }

      updateDisplay(minutes, String(seconds - 1))
      
      countDown()
    }, 1000)
  }

  // function updateMinutes(newMinutes) {
  //   minutes = newMinutes
  // }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  
  function plus() {
    minutes += 5
    updateDisplay(minutes, 0)
  }
  
  function minus() {
    minutes -= 5

    if (minutes < 0) {
      minutes = 0
    }
    updateDisplay(minutes, 0)
  }

  return {
    countDown,
    reset,
    updateDisplay,
    // updateMinutes,
    hold,
    plus,
    minus
  }
}
