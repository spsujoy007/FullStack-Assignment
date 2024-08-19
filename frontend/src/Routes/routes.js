import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Layout from "../Layout/layout";
import CreateCard from "../components/Home/Card/CreateCard";
import DetailCard from "../components/Home/Card/DetailCard";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/makecard',
                element: <CreateCard></CreateCard>
            },
            {
                path: '/card/:title/:id',
                loader: async ({params}) => await fetch(`https://helphand.vercel.app/cards/${params.id}`),
                element: <DetailCard></DetailCard>
            }
        ]
    }
])