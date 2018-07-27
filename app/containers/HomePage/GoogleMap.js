import React from 'react';
import { compose } from 'redux';
import EstateWrapper from './EstateWrapper';
import data from '../../data/Data';
import HouseCard from './HouseCard';


export class GoogleMap extends React.PureComponent {

    constructor(props) {
        super(props); 
        this.mapRef = React.createRef();       
        
    }
  
  
    componentDidMount(){
        //this.map = new google.maps.Map(this.mapRef,{
          //  center: {lat: -34.397, lng: 150.644},
            //zoom: 8
        //})
    
    
        //console.dir(this.map);
    }

    render(){
        
    return (
        <div>
            
        <div id="map" ref={this.mapRef}></div>
        </div>
    )    
  }

}

export default compose()(GoogleMap);
