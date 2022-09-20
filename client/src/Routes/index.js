import Sidebar from "../components/Sidebar";

import Task from "../Pages/Tasks";

import AddTodo from "../Pages/CreateTodo/CreateTodo";

import CreateTask from "../Pages/CreateTask/CreateTask";

import NotFound from "../components/Errors/NotFound";

import Email from "../components/start/Email";

import Login from "../components/start/login";

import { Navigate } from "react-router-dom";

import Home from "../Pages/Home";

const ProtectRoute = ({ children }) => {
  let token = localStorage.getItem("userInfo");

  if (!token) {
    return <Navigate to={"/login"} />;
  } else {
    return children;
  }
};

const PublicRoute = ({ children }) => {
  let token = localStorage.getItem("userInfo");

  if (token) {
    return <Navigate to={"/"} />;
  } else {
    return children;
  }
};

export const routes = [
  {
    path: "/",
    element: (
      <ProtectRoute>
        <Sidebar />
      </ProtectRoute>
    ),
    children: [
      {
        path: "task_name/:id",
        element: <Task />,
      },
      {
        path: "createtodo",
        element: <AddTodo />,
      },
      {
        path: "createtask",
        element: <CreateTask />,
      },
      {
        path: "",
        element: (
          <ProtectRoute>
            <Home />
          </ProtectRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/signup",
    element: (
      <PublicRoute>
        <Email />
      </PublicRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
];
