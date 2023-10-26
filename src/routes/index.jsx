import HeaderAndBg from "../components/Layout/HeaderAndBg";
import Home from "../pages/Home";
import Tokyo from "../pages/Tokyo/Tokyo";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import User from "../pages/User/User";
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

  { path: "/blog", component: Blog },
  { path: "/contact", component: Contact },
  { path: "/user", component: User },

  // Tokyo
  { path: "/tokyo", component: Tokyo, layout: HeaderAndBg },
  // inside Tokyo Page
  { path: "/tokyo/michelinstar", component: MichelinStar, layout: HeaderAndBg },
  {
    path: "/tokyo/streetkarting",
    component: StreetKarting,
    layout: HeaderAndBg,
  },
  { path: "/tokyo/teamlab", component: Teamlab, layout: HeaderAndBg },
  {
    path: "/tokyo/sunshineaquarium",
    component: SunshineAquarium,
    layout: HeaderAndBg,
  },
  { path: "/tokyo/tokyoskytree", component: TokyoSkytree, layout: HeaderAndBg },
  {
    path: "/tokyo/samurairestaurant",
    component: SamuraiRestaurant,
    layout: HeaderAndBg,
  },
  // Kyoto
  { path: "/kyoto", component: Kyoto, layout: HeaderAndBg },
  { path: "/kyoto/gardenmuseum", component: GardenMuseum, layout: HeaderAndBg },
  { path: "/kyoto/odawara", component: Odawara, layout: HeaderAndBg },
  { path: "/kyoto/yokohama", component: Yokohama, layout: HeaderAndBg },
  { path: "/kyoto/kyototower", component: KyotoTower, layout: HeaderAndBg },
  { path: "/kyoto/takenosato", component: Takenosato, layout: HeaderAndBg },
  { path: "/kyoto/honketakuma", component: HonkeTankuma, layout: HeaderAndBg },

  // Osaka
  { path: "/osaka", component: Osaka, layout: HeaderAndBg },
  {
    path: "/osaka/osakacastle",
    component: OsakaCastle,
    layout: HeaderAndBg,
  },
  {
    path: "/osaka/kansai",
    component: Kansai,
    layout: HeaderAndBg,
  },
  {
    path: "/osaka/kansaiairport",
    component: KansaiAirport,
    layout: HeaderAndBg,
  },
  {
    path: "/osaka/umeda",
    component: Umeda,
    layout: HeaderAndBg,
  },
  {
    path: "/osaka/sakishima",
    component: Sakishima,
    layout: HeaderAndBg,
  },

  // Onikawa
  { path: "/okinawa", component: Okinawa, layout: HeaderAndBg },
  {
    path: "/okinawa/bluecave",
    component: BlueCave,
    layout: HeaderAndBg,
  },
  {
    path: "/okinawa/cave",
    component: Cave,
    layout: HeaderAndBg,
  },
  {
    path: "/okinawa/yubu",
    component: Yubu,
    layout: HeaderAndBg,
  },

  // Kanagawa
  {
    path: "/kanagawa",
    component: Kanagawa,
    layout: HeaderAndBg,
  },
  {
    path: "/kanagawa/enoshima",
    component: Enoshima,
    layout: HeaderAndBg,
  },

  // Yamanashi, layout: HeaderAndBg
  {
    path: "/yamanashi",
    component: Yamanashi,
    layout: HeaderAndBg,
  },
  {
    path: "/yamanashi/discovery",
    component: Discovery,
    layout: HeaderAndBg,
  },
  {
    path: "/yamanashi/fullday",
    component: FullDay,
    layout: HeaderAndBg,
  },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
