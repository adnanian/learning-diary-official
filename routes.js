import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/login",
                element: <Login />
            }
        ]
    }
];

export default routes;