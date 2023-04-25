import React, { useState } from "react";
import styled from "styled-components";
import { detaillike, detailnolike, nobookmark } from "../../asset/pic";
import { MypageProps } from "../../models/MypageType";
import ListBox from "../common(공통컴포넌트)/ListBox";

const MypageBookMark: React.FC<MypageProps> = ({
  bookmarkP,
  commentP,
  likeP,
}) => {
  const [likeCheck, setLikeCheck] = useState<boolean>(false);

  const datas = [
    {
      id: 1,
      category: "ATTITUDE",
      content: "1",
    },
    {
      id: 2,
      category: "ATTITUDE",
      content: "2",
    },
    {
      id: 3,
      category: "ATTITUDE",
      content: "3",
    },
    {
      id: 4,
      category: "ATTITUDE",
      content: "4",
    },
    {
      id: 5,
      category: "ATTITUDE",
      content: "5",
    },
    {
      id: 6,
      category: "ATTITUDE",
      content: "6",
    },
    {
      id: 7,
      category: "ATTITUDE",
      content: "7",
    },
    {
      id: 8,
      category: "ATTITUDE",
      content: "8",
    },
    {
      id: 9,
      category: "ATTITUDE",
      content: "9",
    },
    {
      id: 10,
      category: "ATTITUDE",
      content: "10",
    },
    {
      id: 11,
      category: "ATTITUDE",
      content: "11",
    },
  ];

  return (
    <BookMarkDiv>
      <h5>
        {bookmarkP ? "북마크" : ""}
        {commentP ? "내 답변(0/30)" : ""}
        {likeP ? "즐겨찾기" : ""}
      </h5>
      {datas.map((data) => (
        <ListBox>
          <MainList>
            {bookmarkP ? (
              <>
                <MainListImg src={nobookmark} alt="북마크" />
                <h4>{data.content}</h4>
              </>
            ) : (
              ""
            )}
            {commentP ? (
              <CommentLike>
                <h4>Q. 질문 데이터 들어갈 자리</h4>
                <h6>내가 입력한 댓글?내용 자리</h6>
              </CommentLike>
            ) : (
              ""
            )}
            {likeP ? (
              <CommentLike>
                <RowDiv>
                  <h4>닉네임</h4>
                  <img
                    src={likeCheck ? detaillike : detailnolike}
                    alt="별"
                    onClick={() => setLikeCheck(!likeCheck)}
                  />
                </RowDiv>
                <RowDiv2>
                  <h6>
                    다른사람의다른사람의다른사람의다른사람의다른사람의다른사람의다른사람의
                    답변
                  </h6>
                  <p>좋아요 10</p>
                </RowDiv2>
              </CommentLike>
            ) : (
              ""
            )}
          </MainList>
        </ListBox>
      ))}
    </BookMarkDiv>
  );
};

export default MypageBookMark;

const BookMarkDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
