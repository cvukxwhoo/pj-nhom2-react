import Home from "../pages/Home";
import Destination from "../pages/Destination";
import Listing from "../pages/Listing";
import Tokyo from "../pages/Tokyo/Tokyo";
import Shop from "../pages/Shop";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import User from "../pages/User";
import Osaka from "../pages/Osaka/Osaka";
import Kyoto from "../pages/Kyoto/Kyoto";

// Tokyo
import MichelinStar from "../pages/Tokyo/pages/MichelinStar/MichelinStar";
import StreetKarting from "../pages/Tokyo/pages/StreetKarting/StreetKarting";
import Teamlab from "../pages/Tokyo/pages/Teamlab/Teamlab";
import SunshineAquarium from "../pages/Tokyo/pages/SunshineAquarium/SunshineAquarium";
import TokyoSkytree from "../pages/Tokyo/pages/TokyoSkytree/TokyoSkytree";
import SamuraiRestaurant from "../pages/Tokyo/pages/SamuraiRestaurant/SamuraiRestaurant";

// Kyoto
import GardenMuseum from "../pages/Kyoto/pages/GardenMuseum/GardenMuseum";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/destination", component: Destination },
  { path: "/listings", component: Listing },
  { path: "/shop", component: Shop },
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
  // inside Kyoto Page
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
