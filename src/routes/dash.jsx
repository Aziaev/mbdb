import constants from '../constants'
import Calendar from "../views/Calendar/Calendar";
import Dashboard from '../views/Dashboard/Dashboard.jsx';
import AdminPayments from "../views/Pages/AdminPayments";
import AdminUsers from "../views/Pages/AdminUsers";
import DonatePage from "../views/Pages/DonatePage";
import Help from "../views/Pages/Help";
import Payments from "../views/Pages/Payments";
import Stats from "../views/Pages/Stats";
import UserPage from "../views/Pages/UserPage";

let langCode = 0;
let dashboard = constants.MENU.dashboard.label[langCode];
let dashboardIcon = constants.MENU.dashboard.icon;
let donate = constants.MENU.donate.label[langCode];
let donateIcon = constants.MENU.donate.icon;
let donateUrl = constants.MENU.donate.id;
let editProfile = constants.MENU.editProfile.label[langCode];
let editProfileIcon = constants.MENU.editProfile.icon;
let editProfileUrl = constants.MENU.editProfile.id;
let calendar = constants.MENU.calendar.label[langCode];
let calendarIcon = constants.MENU.calendar.icon;
let stats = constants.MENU.stats.label[langCode];
let statsIcon = constants.MENU.stats.icon;
let payments = constants.MENU.payments.label[langCode];
let paymentsIcon = constants.MENU.payments.icon;
let paymentsUrl = constants.MENU.payments.id;
let admin = constants.MENU.admin.label[langCode];
let adminIcon = constants.MENU.admin.icon;
let adminUrl = constants.MENU.admin.id;
let users = constants.MENU.users.label[langCode];
let usersIcon = constants.MENU.users.icon;
let usersUrl = constants.MENU.users.id;
let help = constants.MENU.help.label[langCode];
let helpIcon = constants.MENU.help.icon;
let helpUrl = constants.MENU.help.id;

let dashRoutes = [
  { path: "/dashboard/main", name: dashboard, icon: dashboardIcon, position: 'sidebar', component: Dashboard },
  { path: "/dashboard/calendar", name: calendar, icon: calendarIcon, position: 'sidebar', component: Calendar },
  { path: "/dashboard/payments", name: payments, icon: paymentsIcon, position: 'sidebar', component: Payments },
  { path: "/dashboard/stats", name: stats, icon: statsIcon, position: 'sidebar', component: Stats },
  {
    collapse: true,
    path: `/dashboard/${adminUrl}`,
    name: admin,
    state: "openAdmin",
    icon: adminIcon,
    position: 'sidebar',
    views: [
      {
        path: `/dashboard/${adminUrl}/${paymentsUrl}`,
        name: payments,
        icon: paymentsIcon,
        position: 'sidebar',
        component: AdminPayments
      },
      {
        path: `/dashboard/${adminUrl}/${usersUrl}`,
        name: users,
        icon: usersIcon,
        position: 'sidebar',
        component: AdminUsers
      },
    ]
  },
  { path: `/dashboard/${helpUrl}`, name: help, icon: helpIcon, position: 'sidebar', component: Help },
  {
    path: `/dashboard/${editProfileUrl}`,
    name: editProfile,
    icon: editProfileIcon,
    position: 'profile',
    component: UserPage
  },
  { path: `/dashboard/${donateUrl}`, name: donate, icon: donateIcon, position: 'profile', component: DonatePage },
  { redirect: true, path: "/", pathTo: "/dashboard/main", name: "Dashboard" }
];

export default dashRoutes;
