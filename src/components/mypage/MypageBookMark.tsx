import React from "react";
import styled from "styled-components";
import { nobookmark } from "../../asset/pic";
import ListBox from "../common(공통컴포넌트)/ListBox";

const MypageBookMark = () => {
  return (
    <BookMarkDiv>
      <h3>북마크</h3>
      <ListBox>
        <MainList>
          <img src={nobookmark} alt="북마크" />
          <div>Q. 질문~~~~~Q. 질문~~~~~~~Q. 질문~~~~~~~Q. 질문~~~~~~~</div>
          <p>키워드</p>
        </MainList>
      </ListBox>
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
  h3 {
    width: 80%;
    display: flex;
    margin: 5% auto 0;
  }
`;

const MainList = styled.div`
  position: relative;
  img {
    margin-left: 85%;
    width: 18px;
  }
  div {
    margin: 0 10%;
  }
  p {
    margin: 0 10%;
    position: absolute;
  }
`;
