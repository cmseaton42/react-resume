import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const GoogleMapWrapper = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={props.zoom}
        defaultCenter={props.center}
    >
        <Marker
            {...props.marker}
        />
    </GoogleMap>
));

export default class Map extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <GoogleMapWrapper
                containerElement={
                    <div style={{ height: `100%` }} />
                }
                mapElement={
                    <div style={{ height: `100%` }} />
                }

                center={this.props.center}
                zoom={this.props.zoom}
                marker={this.props.marker}
            />
        );
    }
}
