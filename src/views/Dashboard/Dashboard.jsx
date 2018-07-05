import React, {Component} from "react"
import {Col, Grid, Row} from "react-bootstrap"
import Card from "../../components/Card/Card.jsx"
import StatsCard from "../../components/Card/StatsCard.jsx"
import {mapCenter} from "../../variables/Variables.jsx"
import dashboard from "../../constants/dashboard"
import updateStatus from "../../constants/updateStatus"
import MapComponent from "../Components/MapComponent"
import {getLocale} from "../../helpers/index"
import {connect} from "react-redux"
import PerformanceCard from "../../components/Card/PerformanceCard"

let langCode = 0;

class Dashboard extends Component {
  createTableData(events) {
    let tableRows = [];
    for (let i = 0; i < events.length; i++) {
      tableRows.push(
        <tr key={i}>
          <td>
            <time dateTime={events[i].start.toISOString()}>
              <div>{events[i].start.toLocaleDateString(getLocale(langCode))}</div>
            </time>
          </td>
          <td>{events[i].title}</td>
          <td className="text-center">{events[i].donateCount}</td>
          <td className="text-right">{events[i].donateValue}₽</td>
        </tr>
      );
    }
    return tableRows;
  }

  componentDidMount() {
    document.title = 'Панель управления | Music Boom';
  }

  render() {
    const user = this.props.dashboard.data ? this.props.dashboard.data.user : null;
    const events = this.props.dashboard.data ? this.props.dashboard.data.events || [] : [];
    console.log('USER:', user);
    if (!user) {
      return null;
    }

    let langCode = 0;

    let revenueAmount = user.currentBalance;
    let revenueLabel = dashboard.cards.revenue.label[langCode];
    let revenueIcon = dashboard.cards.revenue.icon;

    let eventsAmount = user.statOfPerformance.allPerformances;
    let eventsLabel = dashboard.cards.events.label[langCode];
    let eventsIcon = dashboard.cards.events.icon;

    let now = updateStatus.now.label[langCode];
    let nowIcon = updateStatus.now.icon;

    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <PerformanceCard />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className={`${revenueIcon} text-success`}/>}
                statsText={revenueLabel}
                statsValue={`${revenueAmount}₽`}
                statsIcon={<i className={nowIcon}/>}
                statsIconText={now}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className={`${eventsIcon} text-warning`}/>}
                statsText={eventsLabel}
                statsValue={eventsAmount}
                statsIcon={<i className={nowIcon}/>}
                statsIconText={now}
              />
            </Col>
          </Row>
          <Row style={{display: 'none'}}>
            <Col md={12}>
              <Card
                title="История"
                category="Ваши прошедшие выступления"
                content={
                  <Row>
                    <Col md={5}>
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                          <tr>
                            <th>Дата</th>
                            <th>Название</th>
                            <th className='text-center'><i className='pe-7s-star' style={{paddingTop: '2px'}}/></th>
                            <th className="text-right">Сумма</th>
                          </tr>
                          </thead>
                          <tbody>
                          {this.createTableData(events)}
                          </tbody>
                        </table>
                      </div>
                    </Col>
                    <Col md={6} mdOffset={1}>
                      <MapComponent
                        mapCenter={mapCenter}
                        markers={events}/>
                    </Col>
                  </Row>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const stateToProps = (state) => {
  return {
    auth: state.auth,
    dashboard: state.dashboard,
    pub: state.pub
  };
};

export default connect(stateToProps)(Dashboard);
