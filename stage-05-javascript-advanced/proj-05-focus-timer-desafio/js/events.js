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

export default function({  controls, themes, sound }) {
  btnTree.addEventListener('click', () => {
    themes.tree()
  })

  btnCloud.addEventListener('click', ()  => {
    themes.cloud()
  })

  btnShop.addEventListener('click', () => {
    themes.shop()
  })

  btnFire.addEventListener('click', () => {
    themes.fire()
  })

  
  btnPlay.addEventListener('click', function () {
    timer.countDown()
  })

  btnStop.addEventListener('click', function () {
    // timer.reset()
  })
}