import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Email from "./components/start/Email";

import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
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
