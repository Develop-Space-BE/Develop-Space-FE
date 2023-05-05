import React from "react";
import { useNavigate } from "react-router-dom";

import { Comment } from "../../models/MypageType";
import { CommentLike, MainList } from "./MypageBCL";

const MypageMyAnswerList = ({ data }: { data: Comment }) => {
  console.log(data);
  const navigate = useNavigate();
  const goWayDetail = () => {
    // 수정해야 할 부분입니다.
    navigate(`/${data.id}`);
  };
  return (
    <div onClick={() => goWayDetail()}>
      <MainList>
        <CommentLike>
          <h4>Q. {data.content}</h4>
          <h6>{data.answer}</h6>
        </CommentLike>
      </MainList>
    </div>
  );
};

export default MypageMyAnswerList;
