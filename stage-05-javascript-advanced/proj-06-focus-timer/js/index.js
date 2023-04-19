import Controls from './controls.js'
import Timer from './timer.js';
import Sound from './sounds.js'
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOff,
  buttonSoundOn,
  minutesDisplay,
  secondsDisplay,
} from './elements.js'


const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet
})

const timer = Timer({
  // injeção de dependências
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

const sound = Sound()

buttonPlay.addEventListener('click', () => {
  controls.play()
  timer.countDown()
  sound.buttonPressAudio()
})

buttonPause.addEventListener('click', () => {
  controls.pause()
  timer.hold()
  sound.buttonPressAudio();
})

buttonStop.addEventListener('click', () => {
  controls.reset()
  timer.reset()
  sound.buttonPressAudio();
})

buttonSoundOff.addEventListener('click', () => {
  buttonSoundOff.classList.add('hide')
  buttonSoundOn.classList.remove('hide')
})

buttonSoundOn.addEventListener('click', () => {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
})

buttonSet.addEventListener('click', () => {
  let newMinutes = controls.getMinutes()

  if(!newMinutes) {
    timer.reset()
    return
  }

  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
})