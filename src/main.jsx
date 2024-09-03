import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import LikePage from "./pages/LikePage.jsx";
import Movie from "./pages/Movie.jsx";
import { FavProvider } from "./Context/fav.jsx";
import "./styles/index.scss";

const router = createBrowserRouter([
  {
    element: <FavProvider><App /></FavProvider>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/coups-de-coeur",
        element: <LikePage />,
      },
      {
        path: "/movie/:id",
        element: <Movie />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
