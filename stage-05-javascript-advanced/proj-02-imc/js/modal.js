export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  msg: document.querySelector('h2'),
  btnClose: document.querySelector('.close'),

  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

Modal.btnClose.onclick = () => {
  Modal.close()
}

// não usar o "on...", pois só será considerado um por aplicativo, o último a ser executadocar addEventListener
// window.onkeydown = handleKeyDown

window.addEventListener('keydown', handleKeyDown)

function handleKeyDown(event) {
  if (event.key === 'Escape') {
    Modal.close()
  }
}