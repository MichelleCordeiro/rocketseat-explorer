import {
  btnPlay,
  btnPause,
  btnStop,
  btnPlus,
  btnMinus,
  btnTree,
  btnCloud,
  btnShop,
  btnFire,
  btnDarkMode,
  btnLightMode,
  volumeTree,
  volumeCloud,
  volumeShop,
  volumeFire
} from './elements.js'

export default function({ themes, controls, timer, sound, darkMode }) {  

  btnPlay.addEventListener('click', () => {
    controls.play()
    timer.countDown()
    sound.pressButton()
  })
  
  btnPause.addEventListener('click', () => {
    controls.pause()
    timer.hold()
    sound.pressButton()
  })

  btnStop.addEventListener('click', () => {
    controls.reset()
    timer.reset()
    sound.pressButton()
  })

  btnPlus.addEventListener('click', () => {
    timer.plus()
    sound.pressButton()
  })

  btnMinus.addEventListener('click', () => {
    timer.minus()
    sound.pressButton()
  })

  btnTree.addEventListener('click', () => {
    themes.buttonTheme(btnTree);
  });

  btnCloud.addEventListener('click', () => {
    themes.buttonTheme(btnCloud);
  });

  btnShop.addEventListener('click', () => {
    themes.buttonTheme(btnShop)
  })

  btnFire.addEventListener('click', () => {
    themes.buttonTheme(btnFire)
  })

  btnDarkMode.addEventListener('click', () => {
    darkMode.dark()
  })

  btnLightMode.addEventListener('click', () => {
    darkMode.light()
  })




  // volumeTree.onchange = () => sound.setVolume(volumeTree.value);
  // volumeCloud.onchange = () => sound.setVolume(volumeCloud.value);
  // volumeShop.onchange = () => sound.setVolume(volumeShop.value);
  // volumeFire.onchange = () => sound.setVolume(thvolumeFires.value);
  // volumeTree.mousemove = () => setVolume(volumeTree.value)
  // volumeCloud.mousemove = () => setVolume(volumeCloud.value)
  // volumeShop.mousemove = () => setVolume(volumeShop.value)
  // volumeFire.mousemove = () => setVolume(volumeFire.value)
  
  // volumeTree.addEventListener('input', sound.setVolTree)
  // volumeCloud.addEventListener('input', sound.setVolCloud)
  // volumeShop.addEventListener('input', sound.setVolShop)
  // volumeFire.addEventListener('input', sound.setVolFire)

  // volumeTree.addEventListener('input', sound.setVolTree)
  // volumeCloud.addEventListener('input', sound.setVolCloud)
  // volumeShop.addEventListener('input', sound.setVolShop)
  // volumeFire.addEventListener('input', sound.setVolFire)
  
  volumeTree.addEventListener('input', () => {
    sound.soundFloresta.volume = volumeTree.value;
  })
  volumeCloud.addEventListener('input', () => {
    sound.soundChuva.volume = volumeCloud.value;
    console.log('eventttt this.value: ', volumeCloud.value);
  })
  volumeShop.addEventListener('input', () => {
    sound.soundCafeteria.volume = volumeShop.value;
  })
  volumeFire.addEventListener('input', () => {
    sound.soundLareira.volume = volumeFire.value;
  })


  // function setVolume() {
  //   sound.soundFloresta.volume = volumeTree.value / 100
  //   sound.soundChuva.volume = volumeCloud.value / 100
  //   sound.soundCafeteria.volume = volumeShop.value / 100
  //   sound.soundLareira.volume = volumeFire.value / 100
  // }
}