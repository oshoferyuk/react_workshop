import { fromJS } from 'immutable';

import { POPULATE_PLANETS } from './constants';


// The initial state of the App
export const initialState = fromJS({
  people: { 1: 'bob' },
  planets: [],
});

function swapiReducer(state = initialState, action) {
  switch (action.type) {
    case POPULATE_PLANETS:      
      return state;
    default:
      return state;
  }
}

export default swapiReducer;