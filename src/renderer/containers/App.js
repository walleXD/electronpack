import React from 'react'
import Router from 'react-router-redux/ConnectedRouter'
import { Provider } from 'react-redux'
import { replayActionRenderer } from 'electron-redux'
import Switch from 'react-router-dom/Switch'

import { history } from '../lib'
import initStore from '../../common/lib/initStore'
import MainWindowContainer from './WindowContainer'
import DefaultLayout from '../layouts/default'
import HomePage from '../pages/home'
import TestPage from '../pages/test'
import StyleContainer from '../style/withMaterialRoot'

const store = initStore()
replayActionRenderer(store)

const App = () =>
  <Provider store={store}>
    <MainWindowContainer>
      <Router history={history}>
        <Switch>
          <DefaultLayout title='Home' exact path='/' component={HomePage} />
          <DefaultLayout title='Test' path='/test' component={TestPage} />
        </Switch>
      </Router>
    </MainWindowContainer>
  </Provider>

export default StyleContainer(App)
