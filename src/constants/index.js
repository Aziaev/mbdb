import calendar from './calendar'
import dashboard from './dashboard'
import updateStatus from "./updateStatus";
import withdraw from './withdraw'

export default {
  APP_NAME: 'MusicBoom',
  MAIN_URL: 'https://github.com/aziaev',
  MAIN_URL_TITLE: 'Artur Ziaev',
  MAIN_URL_label: ', made with love for a better web',
  DEFAULT_IMAGE_URL: 'https://adf-saratov.ru/media/404/profile.jpg',
  // Константы для богового меню. Label - надпись на кнопке. Код языка получает значение из массива лейблов для конкретной кнопки
  MENU: {
    dashboard: {
      label: [
        'Панель управления',
        'Dashboard'
      ],
      icon: "pe-7s-graph",
      id: 'dashboard'
    },
    profile: {
      label: [
        'Профиль',
        'User Profile'
      ],
      icon: 'pe-7s-user',
      id: 'profile',
    },
    editProfile: {
      label: [
        'Редактировать профиль',
        'Edit profile'
      ],
      icon: 'pe-7s-user',
      id: 'edit'
    },
    settings: {
      label: [
        'Настройки',
        'Settings'
      ],
      icon: 'pe-7s-config',
      id: 'settings'
    },
    stats: {
      label: [
        'Статистика',
        'Stats'
      ],
      icon: "pe-7s-graph1",
      id: 'stats'
    },
    payments: {
      label: [
        'Платежи',
        'Payments'
      ],
      icon: "pe-7s-piggy",
      id: 'payments'
    },
    users: {
      label: [
        'Пользователи',
        'Users'
      ],
      icon: 'pe-7s-users',
      id: 'users'
    },
    calendar: {
      label: [
        'Календарь',
        'Calendar'
      ],
      icon: "pe-7s-date",
      id: 'calendar'
    },
    donate: {
      label: [
        'Страница доната',
        'My donate page'
      ],
      icon: 'pe-7s-star',
      id: 'donate'
    },
    notifications: {
      label: [
        'Уведомления',
        'Notifications'
      ],
      icon: 'pe-7s-chat',
      id: 'notifications'
    },
    admin: {
      label: [
        'Администрирование',
        'Administration'
      ],
      icon: "pe-7s-look",
      id: 'admin'
    },
    help: {
      label: [
        'Помощь',
        'Help'
      ],
      icon: 'pe-7s-help1',
      id: 'help'
    },
    login: {
      label: [
        'Вход',
        'Login'
      ],
      icon: 'fa fa-drivers-license-o',
      id: 'login'
    },
    register: {
      label: [
        'Регистрация',
        'Register'
      ],
      icon: 'fa fa-user-circle-o',
      id: 'register'
    },
    getapp: {
      label: [
        'Скачать приложуху',
        'Get app'
      ],
      id: 'getapp'
    },
  },
  PROFILE: {
    genre: {
      label: [
        'Жанр',
        'Genre'
      ],
      error: [
        'Укажите ваш жанр',
        'Add your genre'
      ],
      id: 'genre'
    },
    pageTitle: {
      label: [
        'Редактирование профиля',
        'Edit profile'
      ],
      id: 'pageTitle'
    },
    pageDescription: {
      label: [
        'Убедитесь, что все поля заполнены',
        'Complete your profile'
      ],
      id: 'pageDescription'
    },
    nickname: {
      label: [
        'Псевдоним',
        'Nickname'
      ],
      id: 'nickname'
    },
    email: {
      label: [
        'Электропочта',
        'Email'
      ],
      id: 'email'
    },
    firstName: {
      label: [
        'Имя',
        'First name'
      ],
      id: 'firstName'
    },
    lastName: {
      label: [
        'Фамилия',
        'Last Name'
      ],
      id: 'lastName'
    },
    city: {
      label: [
        'Город',
        'City'
      ],
      id: 'city'
    },
    country: {
      label: [
        'Страна',
        'Country'
      ],
      id: 'country'
    },
    bio: {
      label: [
        'Обо мне',
        'About me'
      ],
      error: [
        'Профиль не полностью заполнен',
        'Your profile is not completed'
      ],
      id: 'bio'
    },
    language: {
      label: [
        'Язык',
        'Language'
      ],
      id: 'language'
    },
    image: {
      label: [
        'Ссылка на изображение',
        'Image url'
      ],
      id: 'image'
    },
    updateButton: {
      label: [
        'Отправить',
        'Update profile'
      ],
      id: 'updateButton'
    },
  },
  DONATE_PAGE: {
    title: {
      label: [
        'На этой странице вы можете поддержать артиста перечислив ему любую желаемую сумму',
        'On this page you can make a donation to support this artist'
      ],
      id: 'donate_page_title'
    },
    proceedPayment: {
      label: [
        '* Вы будете перенаправлены на страницу Яндекс.Касса',
        '* You will be redirected to Yandex payment service'
      ]
    },
    proceedButton: {
      label: [
        'Перевести',
        'Pay'
      ]
    },
    paymentTypeSelecting: {
      label: [
        'Метод оплаты',
        'Payment method'
      ],
      placeholder: [
        'Введите...',
        'Enter amount'
      ]
    },
    description: {
      label: [
        'Пожертвование для артиста. Получатель ',
        'Пожертвование для артиста. Получатель '
      ],
    },
    paymentTypes: [
      {
        name: 'card',
        code: 'AC',
        title: [
          'Банковская карта без комиссии',
          'Pay with CC no fees'
        ],
      }
    ],
    donationAmount: {
      label: [
        'Сумма перевода, ₽',
        'Donation amount, ₽'
      ],
      id: 'donate_page_title'
    },
    img: {
      logo: '/img/yapaylogo.png'
    }
  },
  PROMO_DESCRIPTION: {
    title: [
      'Мы создаем платформу для уличных артистов и их зрителей',
      'Street musicians entrepreneur service. Find your favorite artist on map'
    ]
  },
  PROMO_ENDING: {
    text: ['И это только начало...']
  },
  PROMO_MEDIA_01: {
    title: ['Наша платформа наполнит город музыкой и интересными шоу'],
    text: ['Уличные артисты, шоумены, музыканты с помощью нашей платформы обретут возможность собрать публику и смогут' +
    ' развивать себя и свой талант. Тысячи прохожих и ценителей музыки смогут без проблем найти интересные выступления' +
    ' на карте города и насладиться уличными шоу, а так же отблагодарить понравившихся артистов с помощью нескольких н' +
    'ажатий на смартфоне'],
    icon: 'pe-7s-rocket'
  },
  PROMO_MEDIA_02: {
    title: ['Все классные выступления на карте города'],
    text: ['Мы создаем платформу, которая позволит наполнить город музыкой и интересными шоу. Тысячи артистов с помощь' +
    'ю нашей платформы получат возможность создавать выступления в интересных местах города, а зрители смогут быстро и' +
    'х найти и узнать время выступлений и подписаться на любимого артиста.'],
    icon: 'pe-7s-map-2'
  },
  PROMO_MEDIA_03: {
    title: ['Уличные артисты смогут легко заработать на своих выступлениях'],
    text: ['У нас удобная система пожертвований для артистов. Зрители могут отблагодарить артистов с помощью нескольки' +
    'х нажатий на смартфоне, переведя деньги в кошелек артиста прямо со своей карты'],
    icon: 'pe-7s-cash'
  },
  PROMO_MEDIA_04: {
    title: ['У нас живые трансляции уличных выступлений'],
    text: ['Это следующий уровень уличных шоу! Мы дадим возможность артистам заявить о себе из любой точки мира, где е' +
    'cть интернет. Вы сможете выступать прямо у себя дома, в студии, и тысячи зрителей увидят вас. Ну а поклонники смо' +
    'гут смотреть живые и качественные выступления прямо с экранов своих телефонов и планшетов.'],
    icon: 'pe-7s-video'
  },
  PAYMENT_CONSTANTS: {
    paymentTypes: [
      {
        title: [
          'Банковская карта',
          'Bank card'
        ],
      },
      {
        title: [
          'Вывод средств на карту ',
          'Withdraw to '
        ]
      }
    ],
  },
  dashboard,
  updateStatus,
  calendar,
}
