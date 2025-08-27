import App from "../App";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import { createBrowserRouter } from "react-router-dom";
import NotFound404 from "../Pages/NotFound404";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Login from "../Pages/Login";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      {path:'/about', element:<About />},
      {path:'/services', element:<Services />},
      {path:'/details', element:<Services />},
      {path:'/login', element:<Login />},

    ],
  },
  {
    path:'*',
    element: <NotFound404 />
  }
]);

export default router;
