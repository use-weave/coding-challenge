// We load in ItemActions here to be able to reference the constants you hopefully set up.
import * as ItemActions from 'actions/Items'

// Every reducer needs to have something return, whether or not a case matches.
// A reducer should never return null or undefined.
function Items(state = [], action) {

    switch (action.type) {
//reducer to append new item to list
	     case ItemActions.ADD_TODO:
	      return [
	        ...state,
	        {
	          text: action.text,
	          completed: false
	        }
	      ]

        default:
            return state
    }
}

export default Items


//take previous state and action and return new state. ie a list with a new thing in it 
