import {
    /* */
} from '../actions/drivers.js';

const INITIAL_STATE = [
    {
        id: '1239213',
        name: 'James Ontiveros',
        status: 'active',
        vehicle_name: 'Camry',
        vehicle_license: '123-ABC',
    },
    {
        id: '1239214',
        name: 'Dustin Higginbotham',
        status: 'inactive',
        vehicle_name: 'Outback',
        vehicle_license: '124-XYZ',
    },
    {
        id: '1239215',
        name: 'Zachary Pierce',
        status: 'active',
        vehicle_name: 'Tacoma',
        vehicle_license: '444-VVV',
    }
];

const drivers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default drivers;