const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// const modalWrapper = document.querySelector('.modal-wrapper')
// const modalMsg = document.querySelector('h2')
// const modalBtnClose = document.querySelector('.close')

const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  msg: document.querySelector('h2'),
  btnClose: document.querySelector('.close'),

  // open: function () {},
  // close: function () {},
  /* object literal */
  // open() { modalWrapper.classList.add('open') },
  // close() { modalWrapper.classList.remove('open') },
  open() {
    Modal.wrapper.classList.add('open');
  },
  close() {
    Modal.wrapper.classList.remove('open');
  }
};

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const result = IMC(weight, height);
  const msg = `Seu IMC é de ${result}`;

  Modal.msg.innerText = msg;     // modalMsg.innerText = msg
  Modal.open();    // modalWrapper.classList.add('open')
}

Modal.btnClose.onclick = () => {    // modalBtnClose.onclick = () => {
  Modal.close(); // modalWrapper.classList.remove('open')
}

function IMC(weight, height) {
  return (weight / ((height / 100) **2)).toFixed(2)
}