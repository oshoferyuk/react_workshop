import React from 'react';
import PropTypes from 'prop-types';
import P from 'components/P';
import { Panel, Col, Image } from 'react-bootstrap';

const HouseCard = ({property : house}) => (
    <Panel>
        <Panel.Body>
            <Col xs={6} md={4}>
                <Image src={house.picture} thumbnail />
            </Col>    
        
            <P>City: { house.city }</P>          
            <P>Price { house.price }</P>    
        </Panel.Body>    
    </Panel>        
);

HouseCard.propTypes = {
    // property: PropTypes.object.isRequired
}

export default HouseCard;