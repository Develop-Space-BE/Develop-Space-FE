import React from 'react';
import { setCookies } from '../../api/cookie';
import { useNavigate } from 'react-router-dom';
import { kakao } from '../../api/social';

const KakaoLogin = () => {
  const navigate = useNavigate();
  let code = new URL(window.location.href).searchParams.get("code")
  kakao(code).then((res) => {
    if (res?.data.customHttpStatus === 2000) {
      setCookies("authorization", res.headers.authorization, {
        path: "/",
        maxAge: 3000
      })
      navigate("/mainlist");
    } else {
      alert("로그인 실패")
    }
  })
};

export default KakaoLogin;