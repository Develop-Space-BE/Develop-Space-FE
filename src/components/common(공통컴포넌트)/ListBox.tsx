import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const ListBox: React.FC<Props> = ({ children }) => {
  return <ListView>{children}</ListView>;
};

export default ListBox;

const ListView = styled.div`
  width: 90%;
  height: 120px;
  margin: 5% auto 0;
  border: 1px solid ${(props) => props.theme.color.listWhite};
  border-radius: 15px;
  box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.2);
`;
