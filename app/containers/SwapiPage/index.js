import React from 'react';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import { createSelector } from 'reselect';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import reducer from './reducer';
import { selectPeople } from './selectors';

/* eslint-disable react/prefer-stateless-function */
export class SwapiPage extends React.PureComponent {
  render() {
    const { people } = this.props;
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
        </Helmet>
        <div>test {people[0]}</div>
      </article>
    );
  }
}

SwapiPage.propTypes = {
  people: PropTypes.array,
};

  const mapStateToProps = createSelector(selectPeople,  (people) => ({ people: people }));

 const withConnect = connect(mapStateToProps);

const withReducer = injectReducer({ key: 'people', reducer });

export default compose(withReducer, withConnect)(SwapiPage);
