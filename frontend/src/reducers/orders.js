import { STATUS_QUEUE } from '../actions/orders.js';

const INITIAL_STATE = {
    1290312938: {
        id: '1290312938',
        customer: 'Danny DeVito',
        items: 5,
        total: 10499,
        created: new Date().toISOString(),
        address_street: '123 Test Dr',
        address_city: 'Boulder',
        address_state: 'CO',
        address_zip: '80303',
        /* Status Options (stubbed):
         * created, filled, queued, out for delivery, delivered, cancelled
         */
        statusList: [
            {
                actor_id: '1290312938',
                actor_name: 'Danny DeVito',
                status: 'Created',
                time: new Date().toISOString(),
            },
            {
                actor_id: '1290312938',
                actor_name: 'Barney', // this would be a dispensary employee filling orders
                status: 'Filled',
                time: new Date().toISOString(),
            },
            {
                actor_id: '1290312938',
                actor_name: 'Bekkie', // this would be the dispensary manager assigning orders
                status: 'Queued',
                time: new Date().toISOString(),
            },
            {
                actor_id: '1239213',
                actor_name: 'James Ontiveros', // delivery driver
                status: 'Out For Delivery',
                time: new Date().toISOString(),
            },
            {
                actor_id: '1239213',
                actor_name: 'James Ontiveros',
                status: 'Delivered',
                time: new Date().toISOString(),
            },
        ],
    },
    1238124751: {
        id: '1238124751',
        customer: 'Bob Saget',
        items: 2,
        total: 5527,
        created: new Date().toISOString(),
        address_street: '345 Test Dr',
        address_city: 'Aurora',
        address_state: 'CO',
        address_zip: '90210',
        statusList: [
            {
                actor_id: '1238124751',
                actor_name: 'Bob Saget',
                status: 'Created',
                time: new Date().toISOString(),
            },
            {
                actor_id: '1290312938',
                actor_name: 'Barney', // this would be a dispensary employee filling orders
                status: 'Filled',
                time: new Date().toISOString(),
            },
        ],
    },
    1238124756: {
        id: '1238124756',
        customer: 'Tony Hawk',
        items: 1,
        total: 1657,
        created: new Date().toISOString(),
        address_street: '8819 Test Dr',
        address_city: 'Ft Collins',
        address_state: 'CO',
        address_zip: '81091',
        statusList: [
            {
                actor_id: '1238124756',
                actor_name: 'Tony Hawk',
                status: 'Created',
                time: new Date().toISOString(),
            },
            {
                actor_id: '1290312938',
                actor_name: 'Barney', // this would be a dispensary employee filling orders
                status: 'Filled',
                time: new Date().toISOString(),
            },
        ],
    },
    1238124757: {
        id: '1238124757',
        customer: 'T Pain',
        items: 9,
        total: 45412,
        created: new Date().toISOString(),
        address_street: '7182 Test Dr',
        address_city: 'Greeley',
        address_state: 'CO',
        address_zip: '81920',
        statusList: [
            {
                actor_id: '1238124757',
                actor_name: 'T Pain',
                status: 'Created',
                time: new Date().toISOString(),
            },
            {
                actor_id: '1290312938',
                actor_name: 'Barney', // this would be a dispensary employee filling orders
                status: 'Filled',
                time: new Date().toISOString(),
            },
        ],
    }
};

const orders = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case STATUS_QUEUE:
            state[action.order_id].statusList.push({
                actor_id: '1290312938',
                actor_name: 'Bekkie', // this would be the dispensary manager assigning orders
                status: 'Queued',
                time: new Date().toISOString(),
            })
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default orders;