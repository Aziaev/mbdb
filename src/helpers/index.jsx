let monthLabels = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

export const getLocale = (langCode) => {
  switch (langCode) {
    case 0:
      return 'ru-RU';
    default:
      return 'en-US';
  }
};

export const getMonthsMoneyStat = (payments) => {
  let data = {
    labels: monthLabels,
    series: []
  };
  let result = [];
  for (let i = 0; i < 12; i++) {
    let monthResult = 0;
    payments.map((payment) => {
      if (payment.date.getMonth() === i && payment.method === 'card') {
        monthResult = monthResult + payment.sum;
      }
    });
    result.push(monthResult);
  }
  data.series.push(result);
  return data;
};

export const getMonthsEventsStat = (events) => {
  let data = {
    labels: monthLabels,
    series: []
  };
  let result = [];
  for (let i = 0; i < 12; i++) {
    let monthResult = 0;
    events.map((payment) => {
      if (payment.start.getMonth() === i) {
        monthResult = monthResult + 1;
      }
    });
    result.push(monthResult);
  }
  data.series.push(result);
  return data;
};
