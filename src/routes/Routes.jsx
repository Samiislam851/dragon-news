import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader : ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    }
])

export default router;