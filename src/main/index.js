import initMainWindow from './windows'

if (module.hot) {
  module.hot.accept('./windows', () => {
    console.log('🔁  HMR Reloading `./windows`...')
  })
  console.info('✅  Main HMR Enabled!')
}

initMainWindow()
