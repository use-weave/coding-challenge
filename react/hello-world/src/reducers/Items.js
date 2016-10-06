import * as types from '../constants/ActionTypes';

function Items(state = [], action) {
    switch (action.type) {
        case types.ADD_ITEM_TO_LIST:
          return [...state, action.item];
        default:
            return state
    }
}

export default Items
