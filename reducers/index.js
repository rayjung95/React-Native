import {combineReducers} from 'redux';
import {loading} from './http';
import {eventsReducer} from "./EventsReducer";

// here combineReducers is use to split the main reducer into smaller ones
export const reducer = combineReducers({
    // this one is a special reducer to sync the router with the redux store
    loading: loading,
    events: eventsReducer
});
