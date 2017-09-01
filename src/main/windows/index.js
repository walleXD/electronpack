import { BrowserWindow, app } from 'electron'
import isDev from 'electron-is-dev'
import windowStateKeeper from 'electron-window-state'
import { replayActionMain } from 'electron-redux'
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer'

import initStore from '../../common/lib/initStore'

const createApp = () => {
  let mainWindow
  let firstLoad = true
  let url
  const store = initStore({ example: {score: 10} })
  replayActionMain(store)

  if (isDev) {
    require('electron-debug')({showDevTools: true})
    url = `http://localhost:9080`
  } else {
    url = `file://${__dirname}/index.html`
  }

  const createMainWindow = async () => {
    if (firstLoad && isDev) {
      await installExtension([
        REACT_DEVELOPER_TOOLS,
        REDUX_DEVTOOLS
      ])
      await require('devtron').install()
      firstLoad = false
    }

    let mainWindowState = windowStateKeeper({
      defaultWidth: 1000,
      defaultHeight: 500
    })

    mainWindow = new BrowserWindow({
      'x': mainWindowState.x,
      'y': mainWindowState.y,
      'width': mainWindowState.width,
      'height': mainWindowState.height,
      useContentSize: true
    })

    mainWindowState.manage(mainWindow)

    mainWindow.loadURL(url)

    mainWindow.on('closed', () => { mainWindow = null })
  }

  // Prepare the renderer once the app is ready
  app.on('ready', createMainWindow)

  // Quit when all windows are closed
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    } else {
      mainWindow = null
    }
  })

  app.on('activate', () => {
    if (mainWindow === null) {
      createMainWindow()
    }
  })
}

export default createApp
