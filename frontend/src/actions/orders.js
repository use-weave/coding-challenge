export const STATUS_QUEUE = 'STATUS_QUEUE'; 
export const orderStatusQueue = (order_id) => (dispatch) => {
	// there'd be an async call to the server to update the status here
	dispatch({
		order_id,
		type: STATUS_QUEUE,
	})
};
