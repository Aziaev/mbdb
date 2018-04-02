import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { scaleLinear } from "d3-scale";
import Card from '../../components/Card/Card.jsx';
import StatsCard from '../../components/Card/StatsCard.jsx';
import {
  mapCenter,
  mockEvents,
  mockUsers
} from '../../variables/Variables.jsx';
import dashboard from "../../constants/dashboard";
import updateStatus from "../../constants/updateStatus";
import MapComponent from "../Components/MapComponent";
import { getLocale } from "../../helpers/index";

const colorScale = scaleLinear()
  .domain([0, 1, 6820])
  .range(["#E5E5E5", "#B2B2B2", "#000000"]);

let langCode = 0;

class Dashboard extends Component {
  createTableData() {
    let tableRows = [];
    for (let i = 0; i < mockEvents.length; i++) {
      tableRows.push(
        <tr key={i}>
          <td>
            <time dateTime={mockEvents[i].start.toISOString()}>
              <div>{mockEvents[i].start.toLocaleDateString(getLocale(langCode))}</div>
            </time>
          </td>
          <td>{mockEvents[i].title}</td>
          <td className="text-center">{mockEvents[i].donateCount}</td>
          <td className="text-right">{mockEvents[i].donateValue}₽</td>
        </tr>
      );
    }
    return tableRows;
  }

  componentDidMount() {
    document.title = 'Панель управления | Music Boom'
  }

  render() {
    let currentUser = mockUsers[0];
    let langCode = 0;
    let followersAmount = 75;
    let followersLabel = dashboard.cards.followers.label[langCode];
    let followersIcon = dashboard.cards.followers.icon;
    let ratingAmount = currentUser.countryRating;
    let ratingLabel = dashboard.cards.rating.label[langCode];
    let ratingIcon = dashboard.cards.rating.icon;
    let revenueAmount = currentUser.balance;
    let revenueLabel = dashboard.cards.revenue.label[langCode];
    let revenueIcon = dashboard.cards.revenue.icon;
    let eventsAmount = mockEvents.length;
    let eventsLabel = dashboard.cards.events.label[langCode];
    let eventsIcon = dashboard.cards.events.icon;
    let now = updateStatus.now.label[langCode];
    let nowIcon = updateStatus.now.icon;
    let lastHour = updateStatus.lastHour.label[langCode];
    let lastHourIcon = updateStatus.lastHour.icon;
    let lastDay = updateStatus.lastDay.label[langCode];
    let lastDayIcon = updateStatus.lastDay.icon;
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className={`${revenueIcon} text-success`}/>}
                statsText={revenueLabel}
                statsValue={`${revenueAmount}₽`}
                statsIcon={<i className={lastDayIcon}/>}
                statsIconText={lastDay}
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className={`${eventsIcon} text-warning`}/>}
                statsText={eventsLabel}
                statsValue={eventsAmount}
                statsIcon={<i className={nowIcon}/>}
                statsIconText={now}
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className={`${ratingIcon} text-danger`}/>}
                statsText={ratingLabel}
                statsValue={ratingAmount}
                statsIcon={<i className={lastHourIcon}/>}
                statsIconText={lastHour}
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className={`${followersIcon} text-info`} />}
                statsText={followersLabel}
                statsValue={`+${followersAmount}`}
                statsIcon={<i className={nowIcon}/>}
                statsIconText={now}
              />
            </Col>
          </Row>
          <Row>
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
                          {this.createTableData()}
                          </tbody>
                        </table>
                      </div>
                    </Col>
                    <Col md={6} mdOffset={1}>
                      <MapComponent
                      mapCenter={mapCenter}
                      markers={mockEvents}/>
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

export default Dashboard;
