import { ADD_ITEM } from 'actions/Items'

function Items(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state, action.payload
      ]
    default:
      return state
  }
}

export default Items
