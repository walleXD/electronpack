import { UPDATE_SCORE } from '../lib/types'

const INITIAL_STATE = {
  score: 0
}

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case UPDATE_SCORE:
      return { score: state.score + payload }
    default:
      return state
  }
}
