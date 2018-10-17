import { createStore, combineReducers } from 'redux';

import placesReducers from './reducers/places';

const rootReducer = combineReducers({
    reducersPlaces: placesReducers
});

const configureStore = () => {
    return createStore(rootReducer)
}

export default configureStore;