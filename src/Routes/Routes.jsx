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
import Favourites from "../page/Favourites/Favourites";
import MessageLayout from "../Layout/MessageLayout";
import ChatBox from "../page/Message/ChatBox";

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
        path: "/about",
        element: (
          <PrivateRoute>
            <About></About>,
          </PrivateRoute>
        ),
      },
      {
        path: "/favourites",
        element: (
          <PrivateRoute>
            <Favourites></Favourites>
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
        element: (
          <PrivateRoute>
            <SinglePostPage></SinglePostPage>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://social-facilites-server.vercel.app/posts/${params.id}`
          ),
      },
    ],
  },

  //layout for message
  {
    path: "/message",
    element: (
      <PrivateRoute>
        <MessageLayout></MessageLayout>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/message",
        element: (
          <PrivateRoute>
            <Message></Message>,
          </PrivateRoute>
        ),
      },
      {
        path: "/message/:id",
        element: (
          <PrivateRoute>
            <ChatBox></ChatBox>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
