import { HTTP_LOADING, HTTP_LOADED, HTTP_ERROR} from '../actions/index'

const initialState={
    state: 'LOADED',
    error: undefined,
    test: 'RAY JUNG'
}

export const loading = (state = initialState, action) => {
    switch (action.type) {
      case HTTP_LOADING:
        return Object.assign({}, state, { state: 'HTTP_LOADING', error: undefined });
      case HTTP_LOADED:
        return Object.assign({}, state, { state: 'HTTP_LOADED', error: undefined });
      case HTTP_ERROR:
        return Object.assign({}, state, { state: 'HTTP_ERROR', error: action.error });
      default:
        return state;
    }
  };