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
  btnDark,
  btnLight
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
    themes.buttonTheme(btnTree)
  })

  btnCloud.addEventListener('click', () => {
    themes.buttonTheme(btnCloud)
  })

  btnShop.addEventListener('click', () => {
    themes.buttonTheme(btnShop)
  })

  btnFire.addEventListener('click', () => {
    themes.buttonTheme(btnFire)
  })

  btnDark.addEventListener('click', () => {
    darkMode.dark()
  })

  btnLight.addEventListener('click', () => {
    darkMode.light()
  })
}