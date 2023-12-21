import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import User from "../components/User/User";
import Github, { getGithubInfo } from "../components/Github/Github";
import Error from "../components/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "user/:userId",
        element: <User />,
      },
      {
        path: "github",
        element: <Github />,
        loader: async () => {
          return getGithubInfo();
        },
      },
    ],
  },
]);
export { router };
