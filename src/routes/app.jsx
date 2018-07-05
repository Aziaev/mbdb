import Pages from '../containers/Pages.container.jsx';
import Dash from '../containers/Dash.jsx';

let appRoutes = [
  { path: "/dashboard", name: "Dashboard", component: Dash },
  { path: "/", name: "Home", component: Pages }
];

export default appRoutes;
