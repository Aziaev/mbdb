let updateStatus = {
  now: {
    label: [
      'Обновлено сейчас',
      'Updated now'
    ],
    icon: 'fa fa-refresh'
  },
  lastHour: {
    label: [
      'Обновлено сегодня',
      'Updated today'
    ],
    icon: 'fa fa-clock-o'
  },
  lastDay: {
    label: [
      'Обновлено вчера',
      'Updated last day'
    ],
    icon: 'fa fa-calendar-o'
  },
  accepted: {
    label: [
      'Подтвержден',
      'Accepted'
    ],
    icon: 'fa fa-check',
    bsStyle: 'success'
  },
  open: {
    label: [
      'В обработке',
      'In progress'
    ],
    icon: 'fa fa-clock-o',
    bsStyle: 'info'
  },
  disputed: {
    label: [
      'Отклонен',
      'Disputed'
    ],
    icon: 'fa fa-remove',
    bsStyle: 'danger'
  }
};

export default updateStatus;
