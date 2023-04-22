import Sounds from './sounds.js'

const sound = Sounds()

export default function Themes({
  btnTree,
  btnCloud,
  btnShop,
  btnFire
}) {

  // tree OK FALTA IMPEMENTAR OUTROS 3 BOTÕES
  function tree() {
    const btnTreePressed = btnTree.classList.contains('selected')

    if (btnTreePressed) {
      sound.unpress()
      btnTree.style.backgroundColor = 'hsl(240, 9%, 89%)'
      btnTree.classList.remove('selected')
    } else {
      btnTree.classList.add('selected')
      btnCloud.classList.remove('selected')
      btnShop.classList.remove('selected')
      btnFire.classList.remove('selected')

      btnTree.style.backgroundColor = 'hsl(97, 98%, 37%)'
      btnCloud.style.backgroundColor = 'hsl(240, 9%, 89%)'
      btnShop.style.backgroundColor = 'hsl(240, 9%, 89%)'
      btnFire.style.backgroundColor = 'hsl(240, 9%, 89%)'

      sound.pressTree()
    }
  }

  function cloud() {
    btnTree.classList.remove('selected')
    btnCloud.classList.add('selected')
    btnShop.classList.remove('selected')
    btnFire.classList.remove('selected')

    btnTree.style.backgroundColor = 'hsl(240, 9%, 89%)'
    btnCloud.style.backgroundColor = 'hsl(194, 97%, 31%)'
    btnShop.style.backgroundColor = 'hsl(240, 9%, 89%)'
    btnFire.style.backgroundColor = 'hsl(240, 9%, 89%)'

    sound.pressCloud()
  }

  function shop() {
    btnTree.classList.remove('selected')
    btnCloud.classList.remove('selected')
    btnShop.classList.add('selected')
    btnFire.classList.remove('selected')

    btnTree.style.backgroundColor = 'hsl(240, 9%, 89%)'
    btnCloud.style.backgroundColor = 'hsl(240, 9%, 89%)'
    btnShop.style.backgroundColor = 'hsl(55, 94%, 42%)'
    btnFire.style.backgroundColor = 'hsl(240, 9%, 89%)'

    sound.pressShop()
  }

  function fire() {
    btnTree.classList.remove('selected')
    btnCloud.classList.remove('selected')
    btnShop.classList.remove('selected')
    btnFire.classList.add('selected')

    btnTree.style.backgroundColor = 'hsl(240, 9%, 89%)'
    btnCloud.style.backgroundColor = 'hsl(240, 9%, 89%)'
    btnShop.style.backgroundColor = 'hsl(240, 9%, 89%)'
    btnFire.style.backgroundColor = 'hsl(0, 90%, 42%)'

    sound.pressFire()
  }

  return {
    tree,
    cloud,
    shop,
    fire
  }
}