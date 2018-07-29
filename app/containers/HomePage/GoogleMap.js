import React from 'react';
import { compose } from 'redux';
import GoogleMapWrapper from './GoogleMapWrapper';

let google;

export class GoogleMap extends React.PureComponent {

    constructor(props) {
        super(props); 
        this.mapRef = React.createRef();       
        
    }
  
  
    componentDidMount(){
        const map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8,
          });
    
    
        console.dir(map);
    }

    render(){
        
    return (
        <GoogleMapWrapper>
            <div id="map" ref={this.mapRef} style={{width:'100%',height:'400px'}}></div>
        </GoogleMapWrapper>                
    )    
  }

}

export default compose()(GoogleMap);
