import { AvatarGroup } from "./AvatarGroup";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Design System/Avatar Group",
  component: AvatarGroup,
  tags: ["autodocs"],
  argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
  args: {
    users: [
      { last_name: "Random", first_name: "Steve" },
      {
        url: "https://github.com/nicolasdelp.png",
        last_name: "Doe",
        first_name: "John",
      },
    ],
  },
};
