import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Main from "./layout/Main";
import Contact from "./components/Contact/Contact";
import SingleUser from "./components/SingleUser/SingleUser";
import Post from "./components/Posts/Post";
import SinglePost from "./components/SinglePosts/SinglePost";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
        {
          path: "/products",
          element: <Products></Products>,
          loader: () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
        },
        {
          path: "/friendDetails/:itemId",
          element: <SingleUser></SingleUser>,
          loader: ({ params }) => {
            return fetch(
              `https://jsonplaceholder.typicode.com/users/${params.itemId}`
            );
          },
        },
        {
          path: "/posts",
          loader: () => {
            return fetch("https://jsonplaceholder.typicode.com/posts");
          },
          element: <Post></Post>,
        },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        {
          path: "*",
          element: <div>This route is not found in this website</div>,
        },
        {
          path: "/posts/:postId",
          loader: ({ params }) => {
            return fetch(
              `https://jsonplaceholder.typicode.com/posts/${params.postId}`
            );
          },
          element: <SinglePost></SinglePost>,
        },
      ],
    },

    { path: "/blog", element: <div>This is Blog Page</div> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
