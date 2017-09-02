import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import window from './WindowReducer'
import example from './ExampleReducer'

export default combineReducers({
  example,
  window,
  router: routerReducer
})
