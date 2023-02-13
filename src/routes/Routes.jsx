import { createBrowserRouter } from "react-router-dom";
import CareerForm from "../components/UI/CareerForm";
import Home from "../components/UI/Home";
import Root from "../Layout/Root";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/careerForm',
                element:<CareerForm/>
            }
        ]
    }
])