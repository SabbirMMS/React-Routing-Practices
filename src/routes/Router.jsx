import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Users from "../pages/Users";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Layout from "../pages/layouts/Layout";
import UserDetails from "../components/UserDetails";
import UserError from "../components/UserError";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import ForgetPassword from "../pages/auth/ForgetPassword";
import { loadData, loadSingleData } from "../utils/utils";
import PrivateRouter from "../pages/auth/PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "users",
        element: (
          <PrivateRouter>
            <Users />
          </PrivateRouter>
        ),
        // loader: () => fetch("https://jsonplaceholder.typicode.com/users"), // Working line
        loader: loadData,
        /*children:[
                        {
                            path:":id",
                            element: ({match})=> {
                                const userId = match.params.id;
                                return <UserDetails userId={userId}/>
                            }
                        }
                    ]*/
      },
      {
        path: "users/:id",
        element: <UserDetails />,
        errorElement: <UserError />,
        // loader: (match) =>
        //   fetch(
        //     `https://jsonplaceholder.typicode.com/users/${match.params.id}`
        //   ),
        loader: (match) => loadSingleData(match.params.id),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/reset",
    element: <ForgetPassword />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);
export default router;
