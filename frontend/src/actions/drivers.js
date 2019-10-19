export const SET_STATUS = 'DRIVER_SET_STATUS';

export const setStatus = (driver, status) => ({
    type: SET_STATUS,
    driver,
    status
});
