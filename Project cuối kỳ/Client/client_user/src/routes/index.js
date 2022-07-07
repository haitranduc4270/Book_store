import Home from "~/pages/Home";
import OurBook from "~/pages/OurBook";
import Contact from "~/pages/Contact";
import CartOrder from "~/pages/CartOrder";
import NotFound from "~/pages/NotFound";
import Auth from "~/pages/Auth";
import OurBookDetail from "~/pages/OurBookDetail";

const publicRoutes = [
    { path: "/", component: Home },
    { path: "/login", component: Auth, authRoute: "login", layout: null },
    { path: "/register", component: Auth, authRoute: "register", layout: null },
    { path: "/book", component: OurBook },
    { path: "/book/:id", component: OurBookDetail },
    { path: "/contact", component: Contact },
    { path: "/cartOrder", component: CartOrder },
    { path: "*", component: NotFound, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
