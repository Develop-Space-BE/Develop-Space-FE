import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import styled from "styled-components";
import { nobookmark } from "../../asset/pic";
import { MypageProps } from "../../models/MypageType";
import { useAppSelector } from "../../redux/config/configStore";
import { myAnswerData, myLikeData } from "../../redux/modules/myPageSet";
import ListBox from "../common(공통컴포넌트)/ListBox";
import MypageLike from "./MypageLike";
import MypageMyAnswerList from "./MypageMyAnswerList";

const MypageBookMark: React.FC<MypageProps> = ({
  bookmarkP,
  commentP,
  likeP,
}) => {
  const myAnswerDatas = useAppSelector(myAnswerData);
  const myLikeDatas = useAppSelector(myLikeData);

  const a = myAnswerDatas.length;
  const b = myLikeDatas.length;
  console.log(myAnswerDatas);
  console.log(myLikeDatas);

  return (
    <>
      {bookmarkP ? (
        <BookMarkDiv style={a > 3 ? { height: "100%" } : { height: "55.5vh" }}>
          <h5>{bookmarkP ? "북마크" : ""}</h5>
          {myAnswerDatas.map((data, index) => (
            <ListBox key={index}>
              <MainList>
                <MainListImg src={nobookmark} alt="북마크" />
                <h4>{data.content}</h4>
              </MainList>
            </ListBox>
          ))}
        </BookMarkDiv>
      ) : (
        ""
      )}

      {commentP ? (
        <BookMarkDiv style={a > 3 ? { height: "100%" } : { height: "55.5vh" }}>
          <h5>{commentP ? "내 답변" : ""}</h5>
          {myAnswerDatas.map((data, index) => (
            <ListBox key={index}>
              <MypageMyAnswerList data={data} />
            </ListBox>
          ))}
        </BookMarkDiv>
      ) : (
        ""
      )}
      {likeP ? (
        <BookMarkDiv style={b > 3 ? { height: "100%" } : { height: "55.5vh" }}>
          <h5>{likeP ? "즐겨찾기" : ""}</h5>
          {myLikeDatas.map((data, index) => (
            <ListBox key={index}>
              <MainList>
                <CommentLike>
                  <MypageLike data={data} />
                </CommentLike>
              </MainList>
            </ListBox>
          ))}
        </BookMarkDiv>
      ) : (
        ""
      )}
    </>
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
  padding-right: 5px;
  h6 {
    width: 85%;
    color: ${(props) => props.theme.color.fontColor};
  }
  p {
    width: 20%;
    display: flex;
    justify-content: right;
    font-size: 10px;
    color: ${(props) => props.theme.color.fontColor};
  }
`;

export const RowDiv2 = styled.div``;
