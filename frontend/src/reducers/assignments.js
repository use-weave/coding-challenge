import {
	ASSIGN_ORDERS,
  SELECT_ORDER,
  UNSELECT_ORDER
} from '../actions/assignments.js';

const INITIAL_STATE = {
	selectedOrders: {},
  drivers: {
  	1239213: [],
  },
  error: '',
};

const assignments = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  	case ASSIGN_ORDERS:
  		return {
  			...state,
  			drivers: {
  				...state.drivers,
  				// check if driver_id already has a queue
  				[action.driver_id]: state.drivers.hasOwnProperty(action.driver_id)
  					// if so, spread selected orders into existing array
  					? [...state.drivers[action.driver_id], ...Object.keys(state.selectedOrders)]
						: Object.keys(state.selectedOrders)
  			},
  			selectedOrders: selectedOrders(state.selectedOrders, action),
  		};
  	case SELECT_ORDER:
		case UNSELECT_ORDER:
			return {
				...state,
				selectedOrders: selectedOrders(state.selectedOrders, action),
			};
    default:
      return state;
  }
}

const selectedOrders = (state, action) => {
	switch (action.type) {
		case SELECT_ORDER:
			return {
				...state,
				[action.order_id]: true,
			};
		case UNSELECT_ORDER:
			delete state[action.order_id]
			return {...state}; // must spread this for the selectedOrdersCountSelector to update
		default:
			return state;
	}
}

import { createSelector } from 'reselect';

const selectedOrdersSelector = state => state.assignments.selectedOrders;

export const selectedOrdersCountSelector = createSelector(
	selectedOrdersSelector,
	selectedOrders => {
		return Object.keys(selectedOrders).length;
	}
)

export default assignments;