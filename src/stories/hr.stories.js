import React from "react";
import Hr from "../components/common(공통컴포넌트)/Hr";

const Template = (args) => <Hr {...args} />;

export default {
  component: Hr,
  title: "Hr",
};

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "test",
    state: "Test",
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};
