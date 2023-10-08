import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import CreateRoutes from "./routes/CreateRoutes";
import AuthProvider from "./Providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={CreateRoutes}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
