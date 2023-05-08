import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { back } from "../../asset/pic";
import { useAppDispatch } from "../../redux/config/configStore";
import { __postWriteContent } from "../../redux/modules/myPageSet";

const QuestionAdd = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [firstCategory, setFirstCategory] = useState<string>("FRONTEND");
  const [secondCategory, setSecondCategory] = useState<string>("React");
  const [contents, setContents] = useState<string>("");
  const writeData = {
    category: firstCategory,
    content: contents,
    subcategory: secondCategory,
  };
  const onContentSave = () => {
    dispatch(__postWriteContent(writeData));
    navigate("/mainlist");
  };

  return (
    <AA>
      <Hr3 />
      <Head>
        <img src={back} alt="뒤로가기" />
        <Ad>질문 작성</Ad>
      </Head>
      <Cat onChange={(e) => setFirstCategory(e.target.value)}>
        <option value="FRONTEND">front-end</option>
        <option value="BACKEND">back-end</option>
        <option value="ATTITUDE">attitude</option>
      </Cat>
      <Cat onChange={(e) => setSecondCategory(e.target.value)}>
        <option value="React">React</option>
        <option value="VUE">Vue</option>
        <option value="ATTITUDE">attitude</option>
        <option value="SPRING">spring</option>
        <option value="NODE">node</option>
      </Cat>
      <QBox
        placeholder="입력하기"
        onChange={(e) => setContents(e.target.value)}
      ></QBox>
      <BtnBox>
        <XBtn>취소</XBtn>
        <SaveBtn onClick={onContentSave}>저장</SaveBtn>
      </BtnBox>
    </AA>
  );
};

export default QuestionAdd;

const AA = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.color.lightGray};
`;

const Hr3 = styled.hr`
  height: 40px;
  border: none;
`;

const Head = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-weight: 700;
  border: none;
  background-color: white;
`;

const Ad = styled.div`
  margin-right: 155px;
`;

const Cat = styled.select`
  display: flex;
  align-items: center;
  margin: 15px 35px 0px 35px;
  padding: 0 10px;
  width: 342px;
  height: 40px;
  border: 1px solid ${(props) => props.theme.color.listWhite};
  border-radius: 15px;
  box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
`;

const QName = styled.input`
  display: flex;
  align-items: center;
  margin: 15px 35px 0px 35px;
  padding-left: 25px;
  width: 342px;
  height: 40px;
  color: ${(props) => props.theme.color.Gray};
  border: 1px solid ${(props) => props.theme.color.listWhite};
  border-radius: 15px;
  box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
`;

const QBox = styled.textarea`
  display: flex;
  margin: 15px 35px 0px 35px;
  padding: 25px 25px 0px 25px;
  width: 342px;
  height: 300px;
  border: 1px solid ${(props) => props.theme.color.listWhite};
  border-radius: 15px;
  box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.2);
`;

const BtnBox = styled.div`
  width: 90%;
  margin: 15px 0px 0px 0px;
  display: flex;
  justify-content: flex-end;
`;

const XBtn = styled.button`
  width: 70px;
  height: 30px;
  color: white;
  background-color: #999999;
  border: none;
  border-radius: 10px;
  margin-right: 15px;
`;

const SaveBtn = styled.button`
  width: 70px;
  height: 30px;
  color: white;
  background-color: black;
  border: none;
  border-radius: 10px;
`;
