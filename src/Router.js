import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainList from "./pages/MainList";
import Mypage from "./pages/Mypage";
import Setting from "./pages/Setting";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import Question from "./pages/Question";
import KakaoLogin from "./components/main/KakaoLogin";
import DetailPage from "./pages/DetailPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mainlist" element={<MainList />} />
        <Route path="/mypage/:nickname" element={<Mypage />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/adminLogin" element={<LoginPage />} />
        <Route path="/adminPage" element={<AdminPage />} />
        <Route path="/questionWrite" element={<Question />} />
        <Route path="/login/kakao" element={<KakaoLogin />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
