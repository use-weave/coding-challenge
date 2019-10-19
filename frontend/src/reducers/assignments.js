import {
    CANCEL_ASSIGNMENT,
    CREATE_ASSIGNMENT
} from '../actions/assignments.js';

const INITIAL_STATE = [

];

const assignments = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_ASSIGNMENT:
            var identity = action.assignment.driver + action.assignment.order;
            if (state.filter(function(stateItem) {
                return stateItem.id === identity;
            })){
                return [
                    ...state, 
                    {id: identity,
                    driver: action.assignment.driver,
                    order: action.assignment.order,
                    status: 'assigned'}
                    ];
            } else {
                return state;
            }
        case CANCEL_ASSIGNMENT:
            return state.filter(function(stateItem) {
                return state && stateItem && stateItem.driver && stateItem.driver !== action.driver;
            })
        default:
            return state;
    }
}

export default assignments;