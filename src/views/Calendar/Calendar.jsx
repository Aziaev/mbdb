import globalize from 'globalize'
import 'globalize/lib/cultures/globalize.culture.en-US';
import 'globalize/lib/cultures/globalize.culture.ru-RU';
import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import { Col, Grid, Row } from 'react-bootstrap';
import SweetAlert from 'react-bootstrap-sweetalert';
import Card from '../../components/Card/Card.jsx';
import calendar from "../../constants/calendar";
import { getLocale } from "../../helpers/index";
import { mockEvents } from '../../variables/Variables.jsx';

BigCalendar.setLocalizer(
  BigCalendar.globalizeLocalizer(globalize)
);

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: mockEvents,
      alert: null
    };
    this.hideAlert = this.hideAlert.bind(this);
  }

  selectedEvent(event) {
    alert(event.title);
  }

  addNewEventAlert(slotInfo) {
    this.setState({
      alert: (
        <SweetAlert
          input
          showCancel
          style={{ display: "block", marginTop: "-100px" }}
          title="addNewEventAlert"
          onConfirm={(e) => this.addNewEvent(e, slotInfo)}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="info"
          cancelBtnBsStyle="danger"
        />
      )
    });
  }

  componentDidMount() {
    document.title = 'Календарь. Панель управления | Music Boom'
  }

  addNewEvent(e, slotInfo) {
    var newEvents = this.state.events;
    newEvents.push({
      'title': e,
      'start': slotInfo.start,
      'end': slotInfo.end
    })
    this.setState({
      alert: (
        <SweetAlert
          input
          showCancel
          style={{ display: "block", marginTop: "-100px" }}
          title="addNewEvent"
          onConfirm={(e) => this.addNewEvent(e, slotInfo)}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="info"
          cancelBtnBsStyle="danger"
        />
      ),
      events: newEvents
    })
  }

  hideAlert() {
    this.setState({
      alert: null
    });
  }

  render() {
    let langCode = 0;
    return (
      <div className="main-content">
        {this.state.alert}
        <Grid fluid>
          <Row>
            <Col md={10} mdOffset={1}>
              <Card
                calendar
                content={
                  <BigCalendar
                    culture={getLocale(langCode)}
                    messages={calendar.messages}
                    selectable
                    events={this.state.events}
                    defaultView='month'
                    scrollToTime={new Date(1970, 1, 1, 6)}
                    defaultDate={new Date()}
                    onSelectEvent={event => this.selectedEvent(event)}
                    onSelectSlot={(slotInfo) => this.addNewEventAlert(slotInfo)}
                  />
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Calendar;
