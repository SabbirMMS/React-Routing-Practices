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
        element: <Users />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
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
        loader: (match) =>
          fetch(
            `https://jsonplaceholder.typicode.com/users/${match.params.id}`
          ),
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
    path: "/*",
    element: <NotFound />,
  },
]);
export default router;
