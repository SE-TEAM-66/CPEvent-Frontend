import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PageOne } from "./pages/page1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>dhalisdil</div>,
  },
  {
    path: "/page1",
    element: <PageOne />,
  },
  {
    path: "/page2",
    element: <div>pong</div>,
  },
  {
    path: "/page3",
    element: <div>pong</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
