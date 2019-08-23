
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
    }
];

const orders = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default orders;