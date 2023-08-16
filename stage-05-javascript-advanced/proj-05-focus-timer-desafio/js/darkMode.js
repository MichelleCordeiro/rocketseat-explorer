import {
  docBody,
  timerH2,
  divDarkMode,
  controlPlus,
  controlMinus
} from './elements.js'

export default function DarkMode ({
  btnDark,
  btnLight
}) {

  
  function dark() {
    divDarkMode.classList.add('dark')
    divDarkMode.classList.remove('light')

    btnDark.classList.add('hide')
    btnLight.classList.remove('hide')

    docBody.style.backgroundColor = '#121214'
    timerH2.style.color = '#FFFFFF'
    controlPlus.style.fill = '#e1dede'
    controlMinus.style.fill = '#e1dede'
  }
  
  function light() {
    divDarkMode.classList.remove('dark')
    divDarkMode.classList.add('light')

    btnDark.classList.remove('hide')
    btnLight.classList.add('hide')

    docBody.style.backgroundColor = '#FFFFFF'
    timerH2.style.color = '#121214'
    controlPlus.style.fill = '#121214'
    controlMinus.style.fill = '#121214'
  }  
  
  return {
    dark,
    light
  }
}