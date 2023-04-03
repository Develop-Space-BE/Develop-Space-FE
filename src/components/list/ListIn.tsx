import React, { useState } from "react";
import styled from "styled-components";
import { bookmark, nobookmark } from "../../asset/pic";
import { MList } from "../../models/MainpageType";
import { useAppDispatch } from "../../redux/config/configStore";
import { __postBookMark } from "../../redux/modules/mainList";

const ListIn = ({ data }: { data: MList }) => {
  const dispatch = useAppDispatch();
  const [BMark, setBMark] = useState<boolean>(false);

  const dataID: string | number = data.id;

  const onClickBookmark = () => {
    setBMark(!BMark);
    dispatch(__postBookMark(dataID));
  };

  return (
    <MainList>
      <img
        src={BMark ? bookmark : nobookmark}
        alt="북마크"
        onClick={onClickBookmark}
      />
      <div>{data?.content}</div>
    </MainList>
  );
};

export default ListIn;

const MainList = styled.div`
  img {
    margin-left: 88%;
    width: 20px;
  }
  div {
    margin: 0 10%;
  }
`;
