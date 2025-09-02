import App from "../App";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import { createBrowserRouter } from "react-router-dom";
import NotFound404 from "../Pages/NotFound404";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Login from "../Pages/Login";
import Resister from "../Pages/Resister";
import ServicesDetails from "../Pages/ServicesDetails";
import CheckOut from "../Pages/CheckOut";
import ViewOrder from "../Pages/ViewOrder";
import PrivetRoute from "./PrivetRoute";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      {path:'/about', element:<About />},
      {path:'/services', element:<Services />},
      {path:'/servicesdetails/:_id', element:<PrivetRoute><ServicesDetails /></PrivetRoute>},
      {path:'/checkout', element:<CheckOut />},
      {path:'/vieworder', element:<PrivetRoute><ViewOrder /></PrivetRoute>},
      {path:'/login', element:<Login />},
      {path:'/singup', element:<Resister />},
      

    ],
  },
  {
    path:'*',
    element: <NotFound404 />
  }
]);

export default router;
