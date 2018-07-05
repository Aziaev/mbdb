import constants from "../constants"
import Dashboard from "../views/Dashboard/Dashboard.jsx"
import Help from "../views/Pages/Help"
import Payments from "../views/Pages/Payments"
import Stats from "../views/Pages/Stats"
import UserPage from "../views/Pages/UserPage"
import PrintBanner from "../views/Pages/PrintBanner"

let langCode = 0;
let dashboard = constants.MENU.dashboard.label[langCode];
let dashboardIcon = constants.MENU.dashboard.icon;
let banner = constants.MENU.banner.label[langCode];
let bannerIcon = constants.MENU.banner.icon;
let bannerUrl = constants.MENU.banner.id;
let editProfile = constants.MENU.editProfile.label[langCode];
let editProfileIcon = constants.MENU.editProfile.icon;
let editProfileUrl = constants.MENU.editProfile.id;
let stats = constants.MENU.stats.label[langCode];
let statsIcon = constants.MENU.stats.icon;
let payments = constants.MENU.payments.label[langCode];
let paymentsIcon = constants.MENU.payments.icon;
let help = constants.MENU.help.label[langCode];
let helpIcon = constants.MENU.help.icon;
let helpUrl = constants.MENU.help.id;

let dashRoutes = [
  {path: "/dashboard/main", name: dashboard, icon: dashboardIcon, position: 'sidebar', component: Dashboard},
  // { path: "/dashboard/calendar", name: calendar, icon: calendarIcon, position: 'sidebar', component: Calendar },
  {path: "/dashboard/payments", name: payments, icon: paymentsIcon, position: 'sidebar', component: Payments},
  {path: "/dashboard/stats", name: stats, icon: statsIcon, position: 'sidebar', component: Stats},
  /*{
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
   },*/
  {path: `/dashboard/${bannerUrl}`, name: banner, icon: bannerIcon, position: 'sidebar', component: PrintBanner},
  {path: `/dashboard/${helpUrl}`, name: help, icon: helpIcon, position: 'sidebar', component: Help},
  {
    path: `/dashboard/${editProfileUrl}`,
    name: editProfile,
    icon: editProfileIcon,
    position: 'profile',
    component: UserPage
  },
  {redirect: true, path: "/", pathTo: "/dashboard/main", name: "Dashboard"}
];

export default dashRoutes;
