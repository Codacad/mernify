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
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/signup",
        element: (
          <UserSignedIn>
            <Signup />
          </UserSignedIn>
        ),
      },
      {
        path: "/signin",
        element: (
          <UserSignedIn>
            <Signin />
          </UserSignedIn>
        ),
      },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/profile", element: <Profile /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/blogs/:id", element: <Blog /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
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
