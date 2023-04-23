import {
  minutesDisplay,
  secondsDisplay,
  btnPlay,
  btnStop,
  btnPlus,
  btnMinus,
  btnTree,
  btnCloud,
  btnShop,
  btnFire
} from './elements.js'

export default function({  controls, themes }) {
  btnTree.addEventListener('click', () => {
    themes.buttonTheme(btnTree)
  })

  btnCloud.addEventListener('click', ()  => {
    themes.buttonTheme(btnCloud)
  })

  btnShop.addEventListener('click', () => {
    themes.buttonTheme(btnShop)
  })

  btnFire.addEventListener('click', () => {
    themes.buttonTheme(btnFire)
  })

  
  btnPlay.addEventListener('click', function () {
  })

  btnStop.addEventListener('click', function () {
    // timer.reset()
  })
}