import 'react-hot-loader/patch'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import 'typeface-roboto'
import './style/materialIcons.scss'

import App from './containers/App'

const renderApp = Component => render(
  <AppContainer>
    <Component />
  </AppContainer>,
  document.getElementById('app')
)

renderApp(App)

if (module.hot) {
  module.hot.accept(
    './containers/App',
    () => { renderApp(App) }
  )
}
