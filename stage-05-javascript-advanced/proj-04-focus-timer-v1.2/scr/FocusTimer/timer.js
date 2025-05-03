import state from './state.js'
import * as el from './elements.js'
import { reset } from './actions.js'

export function countdown() {
  if (!state.isRunning) {
    return
  }

  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds--

  if (seconds < 0) {
    seconds = 59
    minutes--
  }

  if (minutes < 0) {
    reset()

    return
  }

  updateDisplay(minutes, seconds)

  setTimeout(() => countdown(), 1000)
}

export function updateDisplay(minutes, seconds) {
  const displayMinutes = minutes ?? state.minutes
  const displaySeconds = seconds ?? state.seconds

  el.minutes.textContent = String(displayMinutes).padStart(2, '0')
  el.seconds.textContent = String(displaySeconds).padStart(2, '0')
}
