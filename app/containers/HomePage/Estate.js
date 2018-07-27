import React from 'react';
import { compose } from 'redux';
import EstateWrapper from './EstateWrapper';
import data from '../../data/Data';
import HouseCard from './HouseCard';

export class Estate extends React.PureComponent {

    constructor() {
        super();
        this.state = {
          properties: data.properties,
          activeProperty: data.properties[0]
      }
  }
  
    render() {
    const { properties } = this.state;
    
        return (
      <EstateWrapper>
          {properties.map(property => <HouseCard key={ property._id } property={property} />)}          
      </EstateWrapper>
    );
  }
}

export default compose()(Estate);
