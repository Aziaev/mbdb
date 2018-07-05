import React, {Component} from 'react';
import {Button} from "react-bootstrap"
import {connect} from "react-redux"
import performanceActions from "../../actions/performanceActions"
import {bindActionCreators} from "redux"
import PERFORMANCE_STATUS from "../../constants/performance"

import './Performance.css'
import pubActions from "../../actions/pubActions"

const VALIDATION_POLLING_INTERVAL = 5000

export class PerformanceCard extends Component {

  constructor(props) {
    super(props);
    this.props.getCurrentUserLocation();
  }

  getCoordinates = () => {
    return {
      latitude: this.props.location.lat,
      longitude: this.props.location.lng
    }
  }

  initialStatusRequested = false

  componentWillReceiveProps = (newProps) => {
    if(newProps.location && !this.initialStatusRequested){
      this.props.validatePerformance({latitude: newProps.location.lat, longitude: newProps.location.lng});
      this.initialStatusRequested = true;
    }

    if (newProps.performance.status === PERFORMANCE_STATUS.IN_PROGRESS && !this.validationTimer) {
      this.startValidationPolling()
    }
  }

  startPerformance = () => {
    this.props.startPerformance(this.getCoordinates());
    this.startValidationPolling();
  }

  stopPerformance = () => {
    this.props.stopPerformance();
    this.stopValidationPolling();
  }

  validationTimer = null

  startValidationPolling = () => {
    this.validationTimer = setInterval(() => {
      this.props.validatePerformance(this.getCoordinates())
    }, VALIDATION_POLLING_INTERVAL);
  }

  stopValidationPolling() {
    if (this.validationTimer) {
      clearInterval(this.validationTimer);
    }
  }

  render() {
    const {performance} = this.props;
    const live = performance && performance.status === PERFORMANCE_STATUS.IN_PROGRESS;
    const earned = performance && performance.data.currentEarnedMoney;
    const coordinatesReceived = this.props.location && this.props.location.lat;
    return (
      <div className="card card-stats">
        <div className="content">
          <div className="row">
            <div className="col-xs-2">
              <div className="icon-big text-left icon-warning">
                <i className={`pe-7s-users text-success`}/>
              </div>
            </div>
            <div className="col-xs-10">
              <div className="numbers">
                <p>Живое выступление&nbsp;{live && <i className="fa fa-circle text-danger Blink" />}</p>
                {live ?
                  <Button onClick={this.stopPerformance} bsStyle="danger">
                    Прекратить выступление
                  </Button>
                  :
                  <Button onClick={this.startPerformance} disabled={!coordinatesReceived} bsStyle="success">
                    Начать выступление
                  </Button>
                }
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <hr />
          <div className="stats">
            <i className="fa fa-refresh"/>
            &nbsp;
            {earned && <span>Заработано за текущее выступление: {earned}₽</span>}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    performance: state.performance,
    location: state.pub.currentUserLocation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentUserLocation: bindActionCreators(pubActions.getCurrentUserLocation, dispatch),
    startPerformance: bindActionCreators(performanceActions.startPerformance, dispatch),
    validatePerformance: bindActionCreators(performanceActions.validatePerformance, dispatch),
    stopPerformance: bindActionCreators(performanceActions.stopPerformance, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PerformanceCard);
