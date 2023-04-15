export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  msg: document.querySelector('h2'),
  btnClose: document.querySelector('.close'),
  inputClick: document.querySelector('input'),

  open() {
    Modal.wrapper.classList.add('open');
  },
  close() {
    Modal.wrapper.classList.remove('open');
  }
};

Modal.btnClose.onclick = () => {
  Modal.close()
}

// Modal.inputClick.oninput = (e) => {
//   console.log(e)
// }
// function inputIsTrue(e) {
//   form.oninput = e => {
//     return e.isTrusted;
//     console.log(e.isTrusted);
//   };
// }

// não usar o "on...", pois só será considerado um por aplicativo, o último a ser executadocar addEventListener
// window.onkeydown = handleKeyDown
window.addEventListener('keydown', handleKeyDown)

function handleKeyDown(event) {
  if (event.key === 'Escape') {
    Modal.close()
  }
}