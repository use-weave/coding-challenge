
export const CREATE_ASSIGNMENT = 'CREATE_ASSIGNMENT';
export const CANCEL_ASSIGNMENT = 'CANCEL_ASSIGNMENT';

export const createAssignment = (driver, order) => ({
    type: CREATE_ASSIGNMENT,
    assignment: {
        driver,
        order,
    }
})
export const cancelAssignment = (driver) => ({
    type: CANCEL_ASSIGNMENT,
    driver,
})