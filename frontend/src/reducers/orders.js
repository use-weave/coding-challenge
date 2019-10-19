import { SET_ORDER_STATUS } from "../actions/orders";

const INITIAL_STATE = [
    {
        id: '1290312938',
        customer: 'Danny DeVito',
        items: 5,
        total: 10499,
        created: new Date().toISOString(),
        address_street: '123 Test Dr',
        address_city: 'Boulder',
        address_state: 'CO',
        address_zip: '80303',
        status: 'active',
    },
    {
        id: '1238124751',
        customer: 'Bob Saget',
        items: 2,
        total: 5527,
        created: new Date().toISOString(),
        address_street: '345 Test Dr',
        address_city: 'Aurora',
        address_state: 'CO',
        address_zip: '90210',
        status: 'active',
    },
    {
        id: '1238124756',
        customer: 'Tony Hawk',
        items: 1,
        total: 1657,
        created: new Date().toISOString(),
        address_street: '8819 Test Dr',
        address_city: 'Ft Collins',
        address_state: 'CO',
        address_zip: '81091',
        status: 'active',
    },
    {
        id: '1238124757',
        customer: 'T Pain',
        items: 9,
        total: 45412,
        created: new Date().toISOString(),
        address_street: '7182 Test Dr',
        address_city: 'Greeley',
        address_state: 'CO',
        address_zip: '81920',
        status: 'active',
    }
];

const orders = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_ORDER_STATUS:
            return state.map(someState => 
                someState.id === action.order && action.status !== 'complete' ? {...someState, status: action.status}: {...someState});
        default:
            return state;
    }
}

export default orders;