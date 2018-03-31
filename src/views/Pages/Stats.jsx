import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import ChartistGraph from 'react-chartist';
import Card from '../../components/Card/Card.jsx';
import { getMonthsMoneyStat } from "../../helpers";
import { getMonthsEventsStat } from "../../helpers/index";
import { mockEvents, mockPayments } from "../../variables/Variables";

class Stats extends Component {
  render() {
    let barChartOptions = {
      options: {
        height: '245px',
        seriesBarDistance: 10,
        classNames: {
          bar: 'ct-bar ct-azure'
        },
        axisX: {
          showGrid: false
        }
      },
      responsiveOptions: [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ]
    };

    let responsiveChartOptions = {
      options: {
        // low: 0,
        // high: 1000,
        showArea: false,
        height: '245px',
        axisX: {
          showGrid: true,
        },
        lineSmooth: true,
        showLine: true,
        showPoint: true,
        classNames: {
          point: 'ct-point ct-green',
          line: 'ct-line ct-green'
        },
        chartPadding: {
          right: 10
        }
      },
      responsiveOptions: [
        ['screen and (max-width: 640px)', {
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ]
    };

    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col md={6}>
              <Card
                title='Статистика по пожертвованиям'
                category='2018 год'
                content={
                  <div>
                    <ChartistGraph
                      data={getMonthsMoneyStat(mockPayments)}
                      type='Bar'
                      options={barChartOptions.options}
                      responsiveOptions={barChartOptions.responsiveOptions}
                    />
                  </div>
                }
                legend={
                  <div>
                    <span>
                      <i className="fa fa-circle text-info"/> Сумма в месяц
                    </span>
                  </div>
                }
              />
            </Col>

            <Col md={6}>
              <Card
                title='Статистика по мероприятиям'
                category='2018 год'
                content={
                  <div>
                    <ChartistGraph
                      data={getMonthsEventsStat(mockEvents)}
                      type='Line'
                      options={responsiveChartOptions.options}
                      responsiveOptions={responsiveChartOptions.responsiveOptions}
                    />
                  </div>
                }
                legend={
                  <div>
                    <span>
                      <i className="fa fa-circle text-success"/> Количество мероприятий в месяц
                    </span>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Stats;
