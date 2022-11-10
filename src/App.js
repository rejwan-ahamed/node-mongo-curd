import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Conponents/Home";
import Adduser from "./Conponents/Adduser";
import Update from "./Conponents/Update";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      loader: () => fetch("http://localhost:5000/"),
    },
    { path: "/user/add", element: <Adduser></Adduser> },
    {
      path: "/update/:id",
      element: <Update></Update>,
      loader: ({ params }) => fetch(`http://localhost:5000/user/${params.id}`),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
