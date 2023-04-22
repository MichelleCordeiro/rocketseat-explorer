import { btnPlay } from './elements.js'

export default function Controls() {

  function getMinutes() {
    let newMinutes = prompt('Quantos minutos?');
    if (!newMinutes) {
      return false;
    }

    return newMinutes;
  }

  return {
    getMinutes
  };
}
