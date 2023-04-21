export default function Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet
}) {

  function play() {
    buttonPlay.classList.add('hide')
    buttonSet.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonStop.classList.remove('hide')
  }

  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function reset() {
    buttonPause.classList.add('hide')
    buttonStop.classList.add('hide')
    buttonPlay.classList.remove('hide')
    buttonSet.classList.remove('hide')
  }

  function getMinutes() {
    let newMinutes = prompt('Quantos minutos?')
    if (!newMinutes) {
      return false
    }

    return newMinutes
  }

  return {
    reset,
    play,
    pause,
    getMinutes
  }
}
