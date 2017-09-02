import {
  TOGGLE_WINDOW_FULLSCREEN,
  TOGGLE_WINDOW_MINIMIZE,
  WINDOW_CLOSE
} from '../lib/types'

const INITIAL_STATE = {
  isFullScreen: false,
  isMinimized: false,
  windowOpen: false
}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case TOGGLE_WINDOW_FULLSCREEN:
      return { ...state, isFullScreen: payload }
    case TOGGLE_WINDOW_MINIMIZE:
      return { ...state, isMinimized: payload }
    case WINDOW_CLOSE:
      return { ...state, windowOpen: payload }
    default: return state
  }
}
