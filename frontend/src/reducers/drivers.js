import {
    SET_STATUS
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
        status: 'active',
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
        case SET_STATUS:
            return state.map(someState => 
                someState.name === action.driver ? {...someState, status: action.status} : {...someState});
        default:
            return state;
    }
};

export default drivers;