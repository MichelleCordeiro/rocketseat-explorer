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
          'url(https://plus.unsplash.com/premium_photo-1671816261720-02d6f60148eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)'
      },
      cloud: {
        btnName: btnCloud,
        bgColor: 'hsl(194, 97%, 31%)',
        btnSound: sound.soundChuva,
        bgImg:
          'url(https://images.unsplash.com/photo-1536250853075-e8504ee040b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)'
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
    }
    
    const btnClassName = btnPressed.classList[0]  // classe do botão clicado
    const btnBgColor = Buttons[btnClassName].bgColor // cor certa do botão clicado
    const btnSoundPressed = Buttons[btnClassName].btnSound // som certo do botão clicado
    const btnBgImgPressed = Buttons[btnClassName].bgImg // bg certo do URL(botão clicado
    const btnAlredyPressed = btnPressed.classList.contains('selected')
    const timerH2 = document.body.querySelector('#timer')


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
      document.body.style.backgroundImage = 'url()';
    } else {
      btnPressed.classList.add('selected')
      btnPressed.style.backgroundColor = btnBgColor;
      document.body.style.backgroundImage = btnBgImgPressed;
      btnSoundPressed.play()

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