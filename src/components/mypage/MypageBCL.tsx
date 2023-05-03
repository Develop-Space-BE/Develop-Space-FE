import React from "react";
import styled from "styled-components";
import { nobookmark } from "../../asset/pic";
import { MypageProps } from "../../models/MypageType";
import { useAppSelector } from "../../redux/config/configStore";
import { myAnswerData, myLikeData } from "../../redux/modules/myPageSet";
import ListBox from "../common(공통컴포넌트)/ListBox";
import MypageLike from "./MypageLike";

const MypageBookMark: React.FC<MypageProps> = ({
  bookmarkP,
  commentP,
  likeP,
}) => {
  const myAnswerDatas = useAppSelector(myAnswerData);
  const myLikeDatas = useAppSelector(myLikeData);
  const a = myAnswerDatas.length;
  const b = myLikeDatas.length;

  console.log(a);
  console.log(b);
  return (
    <BookMarkDiv>
      <h5>
        {bookmarkP ? "북마크" : ""}
        {commentP ? "내 답변" : ""}
        {likeP ? "즐겨찾기" : ""}
      </h5>
      {bookmarkP
        ? myAnswerDatas.map((data, index) => (
            <ListBox key={index}>
              <MainList>
                <MainListImg src={nobookmark} alt="북마크" />
                <h4>{data.content}</h4>
              </MainList>
            </ListBox>
          ))
        : ""}

      {commentP
        ? myAnswerDatas.map((data, index) => (
            <ListBox key={index}>
              <MainList>
                <CommentLike>
                  <h4>Q. {data.content}</h4>
                  <h6>{data.answer}</h6>
                </CommentLike>
              </MainList>
            </ListBox>
          ))
        : ""}
      {likeP
        ? myLikeDatas.map((data, index) => (
            <ListBox key={index}>
              <MainList>
                <CommentLike>
                  <RowDiv>
                    <MypageLike data={data} />
                  </RowDiv>
                  <RowDiv2>
                    <h6>{data.answer}</h6>
                    <p>좋아요 {data.likeCount}</p>
                  </RowDiv2>
                </CommentLike>
              </MainList>
            </ListBox>
          ))
        : ""}
    </BookMarkDiv>
  );
};

export default MypageBookMark;

const BookMarkDiv = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  h5 {
    width: 90%;
    display: flex;
    margin: 5% auto 0;
    justify-content: flex-start;
  }
`;

export const MainList = styled.div`
  h4 {
    margin: -2% 5% 0;
  }
  h6 {
    padding-left: 5%;
    margin: 3% auto 0;
  }
`;

const MainListImg = styled.img`
  margin-left: 85%;
  width: 18px;
`;

export const CommentLike = styled.div`
  padding-top: 7%;
  img {
    margin-top: -3%;
    display: flex;
    justify-content: center;
  }
`;

export const RowDiv = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
`;

export const RowDiv2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  h6 {
    width: 85%;
  }
  p {
    width: 50px;
    margin-right: 2%;
    display: flex;
    justify-content: center;
    font-size: 10px;
  }
`;
