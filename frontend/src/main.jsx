import { render } from "preact";
import "./index.css";
import { App } from "./app.jsx";
import Signup from "./routes/Signup.jsx";
import Signin from "./routes/Signin.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./routes/Dashboard.jsx";
import Profile from "./routes/Profile.jsx";
import Blogs from "./routes/Blogs.jsx";
import Blog from "./Components/Blog.jsx";
import Contact from "./routes/Contact.jsx";
import About from "./routes/About.jsx";
import store from "./store.js";
import { Provider } from "react-redux";
import Home from "./routes/Home.jsx";
import Cookie from "js-cookie";
import { Navigate } from "react-router-dom";
import UserSignedIn from "./Components/UserSignedIn.jsx";
import { NotFound } from "./routes/NotFound.jsx";
import WriteBlog from "./routes/WriteBlog.jsx";
import Settings from "./routes/Settings.jsx";
import ProtectedRoutes from "./Components/ProtectedRoutes.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/signup",
        element: (
          <UserSignedIn yes={true}>
            <Signup />
          </UserSignedIn>
        ),
      },
      {
        path: "/signin",
        element: (
          <UserSignedIn yes={true}>
            <Signin />
          </UserSignedIn>
        ),
      },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/profile", element: <Profile /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/blogs/:id", element: <Blog /> },
      { path: "/blog/create", element: <WriteBlog /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      {
        path: "/settings",
        element: (
          <ProtectedRoutes>
            <Settings />
          </ProtectedRoutes>
        ),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>,
  document.getElementById("app")
);
