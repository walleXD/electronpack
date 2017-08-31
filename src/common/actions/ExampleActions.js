import { UPDATE_SCORE } from '../lib/types'

export updateScore = i => ({
  type: UPDATE_SCORE,
  payload: i
})
