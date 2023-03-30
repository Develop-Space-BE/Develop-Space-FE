import React, { useState } from "react";
import styled from "styled-components";
import useIntersectionObserver from "../../\bhook/infinity";
import {
  attitude,
  backend,
  frontend,
  noattitude,
  nobackend,
  nobookmark,
  node,
  nofrontend,
  nonode,
  noreact,
  nospring,
  novue,
  react,
  spring,
  vue,
} from "../../asset/pic";
import { useAppDispatch } from "../../redux/config/configStore";
import { __getMainList } from "../../redux/modules/mainList";
import ListBox from "../common(공통컴포넌트)/ListBox";

const List = () => {
  const dispatch = useAppDispatch();
  const [attitudes, setAttitudes] = useState<boolean>(true);
  const [frontEnds, setFrontEnds] = useState<boolean>(false);
  const [backEnds, setBackEnds] = useState<boolean>(false);
  const [reactView, setReactView] = useState<boolean>(true);
  const [vueView, setVueView] = useState<boolean>(false);
  const [springView, setSpringView] = useState<boolean>(true);
  const [nodeView, setNodeView] = useState<boolean>(false);

  const datas = [
    {
      id: 1,
      text: "1안녕",
    },
    {
      id: 2,
      text: "2안녕",
    },
    {
      id: 3,
      text: "3안녕",
    },
    {
      id: 4,
      text: "4안녕",
    },
    {
      id: 5,
      text: "5안녕",
    },
    {
      id: 6,
      text: "6안녕",
    },
    {
      id: 7,
      text: "7안녕",
    },
    {
      id: 8,
      text: "8안녕",
    },
    {
      id: 9,
      text: "9안녕",
    },
    {
      id: 10,
      text: "10안녕",
    },
  ];

  const [data, setData] = useState<{ id: number; text: string }[]>(
    datas.slice(0, 5)
  );
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [itemIndex, setItemIndex] = useState<number>(0);

  const onClickBigList = (at: boolean, fe: boolean, be: boolean): void => {
    setAttitudes(at);
    setFrontEnds(fe);
    setBackEnds(be);
  };

  const onClickFE = (Re: boolean, Ve: boolean): void => {
    setReactView(Re);
    setVueView(Ve);
    if (Re === true) {
      dispatch(__getMainList("FRONTEND"));
    } else {
      dispatch(__getMainList("VUE"));
    }
  };

  const onClickBE = (Sp: boolean, Nd: boolean): void => {
    setSpringView(Sp);
    setNodeView(Nd);
  };

  const testFetch = (delay = 5000) => {
    new Promise((res) => setTimeout(res, delay));
  };

  const getMoreItem = async () => {
    setIsLoaded(true);
    await testFetch();
    setData(data.concat(datas.slice(itemIndex, itemIndex + 1)));
    setItemIndex((i) => i + 1);
    setIsLoaded(false);
  };

  const onIntersect: IntersectionObserverCallback = async (
    [entry],
    observer
  ) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  const { setTarget } = useIntersectionObserver({
    root: null,
    rootMargin: "1px",
    threshold: 0.5,
    onIntersect,
  });

  return (
    <div>
      <ListChoose>
        <img
          src={attitudes ? attitude : noattitude}
          alt="공통"
          onClick={() => onClickBigList(true, false, false)}
        />
        <img
          src={frontEnds ? frontend : nofrontend}
          alt="프론트엔드"
          onClick={() => onClickBigList(false, true, false)}
        />
        <img
          src={backEnds ? backend : nobackend}
          alt="백엔드"
          onClick={() => onClickBigList(false, false, true)}
        />
      </ListChoose>
      <ListCheck>
        {frontEnds ? (
          <>
            <img
              src={reactView ? react : noreact}
              alt="선택"
              onClick={() => onClickFE(true, false)}
            />
            <img
              src={vueView ? vue : novue}
              alt="선택"
              onClick={() => onClickFE(false, true)}
            />
          </>
        ) : (
          ""
        )}
        {backEnds ? (
          <>
            <img
              src={springView ? spring : nospring}
              alt="선택"
              onClick={() => onClickBE(true, false)}
            />
            <img
              src={nodeView ? node : nonode}
              alt="선택"
              onClick={() => onClickBE(false, true)}
            />
          </>
        ) : (
          ""
        )}
      </ListCheck>
      {frontEnds || backEnds ? <Hr /> : ""}
      {data.map((data, index) => (
        <ListBox key={index}>
          <MainList>
            <img src={nobookmark} alt="북마크" />
            <div>{data.text}</div>
          </MainList>
        </ListBox>
      ))}
      <div ref={setTarget}>{isLoaded && <div>Loding...</div>}</div>
    </div>
  );
};

export default List;

const ListChoose = styled.div`
  margin: 0 auto 5%;
  width: 90%;
  display: flex;
  justify-content: space-between;
  img {
    width: 100px;
    height: 30px;
  }
`;

const ListCheck = styled.div`
  margin: 0 auto;
  width: 75%;
  display: flex;
  justify-content: space-around;
`;

const Hr = styled.hr`
  color: ${(props) => props.theme.color.lightGray};
`;

const MainList = styled.div`
  img {
    margin-left: 88%;
    width: 20px;
  }
  div {
    margin: 0 10%;
  }
`;
