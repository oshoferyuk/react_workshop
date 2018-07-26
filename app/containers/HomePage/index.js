import React from 'react';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import H2 from 'components/H2';
import Section from './Section';

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
          <Section>
            <H2>First page</H2>
          </Section>
        </div>
      </article>
    );
  }
}

export default compose()(HomePage);
