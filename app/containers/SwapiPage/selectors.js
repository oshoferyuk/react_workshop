import { createSelector } from 'reselect';
import { initialState } from './reducer';

// const selectPeople = state => state.get('people', initialState);

const selectPeople = () => initialState.get('people').toArray();


// const makeSelectUsername = () =>
  // createSelector(selectHome, homeState => homeState.get('username'));

export { selectPeople };