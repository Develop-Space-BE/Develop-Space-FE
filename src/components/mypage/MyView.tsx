import React from "react";
import styled from "styled-components";
import {
  chart,
  nocomment,
  mypagenobookmark,
  mypagenolike,
} from "../../asset/pic";
import Hr from "../common(공통컴포넌트)/Hr";
import MypageBookMark from "./MypageBookMark";

const MyView = () => {
  return (
    <MyViewAll>
      <Hr />
      <MyPicture>
        <Profile>
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </Profile>
        <h3>뭘보노</h3>
        <ImgTag>
          <ImgAndDiv>
            <img src={chart} alt="" />
            <div>진도율</div>
          </ImgAndDiv>
          <ImgAndDiv>
            <img src={mypagenobookmark} alt="" />
            <div>북마크</div>
          </ImgAndDiv>
          <ImgAndDiv>
            <img src={nocomment} alt="" />
            <div>내 답변 10</div>
          </ImgAndDiv>
          <ImgAndDiv>
            <img src={mypagenolike} alt="" />
            <div>좋아요</div>
          </ImgAndDiv>
        </ImgTag>
      </MyPicture>
      <Hr />
      <ViewBox>
        <MypageBookMark />
      </ViewBox>
    </MyViewAll>
  );
};

export default MyView;

const MyViewAll = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.color.mypageBackGround};
  h3 {
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }
`;

const MyPicture = styled.div`
  width: 100%;
  height: 30%;
  padding-top: 10%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.color.white};
  border-bottom: 3px solid ${(props) => props.theme.color.lightGray};
`;

const ViewBox = styled.div`
  height: 48%;
  background-color: ${(props) => props.theme.color.white};
`;

const Profile = styled.div`
  width: 100%;
  height: 30%;
  img {
    display: flex;
    margin: 0 auto;
    width: 20%;
    height: 100%;
    border: 1px solid ${(props) => props.theme.color.black};
    border-radius: 10px;
  }
`;

const ImgTag = styled.div`
  width: 80%;
  height: 20%;
  margin: 19% auto 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  img {
    width: 25px;
  }
`;

const ImgAndDiv = styled.div`
  /* height: 10%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    /* padding-bottom: 17%; */
    border-bottom: 5px solid ${(props) => props.theme.color.bookmarkPurple};
  }
`;
