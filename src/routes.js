import App from "./App.js";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                home: <Home />
            },
            {
                path: "/login",
                element: <Login />
            }
        ]
    }
];

export default routes;