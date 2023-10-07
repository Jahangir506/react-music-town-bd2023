import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import CreateRoutes from "./routes/CreateRoutes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={CreateRoutes}></RouterProvider>
  </React.StrictMode>
);
