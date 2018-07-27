import React from 'react';
import { compose } from 'redux';
import EstateWrapper from './EstateWrapper';
import GoogleMap from './GoogleMap';
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
    const { properties, activeProperty } = this.state;
    
        return (
      <div>
      <EstateWrapper>
          {properties.map(property => <HouseCard key={ property._id } property={property} />)}          
      </EstateWrapper>
      <div>start</div>
      <GoogleMap props={ activeProperty }></GoogleMap>
      <div>end</div>
      </div>
    );
  }
}

export default compose()(Estate);
