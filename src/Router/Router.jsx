import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Login from './../components/Login/Login';
import SignUp from "../components/SignUp/SignUp";
import ErrorPage from "../components/Error/ErrorPage";
import Checkout from "../components/Checkout/Checkout";
import Booking from "../components/Booking/Booking";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/signUp',
        element:<SignUp></SignUp>
      },
      {
        path: '/checkout/:id',
        element: <Checkout></Checkout>,
        loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/bookings',
        element:<PrivateRoute><Booking></Booking></PrivateRoute>
      }
    ]
  },
]);
export default router;