import Controls from './controls.js'
import Timer from './timer.js'
import Themes from './themes.js'
import Sounds from './sounds.js'
import DarkMode from './darkMode.js'
import Events from './events.js'
import {
  minutesDisplay,
  secondsDisplay,

  btnPlay,
  btnPause,

  btnTree,
  btnCloud,
  btnShop,
  btnFire,

  btnDark,
  btnLight
} from './elements.js'

const themes = Themes({
  btnTree,
  btnCloud,
  btnShop,
  btnFire
})

const sound = Sounds()

const controls = Controls({
  btnPlay,
  btnPause
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

const darkMode = DarkMode({
  btnDark,
  btnLight
})

Events({ themes, sound, controls, timer, darkMode })
