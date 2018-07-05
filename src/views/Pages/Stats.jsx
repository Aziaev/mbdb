import React, {Component} from "react"
import {Col, Grid, Row} from "react-bootstrap"
import StatsCard from "../../components/Card/StatsCard"
import dashboard from "../../constants/dashboard"
import connect from "react-redux/es/connect/connect"

class Stats extends Component {
  componentDidMount() {
    document.title = 'Статистика. Панель управления | Music Boom'
  }

  render() {
    const {user} = this.props;

    if (!user) return null;

    const {
      allDerivedMoney,
      allDonatedArtists,
      allEarnedMoney,
      currentBalance,
      statOfPerformance
    } = user;

    const {
      allPerformances,
      averagePerformanceTime,
      hoursOfMonth,
      moneyOfMonth
    } = statOfPerformance;


    let revenueIcon = dashboard.cards.revenue.icon;
    let eventsIcon = dashboard.cards.events.icon;
    let ratingIcon = dashboard.cards.rating.icon;
    let followersIcon = dashboard.cards.followers.icon;

/*
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
*/
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col md={6}>
              <StatsCard
                bigIcon={<i className={`${revenueIcon} text-success`}/>}
                statsText="Ваш текущий баланс"
                statsValue={`${currentBalance} ₽`}
              />
            </Col>
            <Col md={6}>

              <StatsCard
                bigIcon={<i className={`${revenueIcon} text-success`}/>}
                statsText="Заработано денег"
                statsValue={`${allEarnedMoney} ₽`}
              />
            </Col>

          </Row>
          <Row>
            <Col md={6}>
              <StatsCard
                bigIcon={<i className={`${revenueIcon} text-success`}/>}
                statsText="Выведено денег"
                statsValue={`${allDerivedMoney} ₽`}
              />
            </Col>
            <Col md={6}>
              <StatsCard
                bigIcon={<i className={`${followersIcon} text-success`}/>}
                statsText="Вы пожертвовали"
                statsValue={`${allDonatedArtists}`}
              />
            </Col>

          </Row>

          <Row>
            <Col md={6}>
              <StatsCard
                bigIcon={<i className={`${eventsIcon} text-success`}/>}
                statsText="Общее количество ваших выступлений"
                statsValue={`${allPerformances}`}
              />
            </Col>
            <Col md={6}>

              <StatsCard
                bigIcon={<i className={`${ratingIcon} text-success`}/>}
                statsText="Средняя длительность вашего выступления"
                statsValue={`${averagePerformanceTime} ч.`}
              />
            </Col>

          </Row>
          <Row>
            <Col md={6}>
              <StatsCard
                bigIcon={<i className={`${ratingIcon} text-success`}/>}
                statsText="Времени выступлений за месяц"
                statsValue={`${hoursOfMonth} ч`}
              />
            </Col>
            <Col md={6}>

              <StatsCard
                bigIcon={<i className={`${revenueIcon} text-success`}/>}
                statsText="Заработано вами за месяц"
                statsValue={`${moneyOfMonth} ₽`}
              />
            </Col>

          </Row>
          {/*<Row>*/}
          {/*<Col md={6}>*/}

          {/*<StatsCard*/}
          {/*bigIcon={<i className={`${revenueIcon} text-success`}/>}*/}
          {/*statsText="Всего заработано денег"*/}
          {/*statsValue={`${allDerivedMoney} ₽`}*/}
          {/*/>*/}
          {/**/}
          {/*<Card*/}
          {/*title='Статистика по пожертвованиям'*/}
          {/*category='2018 год'*/}
          {/*content={*/}
          {/*<div>*/}
          {/*<ChartistGraph*/}
          {/*data={getMonthsMoneyStat(mockPayments)}*/}
          {/*type='Bar'*/}
          {/*options={barChartOptions.options}*/}
          {/*responsiveOptions={barChartOptions.responsiveOptions}*/}
          {/*/>*/}
          {/*</div>*/}
          {/*}*/}
          {/*legend={*/}
          {/*<div>*/}
          {/*<span>*/}
          {/*<i className="fa fa-circle text-info"/> Сумма в месяц*/}
          {/*</span>*/}
          {/*</div>*/}
          {/*}*/}
          {/*/>*/}
          {/*</Col>*/}

          {/*<Col md={6}>*/}
          {/**/}
          {/*<Card*/}
          {/*title='Статистика по мероприятиям'*/}
          {/*category='2018 год'*/}
          {/*content={*/}
          {/*<div>*/}
          {/*<ChartistGraph*/}
          {/*data={getMonthsEventsStat(mockEvents)}*/}
          {/*type='Line'*/}
          {/*options={responsiveChartOptions.options}*/}
          {/*responsiveOptions={responsiveChartOptions.responsiveOptions}*/}
          {/*/>*/}
          {/*</div>*/}
          {/*}*/}
          {/*legend={*/}
          {/*<div>*/}
          {/*<span>*/}
          {/*<i className="fa fa-circle text-success"/> Количество мероприятий в месяц*/}
          {/*</span>*/}
          {/*</div>*/}
          {/*}*/}
          {/*/>*/}
          {/*</Col>*/}
          {/*</Row>*/}
        </Grid>
      </div>
    );
  }
}

const stateToProps = (state) => {
  return {
    user: state.dashboard.data && state.dashboard.data.user
  };
};

export default connect(stateToProps)(Stats);
