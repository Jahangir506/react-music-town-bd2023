import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../layouts/MainRoot";
import Details from "../pages/Details/Details";
import ErrorPages from "../pages/ErrorPages/ErrorPages";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/login";
import Register from "../pages/Register/Register";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";

const CreateRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainRoot></MainRoot>,
        errorElement: <ErrorPages></ErrorPages>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/serviceDetails',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: () => fetch('/music.json')
            },
            {
                path: '/lyrics',
                element: <PrivateRoute></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default CreateRoutes;