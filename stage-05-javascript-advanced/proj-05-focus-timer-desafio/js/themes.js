import {
  divDarkMode,
  volumeTree,
  volumeCloud,
  volumeShop,
  volumeFire
} from './elements.js'

import Sounds from './sounds.js'
const sound = Sounds()

export default function Themes({
  btnTree,
  btnCloud,
  btnShop,
  btnFire
}) {
  function buttonTheme(btnPressed) {
    const Buttons = {
      tree: {
        btnName: btnTree,
        bgColor: 'hsl(97, 98%, 37%)',
        btnSound: sound.soundFloresta,
        bgImg:
          'url(https://images.pexels.com/photos/1083515/pexels-photo-1083515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
      },
      cloud: {
        btnName: btnCloud,
        bgColor: 'hsl(194, 97%, 31%)',
        btnSound: sound.soundChuva,
        bgImg:
          'url(https://images.pexels.com/photos/166360/pexels-photo-166360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
      },
      shop: {
        btnName: btnShop,
        bgColor: 'hsl(55, 94%, 42%)',
        btnSound: sound.soundCafeteria,
        bgImg:
          'url(https://perfectdailygrind.com/es/wp-content/uploads/sites/2/2019/11/5-elephant-coffee.jpg)'
      },
      fire: {
        btnName: btnFire,
        bgColor: 'hsl(0, 90%, 42%)',
        btnSound: sound.soundLareira,
        bgImg:
          'url(https://images.pexels.com/photos/752538/pexels-photo-752538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
      }
    };

    const btnClassName = btnPressed.classList[0] // classe do botão clicado
    const btnBgColor = Buttons[btnClassName].bgColor // cor certa do botão clicado
    let btnSoundPressed = Buttons[btnClassName].btnSound // som certo do botão clicado
    const btnBgImgPressed = Buttons[btnClassName].bgImg // bg certo do URL(botão clicado
    const btnAlredyPressed = btnPressed.classList.contains('selected')

    function resetTheme(btnName, btnSound) {
      btnName.classList.remove('selected')
      btnName.style.backgroundColor = 'hsl(240, 9%, 89%)'
      btnSound.pause()
    }

    // pega todos os botões e elimina o clicado
    let objKeys = Object.keys(Buttons)
    const indexBtnPressed = objKeys.indexOf(btnClassName)
    delete objKeys[indexBtnPressed]

    // verifica se o botão clicado já estava clicado
    if (btnAlredyPressed) {
      resetTheme(btnPressed, btnSoundPressed)
      document.body.style.backgroundImage = 'url()'
    } else {
      btnPressed.classList.add('selected')
      btnPressed.style.backgroundColor = btnBgColor
      document.body.style.backgroundImage = btnBgImgPressed
      divDarkMode.style.backgroundColor = 'hsla(0, 0%, 100%, 0.2)'

      btnSoundPressed.play()
      volumeTree.addEventListener('input', () => sound.setVolume())
      volumeCloud.addEventListener('input', () => sound.setVolume())
      volumeShop.addEventListener('input', () => sound.setVolume())
      volumeFire.addEventListener('input', () => sound.setVolume())

      // garante q apenas 1 botão fique selecionado
      for (let index in objKeys) {
        const restBtn = Buttons[objKeys[index]].btnName
        const restSound = Buttons[objKeys[index]].btnSound
        resetTheme(restBtn, restSound)
      }
    }
  }

  return {
    buttonTheme
  }
}