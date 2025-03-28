import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Header } from "./Header";

const storyConfig = {
  title: "Components/Header",
  component: Header,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
};

export default storyConfig; 

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: "",
  overlapGroupClassName: "",
};
