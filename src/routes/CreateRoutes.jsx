import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../layouts/MainRoot";
import ErrorPages from "../pages/ErrorPages/ErrorPages";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/login";
import SignUp from "../pages/SignUp/SignUp";

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
                path: '/login',
                element: <SignIn></SignIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default CreateRoutes;