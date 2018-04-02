import Pages from '../containers/Pages.jsx';
import Dash from '../containers/Dash.jsx';
import DonatePage from "../views/Pages/DonatePage";

let appRoutes = [
  { path: "/dashboard", name: "Dashboard", component: Dash },
  { path: "/", name: "Home", component: Pages }
];

export default appRoutes;
