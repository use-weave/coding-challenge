// We load in ItemActions here to be able to reference the constants you hopefully set up.
import * as ItemActions from 'actions/Items'


// Every reducer needs to have something return, whether or not a case matches.
// A reducer should never return null or undefined.
function Items(state = [], action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                id: ItemActions.id,
                text: ItemActions.text,
            }
        default:
            return state
    }
}


export default Items