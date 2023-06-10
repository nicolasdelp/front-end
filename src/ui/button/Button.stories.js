import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Design System/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    size: "md",
    appearance: "primary",
    label: "Primary",
    onClick: undefined,
  },
};

export const Secondary = {
  args: {
    size: "md",
    appearance: "secondary",
    label: "Secondary",
    onClick: undefined,
  },
};

export const Outline = {
  args: {
    size: "md",
    appearance: "outline",
    label: "Outline",
    onClick: undefined,
  },
};

export const Success = {
  args: {
    size: "md",
    appearance: "success",
    label: "Success",
    onClick: undefined,
  },
};

export const Info = {
  args: {
    size: "md",
    appearance: "info",
    label: "Info",
    onClick: undefined,
  },
};

export const Warning = {
  args: {
    size: "md",
    appearance: "warning",
    label: "Warning",
    onClick: undefined,
  },
};

export const Danger = {
  args: {
    size: "md",
    appearance: "danger",
    label: "Danger",
    onClick: undefined,
  },
};

export const Disabled = {
  args: {
    size: "md",
    label: "Disabled",
    onClick: undefined,
    disabled: true,
  },
};
