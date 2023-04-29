import React, { useState } from "react";
import { detaillike, detailnolike } from "../../asset/pic";
import { DetailData } from "../../models/Detail";
import { useAppDispatch } from "../../redux/config/configStore";
import { __postAnswerLike } from "../../redux/modules/detailAnswer";

const MypageLike = ({ data }: { data: DetailData }) => {
  console.log(data);
  const dispatch = useAppDispatch();
  const [likeCheck, setLikeCheck] = useState<boolean>(data.liked);
  return (
    <>
      <h4>{data.nickname}</h4>
      <img
        src={likeCheck ? detaillike : detailnolike}
        alt="별"
        onClick={() => {
          setLikeCheck(!likeCheck);
          dispatch(__postAnswerLike(data.id));
        }}
      />
    </>
  );
};

export default MypageLike;
