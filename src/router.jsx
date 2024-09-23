import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Detail from "./pages/Detail";
import FormPage from "./pages/FormPage";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <Detail /> },
    ],
  },
  { path: "/todo", element: <FormPage /> },
]);

export default route;
