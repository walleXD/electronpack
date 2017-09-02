import {
  TOGGLE_WINDOW_FULLSCREEN,
  TOGGLE_WINDOW_MINIMIZE,
  WINDOW_CLOSE
} from '../lib/types'
import {
  toggleWindowFullscreen,
  closeWindow,
  toggleWindowMinimized
} from '../../renderer/utils'

export const toggleFullScreen = () => ({
  type: TOGGLE_WINDOW_FULLSCREEN,
  payload: toggleWindowFullscreen()
})

export const toggleMinimize = () => ({
  type: TOGGLE_WINDOW_MINIMIZE,
  payload: toggleWindowMinimized()
})

export const windowClose = () => {
  closeWindow()
  return {
    type: WINDOW_CLOSE,
    payload: false
  }
}
