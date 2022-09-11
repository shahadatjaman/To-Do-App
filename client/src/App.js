import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import axios from "axios";
function App() {
  const getDta = () => {
    axios
      .get("http://localhost:5000/data")
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  getDta();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
