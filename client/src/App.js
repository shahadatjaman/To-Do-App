import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";

import jwtDecoder from "jwt-decode";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Email from "./components/start/Email";

import { GlobalStyles } from "./styles/GlobalStyles";

import { addUser } from "./feature/auth/register";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let token = localStorage.getItem("userInfo");
    if (token) {
      let user = jwtDecoder(token);
      dispatch(addUser(user));
    }
  }, [dispatch]);
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Email />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
