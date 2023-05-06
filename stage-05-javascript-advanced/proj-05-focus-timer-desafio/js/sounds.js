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
  }

  function setVolume() {
    soundFloresta.volume = volumeTree.value
    soundChuva.volume = volumeCloud.value
    soundCafeteria.volume = volumeShop.value
    soundLareira.volume = volumeFire.value
    // soundFloresta.volume = value
    // soundChuva.volume = value
    // soundCafeteria.volume = value
    // soundLareira.volume = value
      // console.log('setVolume ok')
      // console.log('cardVolume.value: ', cardVolume.value)
      console.log('soundChuva.volume: ', soundChuva.volume)
      // console.log('volumeTree.value: ', volumeTree.value),
      // console.log('volumeCloud.value: ', volumeCloud.value)
      // console.log('volumeShop.value: ', volumeShop.value);
  }

  function setVolTree() {
    soundFloresta.volume = volumeTree.value
    console.log('soundFloresta.volume: ', soundFloresta.volume)
    console.log('volumeTree.value: ', volumeTree.value)
  }

  function setVolCloud() {
    soundChuva.volume = volumeCloud.value
    console.log('soundChuva.volume: ', soundChuva.volume)
    console.log('volumeCloud.value: ', volumeCloud.value)
  }

  function setVolShop() {
    soundCafeteria.volume = volumeShop.value
    console.log('soundCafeteria.volume: ', soundCafeteria.volume)
    console.log('volumeShop.value: ', volumeShop.value)
  }

  function setVolFire() {
    soundLareira.volume = volumeFire.value
    console.log('soundLareira.volume: ', soundLareira.volume)
    console.log('volumeFire.value: ', volumeFire.value)
  }
  
  // function pressTree() {
  //   soundFloresta.play()
  //   soundFloresta.loop = true
  // }
  
  // function pressCloud() {
  //   soundChuva.play()
  //   soundChuva.loop = true
  // }
  
  // function pressShop() {
  //   soundCafeteria.play()
  //   soundCafeteria.loop = true
  // }
  
  // function pressFire() {
  //   soundLareira.play()
  //   soundLareira.loop = true
  // }

  // function unpress() {
  //   console.log('unpress foi ativado SONS DESLIGADOS')
  //   soundFloresta.pause()
  //   soundChuva.pause()
  //   soundCafeteria.pause()
  //   soundLareira.pause()
  //   soundFloresta.loop = false
  //   soundChuva.loop = false
  //   soundCafeteria.loop = false
  //   soundLareira.loop = false
  // }

  return {
    pressButton,
    timeEnd,
    // setVolume,
    setVolTree,
    setVolCloud,
    setVolShop,
    setVolFire,
    soundFloresta,
    soundChuva,
    soundCafeteria,
    soundLareira
  }
}
