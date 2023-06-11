import { ButtonIcon } from "./ButtonIcon";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Design System/Button Icon",
  component: ButtonIcon,
  tags: ["autodocs"],
  argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
  args: {
    size: "md",
    appearance: "default",
    onClick: undefined,
  },
};

export const WithoutBorder = {
  args: {
    size: "md",
    appearance: "default",
    border: false,
    onClick: undefined,
  },
};

export const Success = {
  args: {
    size: "md",
    appearance: "success",
    onClick: undefined,
  },
};

export const Info = {
  args: {
    size: "md",
    appearance: "info",
    onClick: undefined,
  },
};

export const Warning = {
  args: {
    size: "md",
    appearance: "warning",
    onClick: undefined,
  },
};

export const Danger = {
  args: {
    size: "md",
    appearance: "danger",
    onClick: undefined,
  },
};

export const Disabled = {
  args: {
    size: "md",
    onClick: undefined,
    disabled: true,
  },
};
