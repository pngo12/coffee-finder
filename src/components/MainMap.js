import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


class MainMap extends Component {
    render() {
        return (
            <div>
                <Map 
                google={this.props.google} zoom={14}
                initialCenter={{
                    lat: 33.717472,
                    lng: -117.831146
                }}>
                    <Marker 
                    name={'Steelhead Coffee'}
                    position={{ lat: 33.818908, lng: -118.187207}}
                    />
                    <Marker 
                    name={'Bad Coffee'}
                    position={{ lat: 33.675577, lng: -117.911753}}
                    />
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API
})(MainMap);