import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Detail from "./pages/Detail";
import FormPage from "./pages/FormPage";
import Example from "./pages/Example";

const route = createBrowserRouter([
  {
    path: "/",
    // element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <Detail /> },
      { path: "example", element: <Example /> },
    ],
  },
  { path: "/todo", element: <FormPage /> },
]);

export default route;
