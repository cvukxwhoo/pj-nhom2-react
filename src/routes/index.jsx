import Home from "../pages/Home";
import Tokyo from "../pages/Tokyo/Tokyo";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import User from "../pages/User";
import Osaka from "../pages/Osaka/Osaka";
import Kyoto from "../pages/Kyoto/Kyoto";
import Okinawa from "../pages/Okinawa/Okinawa";
import Kanagawa from "../pages/Kanagawa/Kanagawa";
import Yamanashi from "../pages/Yamanashi/Yamanashi";

// Tokyo
import MichelinStar from "../pages/Tokyo/pages/MichelinStar/MichelinStar";
import StreetKarting from "../pages/Tokyo/pages/StreetKarting/StreetKarting";
import Teamlab from "../pages/Tokyo/pages/Teamlab/Teamlab";
import SunshineAquarium from "../pages/Tokyo/pages/SunshineAquarium/SunshineAquarium";
import TokyoSkytree from "../pages/Tokyo/pages/TokyoSkytree/TokyoSkytree";
import SamuraiRestaurant from "../pages/Tokyo/pages/SamuraiRestaurant/SamuraiRestaurant";

// Kyoto
import GardenMuseum from "../pages/Kyoto/pages/GardenMuseum/GardenMuseum";
import Odawara from "../pages/Kyoto/pages/Odawara/Odawara";
import Yokohama from "../pages/Kyoto/pages/Yokohama/Yokohama";
import KyotoTower from "../pages/Kyoto/pages/KyotoTower/KyotoTower";
import Takenosato from "../pages/Kyoto/pages/Takenosato/Takenosato";
import HonkeTankuma from "../pages/Kyoto/pages/HonkeTankuma/HonkeTankuma";

// Osaka
import OsakaCastle from "../pages/Osaka/pages/OsakaCastle/OsakaCastle";
import Kansai from "../pages/Osaka/pages/Kansai/Kansai";
import KansaiAirport from "../pages/Osaka/pages/KansaiAirport/KansaiAirport";
import Umeda from "../pages/Osaka/pages/Umeda/Umeda";
import Sakishima from "../pages/Osaka/pages/Sakishima/Sakishima";

// Okinawa
import BlueCave from "../pages/Okinawa/pages/BlueCave/BlueCave";
import Cave from "../pages/Okinawa/pages/Cave/Cave";
import Yubu from "../pages/Okinawa/pages/Yubu/Yubu";

// Kanagawa
import Enoshima from "../pages/Kanagawa/pages/Enoshima/Enoshima";

// Yamanashi
import Discovery from "../pages/Yamanashi/pages/Discovery/Discovery";
import FullDay from "../pages/Yamanashi/pages/FullDay/FullDay";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/okinawa", component: Okinawa },
  { path: "/blog", component: Blog },
  { path: "/contact", component: Contact },
  { path: "/user", component: User },
  { path: "/osaka", component: Osaka },
  // Tokyo
  { path: "/tokyo", component: Tokyo },
  // inside Tokyo Page
  { path: "/tokyo/michelinstar", component: MichelinStar },
  { path: "/tokyo/streetkarting", component: StreetKarting },
  { path: "/tokyo/teamlab", component: Teamlab },
  { path: "/tokyo/sunshineaquarium", component: SunshineAquarium },
  { path: "/tokyo/tokyoskytree", component: TokyoSkytree },
  { path: "/tokyo/samurairestaurant", component: SamuraiRestaurant },
  // Kyoto
  { path: "/kyoto", component: Kyoto },
  { path: "/kyoto/gardenmuseum", component: GardenMuseum },
  { path: "/kyoto/odawara", component: Odawara },
  { path: "/kyoto/yokohama", component: Yokohama },
  { path: "/kyoto/kyototower", component: KyotoTower },
  { path: "/kyoto/takenosato", component: Takenosato },
  { path: "/kyoto/honketakuma", component: HonkeTankuma },

  // Osaka
  {
    path: "/osaka/osakacastle",
    component: OsakaCastle,
  },
  {
    path: "/osaka/kansai",
    component: Kansai,
  },
  {
    path: "/osaka/kansaiairport",
    component: KansaiAirport,
  },
  {
    path: "/osaka/umeda",
    component: Umeda,
  },
  {
    path: "/osaka/sakishima",
    component: Sakishima,
  },

  // Onikawa
  {
    path: "/okinawa/bluecave",
    component: BlueCave,
  },
  {
    path: "/okinawa/cave",
    component: Cave,
  },
  {
    path: "/okinawa/yubu",
    component: Yubu,
  },

  // Kanagawa
  {
    path: "/kanagawa",
    component: Kanagawa,
  },
  {
    path: "/kanagawa/enoshima",
    component: Enoshima,
  },

  // mtFuji
  {
    path: "/yamanashi/discovery",
    component: Discovery,
  },
  {
    path: "/yamanashi/fullday",
    component: FullDay,
  },

  {
    path: "/yamanashi",
    component: Yamanashi,
  },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
