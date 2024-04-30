import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../page/Home/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Signup from "../page/Signup/Signup";
import Login from "../page/Login/Login";
import Media from "../page/Media/Media";
import Message from "../page/Message/Message";
import About from "../page/About/About";
import UpdatedAbout from "../page/About/UpdatedAbout";
import ResetPage from "../page/Login/ResetPage";
import SinglePostPage from "../page/SinglePostPage/SinglePostPage";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/media",
        element: <Media></Media>,
      },
      {
        path: "/message",
        element: <Message></Message>,
      },
      {
        path: "/about",
        element: (
          <PrivateRoute>
            <About></About>,
          </PrivateRoute>
        ),
      },
      {
        path: "/update-about",
        element: <UpdatedAbout></UpdatedAbout>,
      },
      {
        path: "/reset-password",
        element: <ResetPage></ResetPage>,
      },
      {
        path: "/post/:id",
        element: <SinglePostPage>,</SinglePostPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/posts/${params.id}`),
      },
    ],
  },
]);
