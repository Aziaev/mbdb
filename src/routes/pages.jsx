import LockScreenPage from '../views/Pages/LockScreenPage.jsx';
import LoginPage from '../views/Pages/LoginPage.jsx';
import Promo from '../views/Pages/Promo.jsx';
import RegisterPage from '../views/Pages/RegisterPage.jsx';

let pagesRoutes = [
  { path: "/pages/login-page", name: "Login Page", mini: "LP", component: LoginPage },
  { path: "/pages/register-page", name: "Register", mini: "RP", component: RegisterPage },
  { path: "/pages/promo", name: "Promo", mini: "RP", icon: "pe-7s-star", component: Promo },
  { path: "/pages/lock-screen-page", name: "Promo", mini: "LSP", component: LockScreenPage },
  { path: "/pages/lock-screen-page", name: "Lock Screen Page", mini: "LSP", component: LockScreenPage },
  { path: "/", name: "Promo", mini: "RP", icon: "pe-7s-star", component: Promo }
];

export default pagesRoutes;
