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

  function pressTree() {
    soundFloresta.play()
    soundChuva.pause()
    soundCafeteria.pause()
    soundLareira.pause()
  }
  
  function pressCloud() {
    soundFloresta.pause()
    soundChuva.play()
    soundCafeteria.pause()
    soundLareira.pause()
  }
  
  function pressShop() {
    soundFloresta.pause()
    soundChuva.pause()
    soundCafeteria.play()
    soundLareira.pause()
  }
  
  function pressFire() {
    soundFloresta.pause()
    soundChuva.pause()
    soundCafeteria.pause()
    soundLareira.play()
  }

  function unpress() {
    soundFloresta.pause()
    soundChuva.pause()
    soundCafeteria.pause()
    soundLareira.pause()
  }

  return {
    pressTree,
    pressCloud,
    pressShop,
    pressFire,
    unpress
  }
}
