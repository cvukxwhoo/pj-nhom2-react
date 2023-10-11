import Home from "../pages/Home";
import Destination from "../pages/Destination";
import Listing from "../pages/Listing";
import Activities from "../pages/Activities";
import Shop from "../pages/Shop";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/destination", component: Destination },
  { path: "/listings", component: Listing },
  { path: "/activities", component: Activities },
  { path: "/shop", component: Shop },
  { path: "/blog", component: Blog },
  { path: "/contact", component: Contact },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
