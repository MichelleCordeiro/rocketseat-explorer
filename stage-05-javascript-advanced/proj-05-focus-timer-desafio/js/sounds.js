import { 
  volumeTree, 
  volumeCloud, 
  volumeShop,
  volumeFire
} from './elements.js'

export default function() {

  const soundFloresta = new Audio(
    '../scr/audio/Floresta.wav?raw=true'
  )
  const soundChuva = new Audio(
    '../scr/audio/Chuva.wav?raw=true'
  )
  const soundCafeteria = new Audio(
    '../scr/audio/Cafeteria.wav?raw=true'
  )
  const soundLareira = new Audio(
    '../scr/audio/Lareira.wav?raw=true'
  )
  const soundButtonPress = new Audio(
    '../scr/audio/button-click.mp3?raw=true'
  )
  const soundTimer = new Audio(
    '../scr/audio/alarm-timer.mp3?raw=true'
  )
  
  soundFloresta.loop = true
  soundChuva.loop = true
  soundCafeteria.loop = true
  soundLareira.loop = true

  function pressButton() {
    soundButtonPress.play()
  }

  function timeEnd() {
    soundTimer.play()
    soundTimer.volume = 0.5
  }

  function setVolume() {
    soundFloresta.volume = volumeTree.value
    soundChuva.volume = volumeCloud.value
    soundCafeteria.volume = volumeShop.value
    soundLareira.volume = volumeFire.value
  }
  

  return {
    pressButton,
    timeEnd,
    setVolume,
    soundFloresta,
    soundChuva,
    soundCafeteria,
    soundLareira
  }
}