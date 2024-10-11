import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <App />,
    loader: () => "로또",
    Children: [
      {
        path: "/",
        loader: () => "로또",
        element: <Footer />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export { routes, router };
