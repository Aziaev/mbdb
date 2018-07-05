import React, {Component} from "react"
import {Col, Grid, Row} from "react-bootstrap"
import constants from "../../constants"
import {promoBlock} from "../../style"
import ArtistsMap from "../Maps/ArtistsMap"

class Landing extends Component {
  render() {

    return (
      <div>
        <Grid>
          <Row>
            <Col md={8} mdOffset={2}>
              <div className="header-text">
                <div style={promoBlock}>
                  <h2>{constants.APP_NAME}</h2>
                  <h4>Почувствуйте живое шоу</h4>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
        <ArtistsMap/>
        <Grid>
          <Row>
            <Col md={8} mdOffset={2}>
              <div className="header-text">
              <h4>Music Boom позволит вам с легкостью найти все активные выступления и перформансы в вашем городе. Оно откроет вам мир живых и ярких шоу прямо на улицах вашего города.</h4>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Landing;
