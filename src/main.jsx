import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./Routes/Routes";
import { SkeletonTheme } from "react-loading-skeleton";
import AuthProvider from "./Providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <RouterProvider router={router}></RouterProvider>
      </SkeletonTheme>
    </AuthProvider>
  </React.StrictMode>
);
