import React, { useState } from "react";
import styled from "styled-components";
import {
  chart,
  nocomment,
  mypagenobookmark,
  mypagenolike,
  nochart,
  comment,
  mypagebookmark,
  mypagelike,
} from "../../asset/pic";
import Hr from "../common(공통컴포넌트)/Hr";
import Profile from "../common(공통컴포넌트)/Profile";
import MypageBCL from "./MypageBCL";
import MypageChart from "./MypageChart";

const MyView = () => {
  const [chartP, setChartP] = useState<boolean>(true);
  const [bookmarkP, setBookmarkP] = useState<boolean>(false);
  const [commentP, setCommentP] = useState<boolean>(false);
  const [likeP, setLikeP] = useState<boolean>(false);
  const onClickMypage = (
    ct: boolean,
    bm: boolean,
    cm: boolean,
    lk: boolean
  ): void => {
    setChartP(ct);
    setBookmarkP(bm);
    setCommentP(cm);
    setLikeP(lk);
  };
  return (
    <MyViewAll>
      {/* <Hr /> */}
      <MyPicture>
        <Profile />
        <h3>뭘보노</h3>
        <ImgTag>
          <ImgAndDiv onClick={() => onClickMypage(true, false, false, false)}>
            <img src={chartP ? chart : nochart} alt="차트" />
          </ImgAndDiv>
          <ImgAndDiv onClick={() => onClickMypage(false, true, false, false)}>
            <img
              src={bookmarkP ? mypagebookmark : mypagenobookmark}
              alt="북마크"
            />
          </ImgAndDiv>
          <ImgAndDiv onClick={() => onClickMypage(false, false, true, false)}>
            <img src={commentP ? comment : nocomment} alt="댓글" />
          </ImgAndDiv>
          <ImgAndDiv onClick={() => onClickMypage(false, false, false, true)}>
            <img src={likeP ? mypagelike : mypagenolike} alt="좋아요" />
          </ImgAndDiv>
        </ImgTag>
      </MyPicture>
      <Hr />
      <ViewBox>
        {chartP ? <MypageChart /> : ""}
        {bookmarkP || commentP || likeP ? (
          <MypageBCL bookmarkP={bookmarkP} commentP={commentP} likeP={likeP} />
        ) : (
          ""
        )}
      </ViewBox>
    </MyViewAll>
  );
};

export default MyView;

const MyViewAll = styled.div`
  width: 100%;
  h3 {
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }
`;

const MyPicture = styled.div`
  width: 100%;
  padding-top: 10%;
  margin: 0 auto;
`;

const ViewBox = styled.div`
  height: 50%;
  background-color: ${(props) => props.theme.color.white};
`;

const ImgTag = styled.div`
  width: 80%;
  height: 30%;
  margin: 9.5% auto 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const ImgAndDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
