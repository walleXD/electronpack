import { remote } from 'electron'

export const closeWindow = () => {
  const window = remote.getCurrentWindow()
  window.close()
}

export const toggleWindowFullscreen = () => {
  const window = remote.getCurrentWindow()
  !window.isFullScreen()
    ? window.setFullScreen(true)
    : window.setFullScreen(false)
  return window.isFullScreen()
}

export const toggleWindowMinimized = () => {
  const window = remote.getCurrentWindow()
  !window.isMinimized()
    ? window.minimize()
    : window.restore()
  return window.isMinimized()
}
