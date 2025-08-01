import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import { useState } from "react";
import MyDetails from "./components/MyDetails";
import MyHomePage from "./components/MyHomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [input, setInput] = useState("");
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/mydetails" element={<MyDetails input={input} />} />

          <Route
            path="/"
            element={<MyHomePage input={input} setInput={setInput} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
