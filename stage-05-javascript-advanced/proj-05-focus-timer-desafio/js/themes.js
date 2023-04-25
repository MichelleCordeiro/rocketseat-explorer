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
        btnSound: sound.soundFloresta
      },
      cloud: {
        btnName: btnCloud,
        bgColor: 'hsl(194, 97%, 31%)',
        btnSound: sound.soundChuva
      },
      shop: {
        btnName: btnShop,
        bgColor: 'hsl(55, 94%, 42%)',
        btnSound: sound.soundCafeteria
      },
      fire: {
        btnName: btnFire,
        bgColor: 'hsl(0, 90%, 42%)',
        btnSound: sound.soundLareira
      }
    }
    
    const btnClassName = btnPressed.classList[0]  // classe do botão clicado
    const btnBgColor = Buttons[btnClassName].bgColor // cor certa do botão clicado
    const btnSoundPressed = Buttons[btnClassName].btnSound // som certo do botão clicado
    
    // pega todos os botões e elimina o clicado
    let objKeys = Object.keys(Buttons)
    const indexBtnPressed = objKeys.indexOf(btnClassName)
    delete objKeys[indexBtnPressed]
    
    // verifica se o botão clicado já estava clicado
    const btnAlredyPressed = btnPressed.classList.contains('selected')
    if (btnAlredyPressed) {
      btnPressed.classList.remove('selected')
      btnPressed.style.backgroundColor = 'hsl(240, 9%, 89%)'
      btnSoundPressed.pause()
    } else {
      btnPressed.classList.add('selected')
      btnPressed.style.backgroundColor = btnBgColor
      btnSoundPressed.play()

      // garante q apenas 1 botão fique selecionado
      for (let index in objKeys) {
        const restBtn = Buttons[objKeys[index]].btnName
        const restSound = Buttons[objKeys[index]].btnSound

        restBtn.classList.remove('selected')
        restBtn.style.backgroundColor = 'hsl(240, 9%, 89%)'
        restSound.pause()
      }
    }
  }

  return {
    buttonTheme
  }
}