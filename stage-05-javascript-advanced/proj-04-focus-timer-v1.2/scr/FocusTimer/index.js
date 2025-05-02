import state from './state.js'

export function start(minutes, seconds) {
  state.minutes = minutes
  state.seconds = seconds

  console.log(state)
}

// import Controls from '../controls.js'
// import Timer from '../timer.js'
// import Sound from '../sounds.js'
// import Events from '../events.js'
// import {
//   buttonPlay,
//   buttonPause,
//   buttonStop,
//   buttonSet,
//   minutesDisplay,
//   secondsDisplay,
// } from '../elements.js'

// const controls = Controls({
//   buttonPlay,
//   buttonPause,
//   buttonStop,
//   buttonSet
// })

// const timer = Timer({
//   // injeção de dependências
//   minutesDisplay,
//   secondsDisplay,
//   resetControls: controls.reset,
// })

// const sound = Sound()

// Events({ controls, timer, sound })
