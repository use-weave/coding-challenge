import * as types from '../constants/ActionTypes';

export default function Form(state = "", action) {
    switch (action.type) {
        case types.STREAM_CURRENT_ITEM:
          return action.item;
        case types.ADD_ITEM_TO_LIST:
          return "";
        default:
            return state
    }
};
