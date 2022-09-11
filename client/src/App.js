import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Email from "./components/start/Email";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Email />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
