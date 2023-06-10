import React from "react";
import PropTypes from "prop-types";
import { IconLoader2 } from "@tabler/icons-react";

export const ButtonIcon = ({
  size,
  appearance,
  label,
  icon,
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
        return `!text-black enabled:hover:bg-gray-100 enabled:active:bg-gray-200 ${
          processing ? "" : "disabled:!text-gray-400"
        }`;
      case "success":
        return `!text-green-600 enabled:hover:bg-green-50 enabled:active:bg-green-100 ${
          processing ? "" : "disabled:!text-gray-400"
        }`;
      case "info":
        return `!text-blue-600 enabled:hover:bg-blue-50 enabled:active:bg-blue-100 ${
          processing ? "" : "disabled:!text-gray-400"
        }`;
      case "warning":
        return `!text-orange-600 enabled:hover:bg-orange-50 enabled:active:bg-orange-100 ${
          processing ? "" : "disabled:!text-gray-400"
        }`;
      case "danger":
        return `!text-red-600 enabled:hover:bg-red-50 enabled:active:bg-red-100 ${
          processing ? "" : "disabled:!text-gray-400"
        }`;
      default:
        return `!text-black enabled:hover:bg-gray-100 enabled:active:bg-gray-200 ${
          processing ? "" : "disabled:!text-gray-400"
        }`;
    }
  }

  return (
    <button
      type="button"
      className={`flex select-none items-center justify-center rounded-md border bg-white p-2 font-medium outline-offset-4 outline-black focus:outline-2 ${buttonAppearance(
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
        <div className={`${iconSize(size)}`}>{icon}</div>
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
  disabled: PropTypes.bool,
  processing: PropTypes.bool,
  onClick: PropTypes.func,
};

ButtonIcon.defaultProps = {
  size: "md",
  disabled: false,
  processing: false,
  onClick: undefined,
};
