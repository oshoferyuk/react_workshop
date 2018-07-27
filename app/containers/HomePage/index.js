import React from 'react';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { Estate } from './Estate';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.Component {
  render() {
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description" content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <div>
          <Estate></Estate>
        </div>
      </article>
    );
  }
}

export default compose()(HomePage);
