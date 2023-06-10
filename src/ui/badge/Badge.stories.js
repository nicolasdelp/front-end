import { Badge } from "./Badge";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Design System/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
  args: {
    appearance: "default",
    label: "Default",
  },
};

export const Black = {
  args: {
    appearance: "black",
    label: "Black",
  },
};

export const Gray = {
  args: {
    appearance: "gray",
    label: "Gray",
  },
};

export const Blue = {
  args: {
    appearance: "blue",
    label: "Blue",
  },
};

export const Red = {
  args: {
    appearance: "red",
    label: "Red",
  },
};

export const Green = {
  args: {
    appearance: "green",
    label: "Green",
  },
};

export const Yellow = {
  args: {
    appearance: "yellow",
    label: "Yellow",
  },
};

export const Indigo = {
  args: {
    appearance: "indigo",
    label: "Indigo",
  },
};

export const Purple = {
  args: {
    appearance: "purple",
    label: "Purple",
  },
};

export const Pink = {
  args: {
    appearance: "pink",
    label: "Pink",
  },
};
