import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainList from "./pages/MainList";
import Mypage from "./pages/Mypage";
import Setting from "./pages/Setting";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mainlist" element={<MainList />} />
        <Route path="/mypage/:nickname" element={<Mypage />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
