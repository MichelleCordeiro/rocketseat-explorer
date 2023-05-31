const ovni = document.querySelector('.ovni img')

document.addEventListener('mousemove', e => {
  let x = e.clientX
  let y = e.clientY
  x = -x/5 + y
  y = -y + 15
  let z = x

  ovni.style.transform = `perspective(700px) translateZ(${z}px) translateX(${x}px) translateY(${y}px) `;
})