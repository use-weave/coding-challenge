// We load in ItemActions here to be able to reference the constants you hopefully set up.
import {ADD} from 'actions/Items'


// Every reducer needs to have something return, whether or not a case matches.
// A reducer should never return null or undefined.
export default (state = [], action) => {
    switch (action.type) {
      case ADD:
        const newState = [...state, action.item]
        return newState
      default:
        return state
    }
  }

