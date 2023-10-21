import Home from "../pages/Home";
import Destination from "../pages/Destination";
import Listing from "../pages/Listing";
import Tokyo from "../pages/Tokyo/Tokyo";
import Shop from "../pages/Shop";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import User from "../pages/User";
import Osaka from "../pages/Osaka/Osaka";
import Search from "../pages/Search";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/destination", component: Destination },
  { path: "/listings", component: Listing },
  { path: "/tokyo", component: Tokyo },
  { path: "/shop", component: Shop },
  { path: "/blog", component: Blog },
  { path: "/contact", component: Contact },
  { path: "/user", component: User },
  { path: "/osaka", component: Osaka },
  { path: "/search", component: Search },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
