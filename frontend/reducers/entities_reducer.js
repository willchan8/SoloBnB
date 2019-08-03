import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import listingsReducer from './listings_reducer';
import amenitiesReducer from './amenities_reducer';
import bookingsReducer from './bookings_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  listings: listingsReducer,
  amenities: amenitiesReducer,
  bookings: bookingsReducer
});

export default entitiesReducer;