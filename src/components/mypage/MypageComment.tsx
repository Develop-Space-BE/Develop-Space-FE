import React from "react";
import styled from "styled-components";
import ListBox from "../common(공통컴포넌트)/ListBox";

const MypageComment = () => {
  return (
    <CommentDiv>
      <ListBox>
        <div></div>
      </ListBox>
    </CommentDiv>
  );
};

export default MypageComment;

const CommentDiv = styled.div`
  width: 100%;
`;
