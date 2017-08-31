import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import Thunk from 'redux-thunk'

import reducers from '../reducers'

const isDev = process.env.NODE_ENV !== 'production'

const prodMiddlewares = [ Thunk ]
const devMiddlewares = [require('redux-logger').default]

if (process.type === 'renderer') {

} else {

}

const defaultMiddlewares = isDev
  ? [...prodMiddlewares, ...devMiddlewares]
  : prodMiddlewares

export default (initialState = {}, middlewares = defaultMiddlewares) => {
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(
      applyMiddleware(...defaultMiddlewares)
    )
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(require('../reducers/index').default)
    })
  }

  return store
}
