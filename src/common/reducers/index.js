import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import example from './ExampleReducer'

export default combineReducers({
  example,
  router: routerReducer
})
