export const SET_ORDER_STATUS = 'ORDER_SET_STATUS';

export const setOrderStatus = (order, status) => ({
    type: SET_ORDER_STATUS,
    order,
    status
});
