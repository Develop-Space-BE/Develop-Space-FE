import React from "react";
import Header from "../components/common(공통컴포넌트)/Header";
import SetView from "../components/setpage/SetView";
import { Contain } from "./Home";

const Setting = () => {
  return (
    <Contain>
      <Header />
      <SetView />
    </Contain>
  );
};

export default Setting;
