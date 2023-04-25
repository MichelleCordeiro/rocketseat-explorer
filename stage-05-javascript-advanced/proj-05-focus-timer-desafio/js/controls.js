export default function Controls(
  btnPlay,
  btnPause,
) {

  const newBtnPlay = document.querySelector('.play');
  const newBtnPause = document.querySelector('.pause');
  console.log("btnPlay: ", btnPlay);
  console.log("btnPause: ", btnPause);
  console.log("newBtnPlay: ", newBtnPlay);
  
  function play() {
    newBtnPlay.classList.add('hide');
    newBtnPause.classList.remove('hide');
    // btnPlay[0].classList.add('hide')
    // btnPause[e].classList.remove('hide')
  }
  
  function pause() {
    newBtnPlay.classList.remove('hide');
    newBtnPause.classList.add('hide');
    // btnPlay.classList.remove('hide')
    // btnPause.classList.add('hide')
  }
  
  function reset() {
    newBtnPlay.classList.remove('hide');
    newBtnPause.classList.add('hide');
    // btnPlay.classList.remove('hide')
    // btnPause.classList.add('hide')
  }

  return {
    play,
    pause,
    reset
  }
}
