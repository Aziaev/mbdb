import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Map from 'google-map-react';

import MapCard from '../../components/Card/MapCard.jsx';
import {GOOGLE_API_KEY} from "../../variables/Variables"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import pubActions from "../../actions/pubActions"
import {PerformerMarker} from "./ArtistMarker"
import {withRouter} from "react-router-dom"

class GoogleMaps extends Component {

  static createOptions() {
    return {gestureHandling: 'greedy'}
  }

  componentWillMount() {
    this.props.getCurrentUserLocation();
    this.props.getPerformersLocation();
    setInterval(this.props.getPerformersLocation, 30000);
  }

  onPerformerClick = (performer) => {
    this.props.history.push(`donate/${performer.artist_id}`);
  }

  render() {
    console.log('Current user location:', this.props.location);
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <MapCard
                title="Выступают прямо сейчас"
                content={
                  <Map
                    bootstrapURLKeys={{key: GOOGLE_API_KEY}}
                    defaultCenter={this.props.location}
                    defaultZoom={this.props.zoom}
                    center={this.props.location}
                    zoom={13}
                    style={{width: '100%', height: '480px', position: 'relative'}}
                    options={GoogleMaps.createOptions}
                    clickableIcons={true}
                  >
                    {this.props.performers.map(performer =>
                        <PerformerMarker
                          key={performer.id}
                          lat={performer.latitude}
                          lng={performer.longitude}
                          text={performer.id}
                          performer={performer}
                          onClick={this.onPerformerClick}
                        />
                    )}
                  </Map>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.pub.currentUserLocation,
    performers: state.pub.performers || []
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentUserLocation: bindActionCreators(pubActions.getCurrentUserLocation, dispatch),
    getPerformersLocation: bindActionCreators(pubActions.getPerformersLocation, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GoogleMaps));
