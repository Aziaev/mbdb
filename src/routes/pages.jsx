import LoginPage from '../views/Pages/LoginPage.jsx';
import Promo from '../views/Pages/Promo.jsx';
import Landing from '../views/Pages/Landing.jsx';
import RecoverPage from "../views/Pages/RecoverPage";
import ArtistRegisterPage from '../views/Pages/ArtistRegisterPage.jsx';
import UserRegisterPage from '../views/Pages/ListenerRegisterPage.jsx';
import ForArtists from "../views/Pages/ForArtists"
import FinishRecoverPage from "../views/Pages/FinishRecoverPage"
import FinishEmailConfirmationPage from "../views/Pages/FinishEmailConfirmationPage"

let pagesRoutes = [
  { path: "/login", name: "Login Page", mini: "LP", component: LoginPage },
  { path: "/artist_registration", name: "ArtistRegister", mini: "ARP", component: ArtistRegisterPage },
  { path: "/registration", name: "Register", mini: "RP", component: UserRegisterPage },
  { path: "/recover", name: "Recover", mini: "RP", component: RecoverPage },
  { path: "/finish_registration", name: "FinishEmailConfirmation", mini: "RP", component: FinishEmailConfirmationPage },
  { path: "/finish_recover", name: "FinishRecover", mini: "FRP", component: FinishRecoverPage },
  { path: "/promo", name: "Promo", mini: "RP", icon: "pe-7s-star", component: Promo },
  { path: "/for_artists", name: "ForArtists", mini: "FA", icon: "pe-7s-star", component: ForArtists },
  { path: "/", name: "Landing", mini: "Index", icon: "pe-7s-star", component: Landing }
];

export default pagesRoutes;
