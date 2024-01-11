import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import { Root } from "./routes/root";
import { Test } from "./page/test";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Test />
      },
    ],
  },
]);
