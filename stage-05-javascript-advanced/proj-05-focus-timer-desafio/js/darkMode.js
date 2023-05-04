export default function DarkMode ({
  btnDarkMode,
  btnLightMode
}) {
  const docBody = document.body
  const divDarkMode = docBody.querySelector('.dark-mode')
  const timerH2 = docBody.querySelector('#timer')
  const controlPlus = docBody.querySelector('.plus path')
  const controlMinus = docBody.querySelector('.minus path')
  
  function dark() {
    divDarkMode.classList.add('dark')
    divDarkMode.classList.remove('light')

    btnDarkMode.classList.add('hide')
    btnLightMode.classList.remove('hide')

    docBody.style.backgroundColor = '#121214'
    divDarkMode.style.backgroundColor = '#121214'
    timerH2.style.color = '#FFFFFF'
    controlPlus.style.fill = '#e1dede'
    controlMinus.style.fill = '#e1dede'
  }
  
  function light() {
    divDarkMode.classList.remove('dark')
    divDarkMode.classList.add('light')

    btnDarkMode.classList.remove('hide')
    btnLightMode.classList.add('hide')

    docBody.style.backgroundColor = '#FFFFFF'
    divDarkMode.style.backgroundColor = '#FFFFFF'
    timerH2.style.color = '#121214'
    controlPlus.style.fill = '#121214'
    controlMinus.style.fill = '#121214'
  }
  
  
  return {
    dark,
    light
  }
}