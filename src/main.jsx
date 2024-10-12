import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Home, LoginPage, SignupPage, AllPost, EditPost,Post, AddPost  } from "./pages/pagesIndex.js";
import { Authlayout, Login } from "./components/Index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <Authlayout authentication={false}>
            <LoginPage />
          </Authlayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <Authlayout authentication={false}>
            <SignupPage />
          </Authlayout>
        ),
      },
      {
        path: "/allposts",
        element: (
          <Authlayout authentication>
            {" "}
            <AllPost />
          </Authlayout>
        ),
      },
      {
        path: "/addpost",
        element: (
          <Authlayout authentication>
            {" "}
            <AddPost />
          </Authlayout>
        ),
      },
      {
        path: "/editpost/:slug",
        element: (
          <Authlayout authentication>
            {" "}
            <EditPost />
          </Authlayout>
        ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
     <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
