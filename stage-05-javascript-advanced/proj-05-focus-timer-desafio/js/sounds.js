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
  //   console.log('unpress foi ativado SONS DESLIGADOS');
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
    // pressTree,
    // pressCloud,
    // pressShop,
    // pressFire,
    // unpress,
    soundFloresta,
    soundChuva,
    soundCafeteria,
    soundLareira
  }
}
