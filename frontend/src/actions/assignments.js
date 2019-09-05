import { orderStatusQueue } from './orders.js';

export const ASSIGN_ORDERS = 'ASSIGN_ORDERS';
export const assignOrders = (driver_id) => (dispatch, getState) => {
	// update status for each selected order
	const selectedOrders = getState().assignments.selectedOrders;
	// console.log('selectedOrders', selectedOrders)
	Object.keys(selectedOrders).forEach(order => dispatch(orderStatusQueue(order)));
	
	// assign orders to driver
	dispatch({
		driver_id,
		type: ASSIGN_ORDERS,
	});
}

export const SELECT_ORDER = 'SELECT_ORDER';
export const selectOrder = (order_id) => (dispatch) => {
	dispatch({
		order_id,
		type: SELECT_ORDER,
	});
};

export const UNSELECT_ORDER = 'UNSELECT_ORDER';
export const unselectOrder = (order_id) => (dispatch) => {
	dispatch({
		order_id,
		type: UNSELECT_ORDER,
	});
};
