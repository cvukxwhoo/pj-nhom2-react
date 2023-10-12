import Home from "../pages/Home";
import Destination from "../pages/Destination";
import Listing from "../pages/Listing";
import Activities from "../pages/Activities";
import Shop from "../pages/Shop";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import User from "../pages/User";
import Shopping from "../pages/Shopping";
import Search from "../pages/Search";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/destination", component: Destination },
  { path: "/listings", component: Listing },
  { path: "/activities", component: Activities },
  { path: "/shop", component: Shop },
  { path: "/blog", component: Blog },
  { path: "/contact", component: Contact },
  { path: "/user", component: User },
  { path: "/shopping", component: Shopping },
  { path: "/search", component: Search },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
