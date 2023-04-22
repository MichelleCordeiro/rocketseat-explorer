import Controls from './controls.js'
import Timer from './timer.js'
import Themes from './themes.js'
import Sound from './sounds.js'
import Events from './events.js'
import {
  minutesDisplay,
  secondsDisplay,

  btnPlay,
  btnStop,
  btnPlus,
  btnMinus,

  btnTree,
  btnCloud,
  btnShop,
  btnFire
} from './elements.js';

const controls = Controls({
  btnPlay,
  btnStop,
  btnPlus,
  btnMinus
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
});

const themes = Themes({
  btnTree,
  btnCloud,
  btnShop,
  btnFire
})

const sound = Sound()

Events({ timer, controls, themes, sound })
