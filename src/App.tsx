import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
  // useLocation,
} from "react-router-dom";
import { useEffect } from "react";
// import { scroll } from "./animation";
import Home from "./pages/Home";
// import { Footer, Navbar } from "./components/global";

const Root = () => {
  return (
    <>
      {/* <Navbar /> */}
      <ScrollRestoration />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      // {
      //   path: "*",
      //   element: <NotFound />,
      // },
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default function App() {
  useEffect(() => {
    scroll();
  }, []);
  return <RouterProvider router={router} />;
}
