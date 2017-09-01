import React from 'react'
import Switch from 'react-router-dom/Switch'
import Router from 'react-router-redux/ConnectedRouter'
import { Provider } from 'react-redux'
import { replayActionRenderer } from 'electron-redux'

import initStore from '../../common/lib/initStore'
import DefaultLayout from '../layouts/default'
import HomePage from '../pages/home'
import TestPage from '../pages/test'
import {history} from '../lib'
import StyleContainer from '../style/withMaterialRoot'

const store = initStore()
replayActionRenderer(store)

const App = () =>
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <DefaultLayout exact path='/' component={HomePage} />
        <DefaultLayout path='/test' component={TestPage} />
      </Switch>
    </Router>
  </Provider>

export default StyleContainer(App)
