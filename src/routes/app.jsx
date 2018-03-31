import Pages from '../containers/Pages.jsx';
import Dash from '../containers/Dash.jsx';
import DonatePage from "../views/Pages/DonatePage";

var appRoutes = [
  { path: "/dashboard", name: "Dashboard", component: Dash },
  { path: "/pages/login-page", name: "Pages", component: Pages },
  { path: "/pages/register-page", name: "Pages", component: Pages },
  { path: "/pages/lock-screen-page", name: "Pages", component: Pages },
  { path: "/pages/promo", name: "Promo", component: Pages },
  { path: "/pages/donate", name: "Donate page", component: DonatePage },
  { path: "/", name: "Home", component: Pages }
];

export default appRoutes;
