import React from "react";
import { Routes, Route } from "react-router-dom";
import Datte from "./Components/Datte";
import Login from "./Components/Login";
import SignUp from "./Components/Signup";
import Video from "./Components/Video";
import Header from "./Components/Header";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="*" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/header" element={<Header />} />
        <Route exact path="/video" element={<Video />} />
        <Route exact path="/datte" element={<Datte />} />
      </Routes>
    </div>
  );
};

export default App;
