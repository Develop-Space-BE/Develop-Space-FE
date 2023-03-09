import React from "react";
import styled from "styled-components";
import {
  attitude,
  backend,
  frontend,
  noattitude,
  nobackend,
  nobookmark,
  nofrontend,
} from "../../asset/pic";
import ListBox from "../common(공통컴포넌트)/ListBox";

const List = () => {
  return (
    <div>
      <ListChoose>
        <img src={attitude} alt="공통" />
        <img src={nofrontend} alt="프론트엔드" />
        <img src={nobackend} alt="백엔드" />
      </ListChoose>
      <ListCheck>
        <h3>All</h3>
      </ListCheck>
      <Hr />
      <ListBox>
        <MainList>
          <img src={nobookmark} alt="북마크" />
          <div>Q. 질문~~~~~~~</div>
        </MainList>
      </ListBox>
      <ListBox>
        <MainList>
          <img src={nobookmark} alt="북마크" />
          <div>Q. 질문~~~~~~~</div>
        </MainList>
      </ListBox>
      <ListBox>
        <MainList>
          <img src={nobookmark} alt="북마크" />
          <div>Q. 질문~~~~~~~</div>
        </MainList>
      </ListBox>
      <ListBox>
        <MainList>
          <img src={nobookmark} alt="북마크" />
          <div>Q. 질문~~~~~~~</div>
        </MainList>
      </ListBox>
    </div>
  );
};

export default List;

const ListChoose = styled.div`
  margin: 0 auto 3%;
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

const ListCheck = styled.div`
  display: flex;
  justify-content: center;
  h3 {
    border-bottom: 3px solid ${(props) => props.theme.color.bookmarkPurple};
  }
`;

const Hr = styled.hr`
  color: ${(props) => props.theme.color.lightGray};
`;

const MainList = styled.div`
  img {
    margin-left: 85%;
    width: 18px;
  }
  div {
    margin: 0 10%;
  }
`;
