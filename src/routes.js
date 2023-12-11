import App from "./App.js";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home.js";
import Notes from "./pages/Notes.js";
import About from "./pages/About.js";
import Login from "./pages/Login.js";
import CreateAccount from "./pages/CreateAccount.js";
import ForgotPassword from "./pages/ForgotPassword.js";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/notes",
                element: <Notes />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <CreateAccount />
            },
            {
                path: "/forgot-password",
                element: <ForgotPassword />
            }
        ]
    }
];

export default routes;