let goergian = require("../assets/img/artists/goergian.jpg");
let goergian_avatar = require("../assets/img/artists/goergian_avatar.jpg");
let guitarist = require("../assets/img/artists/guitarist.jpg");
let guitarists = require("../assets/img/artists/guitarists.jpg");
let guitarist_avatar = require("../assets/img/artists/guitarist_avatar.jpg");

//
// //
// // // For ExtendedForms view Select
// //
//

var selectOptions = [
  { value: 'id', label: 'Bahasa Indonesia' },
  { value: 'ms', label: 'Bahasa Melayu' },
  { value: 'ca', label: 'Català' },
  { value: 'da', label: 'Dansk' },
  { value: 'de', label: 'Deutsch' },
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Español' },
  { value: 'el', label: 'Eλληνικά' },
  { value: 'fr', label: 'Français' },
  { value: 'it', label: 'Italiano' },
  { value: 'hu', label: 'Magyar' },
  { value: 'nl', label: 'Nederlands' },
  { value: 'no', label: 'Norsk' },
  { value: 'pl', label: 'Polski' },
  { value: 'pt', label: 'Português' },
  { value: 'fi', label: 'Suomi' },
  { value: 'sv', label: 'Svenska' },
  { value: 'tr', label: 'Türkçe' },
  { value: 'is', label: 'Íslenska' },
  { value: 'cs', label: 'Čeština' },
  { value: 'ru', label: 'Русский' },
  { value: 'th', label: 'ภาษาไทย' },
  { value: 'zh', label: '中文 (简体)' },
  { value: 'zh-TW', label: '中文 (繁體)' },
  { value: 'ja', label: '日本語' },
  { value: 'ko', label: '한국어' }
];

var selectStatus = [
  { value: 'ACCEPTED', label: 'Отправлено' },
  { value: 'DISPUTED', label: 'Отказано' }
];

//
// //
// // // For Calendar view events
// //
//
let today = new Date();
let y = today.getFullYear();
let m = today.getMonth();
let d = today.getDate();

let maxValue = 100000;
let maxSum = 100000;

//App data
let musicBoomId = 1;

const events = [
  {
    'title': 'All Day Event',
    'allDay': true,
    'start': new Date(y, m, 0),
    'end': new Date(y, m, 1)
  },
  {
    'title': 'Long Event',
    'start': new Date(y, m, 7),
    'end': new Date(y, m, 10)
  },

  {
    'title': 'DTS STARTS',
    'start': new Date(y, m, 13),
    'end': new Date(y, m, 20)
  },

  {
    'title': 'Some Event',
    'start': new Date(y, m, 9),
    'end': new Date(y, m, 9)
  },
  {
    'title': 'Conference',
    'start': new Date(y, m, 11),
    'end': new Date(y, m, 13),
    desc: 'Big conference for important people'
  },
  {
    'title': 'Meeting',
    'start': new Date(y, m + 1, d, 7, 0, 0),
    'end': new Date(y, m + 1, d, 10, 30, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting'
  }
];

//
// //
// // // For vector map row in Dashboard view
// //
//

const us_flag = require("../assets/img/flags/US.png");
const de_flag = require("../assets/img/flags/DE.png");
const au_flag = require("../assets/img/flags/AU.png");
const gb_flag = require("../assets/img/flags/GB.png");
const ro_flag = require("../assets/img/flags/RO.png");
const br_flag = require("../assets/img/flags/BR.png");

const table_data = [
  { "flag": us_flag, "country": "USA", "count": "2.920", "percentage": "53.23%" },
  { "flag": de_flag, "country": "Germany", "count": "1.300", "percentage": "20.43%" },
  { "flag": au_flag, "country": "Australia", "count": "760", "percentage": "10.35%" },
  { "flag": gb_flag, "country": "United Kingdom", "count": "690", "percentage": "7.87%" },
  { "flag": ro_flag, "country": "Romania", "count": "600", "percentage": "5.94%" },
  { "flag": br_flag, "country": "Brasil", "count": "550", "percentage": "4.34%" }
];


//
// //
// // // For notifications
// //
//
var defaultWidth = window.screen.width > 768 ? window.screen.width * 1 / 3 : window.screen.width;

var style = {
  Wrapper: {},
  Containers: {
    DefaultStyle: {
      position: 'fixed',
      width: defaultWidth,
      padding: '10px 10px 10px 20px',
      zIndex: 9998,
      WebkitBoxSizing: '',
      MozBoxSizing: '',
      boxSizing: '',
      height: 'auto',
      display: 'inline-block',
      border: '0',
      fontSize: '14px',
      WebkitFontSmoothing: "antialiased",
      fontFamily: '"Roboto","Helvetica Neue",Arial,sans-serif',
      fontWeight: '400',
      color: '#FFFFFF'

    },

    tl: {
      top: '0px',
      bottom: 'auto',
      left: '0px',
      right: 'auto'
    },

    tr: {
      top: '0px',
      bottom: 'auto',
      left: 'auto',
      right: '0px'
    },

    tc: {
      top: '0px',
      bottom: 'auto',
      margin: '0 auto',
      left: '50%',
      marginLeft: -(defaultWidth / 2)
    },

    bl: {
      top: 'auto',
      bottom: '0px',
      left: '0px',
      right: 'auto'
    },

    br: {
      top: 'auto',
      bottom: '0px',
      left: 'auto',
      right: '0px'
    },

    bc: {
      top: 'auto',
      bottom: '0px',
      margin: '0 auto',
      left: '50%',
      marginLeft: -(defaultWidth / 2)
    }

  },

  NotificationItem: {
    DefaultStyle: {
      position: 'relative',
      width: '100%',
      cursor: 'pointer',
      borderRadius: '4px',
      fontSize: '14px',
      margin: '10px 0 0',
      padding: '10px',
      display: 'block',
      WebkitBoxSizing: 'border-box',
      MozBoxSizing: 'border-box',
      boxSizing: 'border-box',
      opacity: 0,
      transition: 'all 0.5s ease-in-out',
      WebkitTransform: 'translate3d(0, 0, 0)',
      transform: 'translate3d(0, 0, 0)',
      willChange: 'transform, opacity',

      isHidden: {
        opacity: 0
      },

      isVisible: {
        opacity: 1
      }
    },

    success: {
      borderTop: 0,
      backgroundColor: '#a1e82c',
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0
    },

    error: {
      borderTop: 0,
      backgroundColor: '#fc727a',
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0
    },

    warning: {
      borderTop: 0,
      backgroundColor: '#ffbc67',
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0
    },

    info: {
      borderTop: 0,
      backgroundColor: '#63d8f1',
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0
    }
  },

  Title: {
    DefaultStyle: {
      fontSize: '30px',
      margin: '0',
      padding: 0,
      fontWeight: 'bold',
      color: '#FFFFFF',
      display: 'block',
      left: '15px',
      position: 'absolute',
      top: '50%',
      marginTop: '-15px'
    }

  },

  MessageWrapper: {
    DefaultStyle: {
      marginLeft: '55px',
      marginRight: '30px',
      padding: '0 12px 0 0',
      color: '#FFFFFF',
      maxWidthwidth: '89%'
    }
  },

  Dismiss: {
    DefaultStyle: {
      fontFamily: 'inherit',
      fontSize: '21px',
      color: '#000',
      float: 'right',
      position: 'absolute',
      right: '10px',
      top: '50%',
      marginTop: '-13px',
      backgroundColor: '#FFFFFF',
      display: 'block',
      borderRadius: '50%',
      opacity: '.4',
      lineHeight: '11px',
      width: '25px',
      height: '25px',
      outline: '0 !important',
      textAlign: 'center',
      padding: '6px 3px 3px 3px',
      fontWeight: '300',
      marginLeft: '65px'
    },

    success: {
      // color: '#f0f5ea',
      // backgroundColor: '#a1e82c'
    },

    error: {
      // color: '#f4e9e9',
      // backgroundColor: '#fc727a'
    },

    warning: {
      // color: '#f9f6f0',
      // backgroundColor: '#ffbc67'
    },

    info: {
      // color: '#e8f0f4',
      // backgroundColor: '#63d8f1'
    }
  },

  Action: {
    DefaultStyle: {
      background: '#ffffff',
      borderRadius: '2px',
      padding: '6px 20px',
      fontWeight: 'bold',
      margin: '10px 0 0 0',
      border: 0
    },

    success: {
      backgroundColor: '#a1e82c',
      color: '#ffffff'
    },

    error: {
      backgroundColor: '#fc727a',
      color: '#ffffff'
    },

    warning: {
      backgroundColor: '#ffbc67',
      color: '#ffffff'
    },

    info: {
      backgroundColor: '#63d8f1',
      color: '#ffffff'
    }
  },

  ActionWrapper: {
    DefaultStyle: {
      margin: 0,
      padding: 0
    }
  }
}

//
// //
// // // For tables
// //
//
const thArray = ["ID", "Name", "Salary", "Country", "City"];
const tdArray = [
  ["Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
  ["Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
  ["Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
  ["Philip Chaney", "$38,735", "Korea, South", "Overland Park"],
  ["Doris Greene", "$63,542", "Malawi", "Feldkirchen in Kärnten"],
  ["Mason Porter", "$78,615", "Chile", "Gloucester"],
  ["Mike Chaney", "$38,735", "Romania", "Bucharest"]
];


//
// //
// // // For icons
// //
//
const iconsArray = [
  "pe-7s-album",
  "pe-7s-arc",
  "pe-7s-back-2",
  "pe-7s-bandaid",
  "pe-7s-car",
  "pe-7s-diamond",
  "pe-7s-door-lock",
  "pe-7s-eyedropper",
  "pe-7s-female",
  "pe-7s-gym",
  "pe-7s-hammer",
  "pe-7s-headphones",
  "pe-7s-helm",
  "pe-7s-hourglass",
  "pe-7s-leaf",
  "pe-7s-magic-wand",
  "pe-7s-male",
  "pe-7s-map-2",
  "pe-7s-next-2",
  "pe-7s-paint-bucket",
  "pe-7s-pendrive",
  "pe-7s-photo",
  "pe-7s-piggy",
  "pe-7s-plugin",
  "pe-7s-refresh-2",
  "pe-7s-rocket",
  "pe-7s-settings",
  "pe-7s-shield",
  "pe-7s-smile",
  "pe-7s-usb",
  "pe-7s-vector",
  "pe-7s-wine",
  "pe-7s-cloud-upload",
  "pe-7s-cash",
  "pe-7s-close",
  "pe-7s-bluetooth",
  "pe-7s-cloud-download",
  "pe-7s-way",
  "pe-7s-close-circle",
  "pe-7s-id",
  "pe-7s-angle-up",
  "pe-7s-wristwatch",
  "pe-7s-angle-up-circle",
  "pe-7s-world",
  "pe-7s-angle-right",
  "pe-7s-volume",
  "pe-7s-angle-right-circle",
  "pe-7s-users",
  "pe-7s-angle-left",
  "pe-7s-user-female",
  "pe-7s-angle-left-circle",
  "pe-7s-up-arrow",
  "pe-7s-angle-down",
  "pe-7s-switch",
  "pe-7s-angle-down-circle",
  "pe-7s-scissors",
  "pe-7s-wallet",
  "pe-7s-safe",
  "pe-7s-volume2",
  "pe-7s-volume1",
  "pe-7s-voicemail",
  "pe-7s-video",
  "pe-7s-user",
  "pe-7s-upload",
  "pe-7s-unlock",
  "pe-7s-umbrella",
  "pe-7s-trash",
  "pe-7s-tools",
  "pe-7s-timer",
  "pe-7s-ticket",
  "pe-7s-target",
  "pe-7s-sun",
  "pe-7s-study",
  "pe-7s-stopwatch",
  "pe-7s-star",
  "pe-7s-speaker",
  "pe-7s-signal",
  "pe-7s-shuffle",
  "pe-7s-shopbag",
  "pe-7s-share",
  "pe-7s-server",
  "pe-7s-search",
  "pe-7s-film",
  "pe-7s-science",
  "pe-7s-disk",
  "pe-7s-ribbon",
  "pe-7s-repeat",
  "pe-7s-refresh",
  "pe-7s-add-user",
  "pe-7s-refresh-cloud",
  "pe-7s-paperclip",
  "pe-7s-radio",
  "pe-7s-note2",
  "pe-7s-print",
  "pe-7s-network",
  "pe-7s-prev",
  "pe-7s-mute",
  "pe-7s-power",
  "pe-7s-medal",
  "pe-7s-portfolio",
  "pe-7s-like2",
  "pe-7s-plus",
  "pe-7s-left-arrow",
  "pe-7s-play",
  "pe-7s-key",
  "pe-7s-plane",
  "pe-7s-joy",
  "pe-7s-photo-gallery",
  "pe-7s-pin",
  "pe-7s-phone",
  "pe-7s-plug",
  "pe-7s-pen",
  "pe-7s-right-arrow",
  "pe-7s-paper-plane",
  "pe-7s-delete-user",
  "pe-7s-paint",
  "pe-7s-bottom-arrow",
  "pe-7s-notebook",
  "pe-7s-note",
  "pe-7s-next",
  "pe-7s-news-paper",
  "pe-7s-musiclist",
  "pe-7s-music",
  "pe-7s-mouse",
  "pe-7s-more",
  "pe-7s-moon",
  "pe-7s-monitor",
  "pe-7s-micro",
  "pe-7s-menu",
  "pe-7s-map",
  "pe-7s-map-marker",
  "pe-7s-mail",
  "pe-7s-mail-open",
  "pe-7s-mail-open-file",
  "pe-7s-magnet",
  "pe-7s-loop",
  "pe-7s-look",
  "pe-7s-lock",
  "pe-7s-lintern",
  "pe-7s-link",
  "pe-7s-like",
  "pe-7s-light",
  "pe-7s-less",
  "pe-7s-keypad",
  "pe-7s-junk",
  "pe-7s-info",
  "pe-7s-home",
  "pe-7s-help2",
  "pe-7s-help1",
  "pe-7s-graph3",
  "pe-7s-graph2",
  "pe-7s-graph1",
  "pe-7s-graph",
  "pe-7s-global",
  "pe-7s-gleam",
  "pe-7s-glasses",
  "pe-7s-gift",
  "pe-7s-folder",
  "pe-7s-flag",
  "pe-7s-filter",
  "pe-7s-file",
  "pe-7s-expand1",
  "pe-7s-exapnd2",
  "pe-7s-edit",
  "pe-7s-drop",
  "pe-7s-drawer",
  "pe-7s-download",
  "pe-7s-display2",
  "pe-7s-display1",
  "pe-7s-diskette",
  "pe-7s-date",
  "pe-7s-cup",
  "pe-7s-culture",
  "pe-7s-crop",
  "pe-7s-credit",
  "pe-7s-copy-file",
  "pe-7s-config",
  "pe-7s-compass",
  "pe-7s-comment",
  "pe-7s-coffee",
  "pe-7s-cloud",
  "pe-7s-clock",
  "pe-7s-check",
  "pe-7s-chat",
  "pe-7s-cart",
  "pe-7s-camera",
  "pe-7s-call",
  "pe-7s-calculator",
  "pe-7s-browser",
  "pe-7s-box2",
  "pe-7s-box1",
  "pe-7s-bookmarks",
  "pe-7s-bicycle",
  "pe-7s-bell",
  "pe-7s-battery",
  "pe-7s-ball",
  "pe-7s-back",
  "pe-7s-attention",
  "pe-7s-anchor",
  "pe-7s-albums",
  "pe-7s-alarm",
  "pe-7s-airplay"
];

//
// //
// // // // For dashboard's charts
// //
//
// Data for Pie Chart
var dataPie = {
  labels: ['40%', '20%', '40%'],
  series: [40, 20, 40]
};

// Data for Line Chart
var dataSales = {
  labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
  series: [
    [287, 385, 490, 492, 554, 586, 698, 695],
    [67, 152, 143, 240, 287, 335, 435, 437],
    [23, 113, 67, 108, 190, 239, 307, 308]
  ]
};
var optionsSales = {
  low: 0,
  high: 800,
  showArea: false,
  height: "245px",
  axisX: {
    showGrid: false,
  },
  lineSmooth: true,
  showLine: true,
  showPoint: true,
  fullWidth: true,
  chartPadding: {
    right: 50
  }
};
var responsiveSales = [
  ['screen and (max-width: 640px)', {
    axisX: {
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  }]
];

// Data for Bar Chart
var dataBar = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  series: [
    [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
    [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
  ]
};
var optionsBar = {
  seriesBarDistance: 10,
  axisX: {
    showGrid: false
  },
  height: "245px"
};
var responsiveBar = [
  ['screen and (max-width: 640px)', {
    seriesBarDistance: 5,
    axisX: {
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  }]
];

// Constants
let mapCenter = {
  lat: 55.795422,
  lng: 49.115869
};

// Mock data
let mockEvents = [
  {
    id: '1',
    title: 'Виктор Гитаристов',
    desc: 'Музыкант прославившийся на всю галактику своей виртуозной игрой на гитаре. Когда он играет женщины' +
    ' плачут а девочки смеются',
    location: {
      lat: 55.798755,
      lng: 49.110909
    },
    donateValue: '4670',
    donateCount: '15',
    allDay: true,
    start: new Date(y, m, d, 11),
    end: new Date(y, m, d, 14)
  },
  {
    id: '2',
    title: 'Жонглёр Миша на улице',
    desc: 'Чудесный эквилибрист, жонглер устраивает супер шоу с жонглированием разными предметами. ' +
    'Не стесняйтесь, передавайте ему для жонглирования свои дорогие iPhone. Все будет хорошо',
    location: {
      lat: 55.813332,
      lng: 49.107059
    },
    donateValue: '2200',
    donateCount: '25',
    start: new Date(y, m, 7),
    end: new Date(y, m, 7)
  },
  {
    id: '3',
    title: 'Мим команда "BUG-MAKERS"',
    description: 'Самое смешное мим шоу от команды профессиональных клоунов. Они не пьяные, поэтому наливайте',
    location: {
      lat: 55.802629,
      lng: 49.112215
    },
    donateValue: '890',
    donateCount: '7',
    start: new Date(y, m, 13),
    end: new Date(y, m, 13)
  },
  {
    id: '4',
    title: 'Музыка, игра на саксофоне',
    desc: 'Этот саксофонист знаменит на весь мир как баянист, но по выходным дням он достает из широких штанин' +
    ' и все ему кричат "Гражданин!"',
    location: {
      lat: 55.789197,
      lng: 49.120746
    },
    donateValue: '530',
    donateCount: '5',
    start: new Date(y, m, 9),
    end: new Date(y, m, 9)
  },
  {
    id: '5',
    title: 'Выступление виолончелиста',
    desc: 'Приставив скрипку к подбородку, скрипач ноктюрн играет нам, слегка качаясь, будто в лодке, ' +
    'плывущей в море по волнам',
    location: {
      lat: 55.787671,
      lng: 49.121100
    },
    donateValue: '3690',
    donateCount: '20',
    start: new Date(y, m, 11),
    end: new Date(y, m, 11)
  },
  {
    id: '6',
    title: 'Выступление скрипача на улице',
    desc: 'Великолепное шоу скрипача',
    location: {
      lat: 55.778796,
      lng: 49.133685,
    },
    donateValue: '4650',
    donateCount: '25',
    start: new Date(y, m + 1, d, 7, 0, 0),
    end: new Date(y, m + 1, d, 10, 30, 0)
  },
  {
    id: '7',
    title: 'Чтение стихотворения',
    desc: 'Выступающий прочел пару страниц из своего репертуара',
    location: {
      lat: 55.773510,
      lng: 49.140987
    },
    donateValue: '1390',
    donateCount: '8',
    start: new Date(y, m - 1, d, 7, 0, 0),
    end: new Date(y, m - 1, d, 10, 30, 0)
  }
];
let mockUsers = [
  {
    sessionId: "7ddelgn54hs2jdf85nhls83htnmdjw75h",
    userType: "artist",
    id: "847384050838393",
    name: "Виктор",
    surname: "Гитаристов",
    patronymic: "",
    birthday: "25.12.1999",
    nickname: "Lil Peep",
    country: "Россия",
    city: "Казань",
    phoneNumber: "+79024519832",
    email: "lillypippy@gmail.com",
    creativity: "музыкант",
    instrument: "Гитара",
    genre: "музыка, игра на гитаре",
    aboutMe: "Музыкант прославившийся на всю галактику своей виртуозной игрой на гитаре. Когда он играет женщины плачут а девочки смеются",
    vk: "none",
    tlg: "none",
    wapp: "+79024519832",
    isOrdered: "true",
    isActive: 'true',
    reg_date: "15.02.2018",
    cityRating: "10,5",
    countryRating: "10,5",
    isLinkedCard: "true",
    avatar: guitarist_avatar,
    photos: [
      guitarist,
      guitarists
    ],
    cardNumber: '5213 **** **** 7751',
    balance: Math.floor(Math.random() * 10000) * 10,
  },
  {
    sessionId: "9834nd73hf73hfuf73h5du",
    userType: "artist",
    id: "47295837",
    name: "Константин",
    surname: "Перпендикуляров",
    patronymic: "",
    birthday: "31.03.1990",
    nickname: "Mishka",
    country: "Россия",
    city: "Чебоксары",
    phoneNumber: "+79173961238",
    email: "dude@yandex.ru",
    creativity: "музыкант",
    instrument: "Труба",
    genre: "Музыка",
    aboutMe: "Музыкант до рассвета пелмне песенку эту",
    vk: "",
    tlg: "",
    wapp: "+79173961238",
    isOrdered: "true",
    isActive: 'true',
    reg_date: "01.12.2017",
    cityRating: "7",
    countryRating: "4",
    isLinkedCard: "boolean",
    avatar: goergian,
    photos: [
      goergian_avatar
    ],
    cardNumber: '4279 **** **** 5832',
    balance: Math.floor(Math.random() * 10000) * 10,
  }
];
let mockPayments = [
  {
    id: Math.random() * (maxValue),
    sender_id: '',
    recipient_id: mockUsers[0].id,
    transaction_id: Math.random() * (maxValue),
    sum: Math.floor(Math.random() * (maxSum)) / 100,
    date: new Date(y, m + 1, d, 10, 30, 0),
    method: 'card',
    status: 'ACCEPTED'
  },
  {
    id: Math.random() * (maxValue),
    sender_id: '',
    recipient_id: mockUsers[0].id,
    transaction_id: Math.random() * (maxValue),
    sum: Math.floor(Math.random() * (maxSum)) / 100,
    date: new Date(y, m - 1, d - 2, 11, 30, 20),
    method: 'card',
    status: 'ACCEPTED'
  },
  {
    id: Math.random() * (maxValue),
    sender_id: '',
    recipient_id: mockUsers[0].id,
    transaction_id: Math.random() * (maxValue),
    sum: Math.floor(Math.random() * (maxSum)) / 100,
    date: new Date(y, m - 1, d - 1, 10, 24),
    method: 'card',
    status: 'ACCEPTED'
  },
  {
    id: Math.random() * (maxValue),
    sender_id: '',
    recipient_id: mockUsers[0].id,
    transaction_id: Math.random() * (maxValue),
    sum: Math.floor(Math.random() * (maxSum)) / 100,
    date: new Date(y, m, d - 4, 10, 24),
    method: 'card',
    status: 'ACCEPTED'
  },
  {
    id: Math.random() * (maxValue),
    sender_id: '',
    recipient_id: mockUsers[0].id,
    transaction_id: Math.random() * (maxValue),
    sum: Math.floor(Math.random() * (maxSum)) / 100,
    date: new Date(y, m, 0, 12, 15),
    method: 'card',
    status: 'ACCEPTED'
  },
  {
    id: Math.random() * (maxValue),
    sender_id: '',
    recipient_id: mockUsers[0].id,
    transaction_id: Math.random() * (maxValue),
    sum: Math.floor(Math.random() * (maxSum)) / 100,
    date: new Date(y, m, 0, 20, 50),
    method: 'card',
    status: 'ACCEPTED'
  },
  {
    id: Math.random() * (maxValue),
    sender_id: '',
    recipient_id: mockUsers[0].id,
    transaction_id: Math.random() * (maxValue),
    sum: Math.floor(Math.random() * (maxSum)) / 100,
    date: new Date(y, m, d, 15, 40),
    method: 'card',
    status: 'ACCEPTED'
  },
  {
    id: Math.random() * (maxValue),
    sender_id: '',
    recipient_id: mockUsers[0].id,
    transaction_id: Math.random() * (maxValue),
    sum: Math.floor(Math.random() * (maxSum)) / 100,
    date: new Date(y, m, d - 5, 10, 48),
    method: 'card',
    status: 'ACCEPTED'
  },
  {
    id: Math.random() * (maxValue),
    sender_id: '',
    recipient_id: mockUsers[0].id,
    transaction_id: Math.random() * (maxValue),
    sum: Math.floor(Math.random() * (maxSum)) / 100,
    date: new Date(y, m, d - 3, 18, 34),
    method: 'card',
    status: 'ACCEPTED'
  },
  {
    id: Math.random() * (maxValue),
    sender_id: '',
    recipient_id: mockUsers[0].id,
    transaction_id: Math.random() * (maxValue),
    sum: Math.floor(Math.random() * (maxSum)) / 100,
    date: new Date(y, m, d - 4, 12, 15),
    method: 'card',
    status: 'ACCEPTED'
  },
  {
    id: Math.random() * (maxValue),
    sender_id: '',
    recipient_id: mockUsers[0].id,
    transaction_id: Math.random() * (maxValue),
    sum: Math.floor(Math.random() * (maxSum)) / 100,
    date: new Date(y, m, d - 1, 19, 45),
    method: 'card',
    status: 'ACCEPTED'
  },
  {
    id: Math.random() * (maxValue),
    sender_id: '',
    recipient_id: mockUsers[0].id,
    transaction_id: Math.random() * (maxValue),
    sum: Math.floor(Math.random() * (maxSum)) / 100,
    date: new Date(y, m, d, 10),
    method: 'card',
    status: 'ACCEPTED'
  },
  {
    id: Math.random() * (maxValue),
    sender_id: '',
    recipient_id: mockUsers[0].id,
    transaction_id: Math.random() * (maxValue),
    sum: Math.floor(Math.random() * (maxSum)) / 100,
    date: new Date(y, m + Math.random() * (6), d, 10),
    method: 'card',
    status: 'ACCEPTED'
  },
  {
    id: Math.random() * (maxValue),
    sender_id: '',
    recipient_id: mockUsers[0].id,
    transaction_id: Math.random() * (maxValue),
    sum: Math.floor(Math.random() * (maxSum)) / 100,
    date: new Date(y, m + Math.random() * (6), d, 10),
    method: 'card',
    status: 'ACCEPTED'
  },
  {
    id: Math.random() * (maxValue),
    sender_id: '',
    recipient_id: mockUsers[0].id,
    transaction_id: Math.random() * (maxValue),
    sum: Math.floor(Math.random() * (maxSum)) / 100,
    date: new Date(y, m + Math.random() * (6), d, 10),
    method: 'card',
    status: 'ACCEPTED'
  },
  {
    id: Math.random() * (maxValue),
    sender_id: '',
    recipient_id: mockUsers[0].id,
    transaction_id: Math.random() * (maxValue),
    sum: Math.floor(Math.random() * (maxSum)) / 100,
    date: new Date(y, m + Math.random() * (6), d, 10),
    method: 'card',
    status: 'ACCEPTED'
  },
  {
    id: Math.random() * (maxValue),
    sender_id: '',
    recipient_id: mockUsers[0].id,
    transaction_id: Math.random() * (maxValue),
    sum: Math.floor(Math.random() * (maxSum)) / 100,
    date: new Date(y, m + Math.random() * (6), d, 10),
    method: 'card',
    status: 'ACCEPTED'
  },
  {
    id: Math.random() * (maxValue),
    sender_id: '',
    recipient_id: mockUsers[0].id,
    transaction_id: Math.random() * (maxValue),
    sum: Math.floor(Math.random() * (maxSum)) / 100,
    date: new Date(y, m + Math.random() * (6), d - 2, 19, 20),
    method: 'card',
    status: 'ACCEPTED'
  },
  {
    id: Math.random() * (maxValue),
    sender_id: '',
    recipient_id: mockUsers[0].id,
    transaction_id: Math.random() * (maxValue),
    sum: Math.floor(Math.random() * (maxSum)) / 100,
    date: new Date(y, m + Math.random() * (6), d - 7, 19, 20),
    method: 'card',
    status: 'ACCEPTED'
  },
  {
    id: Math.random() * (maxValue),
    sender_id: '',
    recipient_id: mockUsers[0].id,
    transaction_id: Math.random() * (maxValue),
    sum: Math.floor(Math.random() * (maxSum)) / 100,
    date: new Date(y, m + Math.random() * (6), d - 7, 19, 20),
    method: 'card',
    status: 'ACCEPTED'
  },
  {
    id: Math.random() * (maxValue),
    sender_id: '',
    recipient_id: mockUsers[0].id,
    transaction_id: Math.random() * (maxValue),
    sum: Math.floor(Math.random() * (maxSum)) / 100,
    date: new Date(y, m + Math.random() * (6), d - 7, 19, 20),
    method: 'card',
    status: 'ACCEPTED'
  },
  {
    id: Math.random() * (maxValue),
    sender_id: '',
    recipient_id: mockUsers[0].id,
    transaction_id: Math.random() * (maxValue),
    sum: Math.floor(Math.random() * (maxSum)) / 100,
    date: new Date(y, m + Math.random() * (6), d - 7, 19, 20),
    method: 'card',
    status: 'ACCEPTED'
  },
  {
    id: Math.random() * (maxValue),
    sender_id: '',
    recipient_id: mockUsers[0].id,
    transaction_id: Math.random() * (maxValue),
    sum: Math.floor(Math.random() * (maxSum)) / 100,
    date: new Date(y, m + Math.random() * (6), d - 7, 19, 20),
    method: 'card',
    status: 'ACCEPTED'
  },
  {
    id: Math.random() * (maxValue),
    sender_id: musicBoomId,
    recipient_id: mockUsers[0].id,
    transaction_id: Math.random() * (maxValue),
    sum: Math.floor(Math.random() * (10)) * 1000,
    date: new Date(y, m, d - 2, 22, 55),
    method: 'withdraw',
    status: 'ACCEPTED'
  },
  {
    id: Math.random() * (maxValue),
    sender_id: musicBoomId,
    recipient_id: mockUsers[0].id,
    transaction_id: Math.random() * (maxValue),
    sum: Math.floor(Math.random() * (10)) * 1000,
    date: new Date(y, m, d - 1, 21, 10),
    method: 'withdraw',
    status: 'DISPUTED'
  },
  {
    id: Math.random() * (maxValue),
    sender_id: musicBoomId,
    recipient_id: mockUsers[0].id,
    transaction_id: Math.random() * (maxValue),
    sum: Math.floor(Math.random() * (10)) * 1000,
    date: new Date(y, m, d - 1, 10),
    method: 'withdraw',
    status: 'ACCEPTED'
  },
  {
    id: Math.random() * (maxValue),
    sender_id: musicBoomId,
    recipient_id: mockUsers[0].id,
    transaction_id: Math.random() * (maxValue),
    sum: Math.floor(Math.random() * (10)) * 1000,
    date: new Date(y, m, d, 10),
    method: 'withdraw',
    status: 'OPEN'
  }
];
let langCode = 0;
let GOOGLE_API_KEY = 'AIzaSyBBFvSIa5JBhQ0f_x7U8G2Pir7KLxVVyVw';

module.exports = {
  selectOptions, // For selets in ExtendedForms view
  events, // For calendar in Calendar view
  table_data, // For vector map on Dashboard view
  style, // For notifications (App container and Notifications view)
  thArray, tdArray, // For tables (TableList view)
  iconsArray, // For icons (Icons view)
  dataPie, dataSales, optionsSales, responsiveSales, dataBar, optionsBar, responsiveBar, // For charts (Dashboard view)
  mockEvents,
  mockUsers,
  mockPayments,
  langCode,
  mapCenter,
  GOOGLE_API_KEY,
  selectStatus,
};
