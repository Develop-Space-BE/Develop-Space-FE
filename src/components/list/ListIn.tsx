import React, { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { bookmark, nobookmark } from "../../asset/pic";
import { MList } from "../../models/MainpageType";
import { useAppDispatch } from "../../redux/config/configStore";
import { __postBookMark } from "../../redux/modules/mainList";

const ListIn = ({ data }: { data: MList }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [BMark, setBMark] = useState<boolean>(false);
  const dataID: string | number = data.id;

  const onClickDetailPage = () => {
    navigate(`/detail/${data.subcategory}/${dataID}`);
  };

  const onClickBookmark = () => {
    setBMark(!BMark);
    dispatch(__postBookMark(dataID));
  };

  return (
    <BoxView>
      <MainList onClick={onClickDetailPage}>
        <div>{data?.content}</div>
      </MainList>
      <img
        src={BMark ? bookmark : nobookmark}
        alt="북마크"
        onClick={onClickBookmark}
      />
    </BoxView>
  );
};

export default ListIn;

const BoxView = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  img {
    margin-left: 88%;
    width: 20px;
    position: absolute;
    top: 0;
  }
`;

const MainList = styled.div`
  width: 100%;
  height: 100%;
  div {
    padding-top: 6%;
    margin: 0 10%;
  }
`;
