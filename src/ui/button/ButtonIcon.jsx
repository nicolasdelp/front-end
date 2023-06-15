import React from "react";
import PropTypes from "prop-types";
import { Icon360View, IconLoader2 } from "@tabler/icons-react";

export const ButtonIcon = ({
  size,
  appearance,
  label,
  icon,
  border,
  disabled,
  processing,
  ...props
}) => {
  function iconSize(size) {
    switch (size) {
      case "sm":
        return "h-4 w-4";
      case "md":
        return "h-5 w-5";
      case "lg":
        return "h-6 w-6";
      default:
        return "h-5 w-5";
    }
  }

  function buttonAppearance(appearance) {
    switch (appearance) {
      case "default":
        return `!text-black ${!border ? "enabled:hover:!text-gray-900" : ""} ${
          processing ? "" : "disabled:!text-gray-400"
        }`;
      case "success":
        return `!text-green-600 ${
          !border ? "enabled:hover:!text-green-700" : ""
        } ${processing ? "" : "disabled:!text-gray-400"}`;
      case "info":
        return `!text-blue-600 ${
          !border ? "enabled:hover:!text-blue-700" : ""
        } ${processing ? "" : "disabled:!text-gray-400"}`;
      case "warning":
        return `!text-orange-600 ${
          !border ? "enabled:hover:!text-orange-700" : ""
        } ${processing ? "" : "disabled:!text-gray-400"}`;
      case "danger":
        return `!text-red-600 ${!border ? "enabled:hover:!text-red-700" : ""} ${
          processing ? "" : "disabled:!text-gray-400"
        }`;
      default:
        return `!text-black ${!border ? "enabled:hover:!text-gray-900" : ""} ${
          processing ? "" : "disabled:!text-gray-400"
        }`;
    }
  }

  return (
    <button
      type="button"
      className={`flex select-none items-center justify-center rounded-md ${
        border
          ? "border bg-white p-2 enabled:hover:bg-gray-50 enabled:active:bg-gray-100"
          : ""
      } outline-offset-4 outline-black focus:outline-2 ${buttonAppearance(
        appearance
      )}`}
      disabled={disabled || processing}
      {...props}
    >
      {processing ? (
        <IconLoader2
          className={`${iconSize(size)} animate-spin motion-reduce:hidden`}
        />
      ) : (
        <div className={`${iconSize(size)}`}>
          <Icon360View className="h-full w-full" />
        </div>
      )}
    </button>
  );
};

ButtonIcon.propTypes = {
  appearance: PropTypes.oneOf([
    "default",
    "success",
    "info",
    "warning",
    "danger",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  border: PropTypes.bool,
  disabled: PropTypes.bool,
  processing: PropTypes.bool,
  onClick: PropTypes.func,
};

ButtonIcon.defaultProps = {
  size: "md",
  border: false,
  disabled: false,
  processing: false,
  onClick: undefined,
};
