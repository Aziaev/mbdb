// react components used to create a google map
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import React, { Component } from 'react';
import { GOOGLE_API_KEY } from "../../variables/Variables";

class MapComponent extends Component {
  render() {
    let { google, mapCenter, markers } = this.props;
    return (
      <Map
        containerStyle={{ position: 'relative' }}
        style={{ width: '100%', height: '400px', position: 'relative' }}
        google={google}
        initialCenter={mapCenter}
        zoom={12}
        clickableIcons={true}
      >
        {markers.map((marker, key) => (
          <Marker
            key={key}
            title={marker.title}
            name={marker.description}
            position={marker.location}
          />
        ))
        }
      </Map>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY
})(MapComponent);
