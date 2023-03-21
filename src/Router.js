import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import MainList from "./pages/MainList";
import Mypage from "./pages/Mypage";
import Question from "./pages/Question";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mainlist" element={<MainList />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/adminLogin" element={<LoginPage />} />
        <Route path="/adminPage" element={<AdminPage />} />
        <Route path="/questionWrite" element={<Question />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
