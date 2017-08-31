import React from 'react'
import Switch from 'react-router-dom/Switch'
import Router from 'react-router-dom/HashRouter'
import Route from 'react-router-dom/Route'
import { Provider } from 'react-redux'

import initStore from '../../common/lib/initStore'
import DefaultLayout from '../layouts/default'
import HomePage from '../pages/home'
import TestPage from '../pages/test'

const store = initStore()

const App = () =>
  <Provider store={store}>
    <Router>
      <Switch>
        <DefaultLayout exact path='/' component={HomePage} />
        <DefaultLayout path='/test' component={TestPage} />
      </Switch>
    </Router>
  </Provider>

export default App
