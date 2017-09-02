import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import Thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import {
  forwardToMain,
  triggerAlias,
  forwardToRenderer,
  getInitialStateRenderer
} from 'electron-redux'

import reducers from '../reducers'

const isDev = process.env.NODE_ENV !== 'production'
let INITIAL_STATE = {}

const prodMiddlewares = [ Thunk ]
const devMiddlewares = [require('redux-immutable-state-invariant').default()]

const defaultMiddlewares = isDev
  ? [...prodMiddlewares, ...devMiddlewares]
  : prodMiddlewares

if (process.type === 'renderer') {
  if (isDev) defaultMiddlewares.push(require('redux-logger').default)
  INITIAL_STATE = getInitialStateRenderer()
  // renderer only middleware
  defaultMiddlewares.unshift(
    forwardToMain,
    routerMiddleware(require('../../renderer/lib').history)
  )
} else {
  if (isDev) defaultMiddlewares.push(require('redux-node-logger')())
  // main thread middleware
  defaultMiddlewares.unshift(triggerAlias)
  defaultMiddlewares.push(forwardToRenderer)
  console.log(...defaultMiddlewares)
}

export default (initialState = INITIAL_STATE, middlewares = defaultMiddlewares) => {
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(
      applyMiddleware(...middlewares)
    )
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(require('../reducers/index').default)
    })
  }

  return store
}
