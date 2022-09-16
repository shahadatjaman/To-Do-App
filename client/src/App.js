import { useDispatch } from "react-redux";

import { useEffect } from "react";

import jwtDecoder from "jwt-decode";

import { useRoutes } from "react-router-dom";

import "./App.css";

import { addUser } from "./feature/auth/register";

import { routes } from "./Routes/";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let token = localStorage.getItem("userInfo");
    if (token) {
      let user = jwtDecoder(token);
      dispatch(addUser(user));
    }
  }, [dispatch]);

  let element = useRoutes(routes);

  return element;
}

export default App;
