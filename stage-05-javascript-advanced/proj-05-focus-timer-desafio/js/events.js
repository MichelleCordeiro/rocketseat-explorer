import {
  btnPlay,
  btnPause,
  btnStop,
  btnPlus,
  btnMinus,
  btnTree,
  btnCloud,
  btnShop,
  btnFire
} from './elements.js'

export default function({ themes, controls, timer }) {  

  btnPlay.addEventListener('click', () => {
    controls.play()
    timer.countDown()
  })
  
  btnPause.addEventListener('click', () => {
    controls.pause()
    timer.hold()
  })

  btnStop.addEventListener('click', () => {
    controls.reset()
    timer.reset()
  })

  btnPlus.addEventListener('click', () => {
    timer.plus()
  })

  btnMinus.addEventListener('click', () => {
    timer.minus()
  })

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
}