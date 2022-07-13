import "./App.scss";
import { Fragment, useLayoutEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import { publicRoutes } from "./routes";
import DefaultLayout from "./layouts/DefaultLayout";
import UserContextProvider from "./contexts/UserContext";

// React Router Dom v6: Scroll To Top on Route Change
const ScrollToTop = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
};

function App() {
    return (
        <UserContextProvider>
            <Router>
                <div className="App">
                    <ScrollToTop>
                        <Routes>
                            {publicRoutes.map((route, index) => {
                                const Page = route.component;
                                let Layout = DefaultLayout;

                                if (route.layout === null) {
                                    Layout = Fragment;
                                }

                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                            <Layout>
                                                <Page
                                                    authRoute={
                                                        route.authRoute
                                                            ? route.authRoute
                                                            : null
                                                    }
                                                />
                                            </Layout>
                                        }
                                    />
                                );
                            })}
                        </Routes>
                    </ScrollToTop>
                </div>
            </Router>
        </UserContextProvider>
    );
}

export default App;
