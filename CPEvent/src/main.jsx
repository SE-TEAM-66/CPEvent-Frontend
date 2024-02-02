import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PageOne } from "./pages/page1";
import GroupSettingPage from "./pages/GroupSettingPage";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Create } from "./pages/groupCreation";

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
    path: "/groupsettingpage",
    element: <GroupSettingPage />,
  },
  { path: "/createGroup", element: <Create /> },
  {
    path: "/page3",
    element: <div>pong</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
