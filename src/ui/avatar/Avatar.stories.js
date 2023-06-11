import { Avatar } from "./Avatar";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Design System/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const WithoutImg = {
  args: {
    last_name: "Doe",
    first_name: "John",
    status: 3,
  },
};

export const WithoutStatus = {
  args: {
    url: "https://github.com/nicolasdelp.png",
    last_name: "Doe",
    first_name: "John",
  },
};

export const Offline = {
  args: {
    url: "https://github.com/nicolasdelp.png",
    last_name: "Doe",
    first_name: "John",
    status: 1,
  },
};

export const Occuped = {
  args: {
    url: "https://github.com/nicolasdelp.png",
    last_name: "Doe",
    first_name: "John",
    status: 2,
  },
};

export const Online = {
  args: {
    url: "https://github.com/nicolasdelp.png",
    last_name: "Doe",
    first_name: "John",
    status: 3,
  },
};
