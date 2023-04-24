export default function Controls(
  btnPlay,
  btnPause,
) {

  const newBtnPlay = document.querySelector('.play');
  const newBtnPause = document.querySelector('.pause');
  console.log("btnPlay: ", btnPlay);
  console.log("newBtnPlay: ", newBtnPlay);
  
  function play() {
    newBtnPlay.classList.add('hide');
    // btnPlay.classList.add('hide')
    newBtnPause.classList.remove('hide');
    // btnPause.classList.remove('hide')
  }
  
  function pause() {
    newBtnPlay.classList.remove('hide');
    // btnPlay.classList.remove('hide')
    newBtnPause.classList.add('hide');
    // btnPause.classList.add('hide')
  }
  
  function reset() {
    newBtnPlay.classList.remove('hide');
    // btnPlay.classList.remove('hide')
    newBtnPause.classList.add('hide');
    // btnPause.classList.add('hide')
  }

  return {
    play,
    pause,
    reset
  }
}
