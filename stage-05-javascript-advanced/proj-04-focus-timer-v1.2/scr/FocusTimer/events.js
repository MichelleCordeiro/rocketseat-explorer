import { controls } from './elements.js'
import * as actions from './actions.js'
import * as el from './elements.js'
import { updateDisplay } from './timer.js'
import state from './state.js'

export function registerControls() {
  controls.addEventListener('click', event => {
    const action = event.target.dataset.action
    if (typeof actions[action] !== 'function') {
      return
    }

    actions[action]()
  })
}

export function setMinutes() {
  // foca e limpa conteúdo da tag c evento de focus
  el.minutes.addEventListener('focus', () => {
    el.minutes.textContent = ''
  })

  //  aceita apenas números no contador
  el.minutes.onkeypress = event => /\d/.test(event.key)


  // blur remove o focus
 el.minutes.addEventListener('blur', event => {
   let time = event.currentTarget.textContent

   time = time > 60 ? 60 : time

   state.minutes = time
   state.seconds = 0

   updateDisplay()
   el.minutes.removeAttribute('contenteditable')
 })
}
