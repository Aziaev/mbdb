import LockScreenPage from '../views/Pages/LockScreenPage.jsx';
import LoginPage from '../views/Pages/LoginPage.jsx';
import Promo from '../views/Pages/Promo.jsx';
import RegisterPage from '../views/Pages/RegisterPage.jsx';

let pagesRoutes = [
  { path: "/login", name: "Login Page", mini: "LP", component: LoginPage },
  { path: "/registration", name: "Register", mini: "RP", component: RegisterPage },
  { path: "/", name: "Promo", mini: "RP", icon: "pe-7s-star", component: Promo }
];

export default pagesRoutes;
