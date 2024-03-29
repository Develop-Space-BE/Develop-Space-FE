import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { google, kakao, logo, logowebp } from "../../asset/pic";

export const kakaoKEY = process.env.REACT_APP_KAKAO_CLIENT_ID;
export const kakaoREDIRECT = process.env.REACT_APP_KAKAO_REDIRECT_URI;

const Main = () => {
  const navigate = useNavigate();
  const KakaoLog = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoKEY}&redirect_uri=${kakaoREDIRECT}&response_type=code`;
  const KakaoLogin = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = KakaoLog;
  };

  return (
    <>
      <MainBox>
        <Logo>
          <picture>
            <source srcSet={logowebp} type="image/webp" />
            <img src={logo} alt="우주복" />
          </picture>
        </Logo>
        <Kakao onClick={KakaoLogin}>
          <img src={kakao} alt="카카오" />
        </Kakao>
        {/* <Google>
          <img src={google} alt="구글" />
        </Google> */}
        <Admin onClick={() => navigate("/adminLogin")}>관리자 로그인</Admin>
      </MainBox>
    </>
  );
};

export default Main;

const MainBox = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  width: 233px;
  height: 134px;
  margin-top: 235px;
  /* position: relative; */
`;

const Back = styled.img`
  /* width: 100%;
  height: 100%; */
  /* position: absolute; */
`;

const Kakao = styled.button`
  height: 49px;
  position: relative;
  border: none;
  border-radius: 15px;
  margin-top: 30px;
`;

const Google = styled.button`
  height: 49px;
  position: relative;
  border: none;
  border-radius: 15px;
  margin-top: 20px;
`;

const Admin = styled.button`
  font-size: 16px;
  margin-top: 20px;
  color: #c5c5c5;
  position: relative;
  border: none;
  border-bottom: 1px solid #c5c5c5;
  background-color: transparent;
`;
