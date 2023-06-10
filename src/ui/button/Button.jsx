import React from "react";
import PropTypes from "prop-types";
import { IconLoader2 } from "@tabler/icons-react";

export const Button = ({
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

  function textSize(size) {
    switch (size) {
      case "sm":
        return "text-xs";
      case "md":
        return "text-sm";
      case "lg":
        return "text-base";
      default:
        return "text-sm";
    }
  }

  function buttonAppearance(appearance) {
    switch (appearance) {
      case "primary":
        return `text-white bg-[#222222] enabled:hover:bg-[#000000] enabled:active:bg-[#222222] ${
          processing
            ? "disabled:!text-white"
            : "disabled:!text-gray-400 disabled:bg-white"
        }`;
      case "secondary":
        return `text-black bg-gray-100 enabled:hover:bg-gray-200 enabled:active:bg-gray-300 ${
          processing
            ? "disabled:!text-black"
            : "disabled:!text-gray-400 disabled:bg-gray-50"
        }`;
      case "outline":
        return `text-black bg-white enabled:hover:bg-gray-100 enabled:active:bg-gray-200 ${
          processing
            ? "disabled:!text-black"
            : "disabled:!text-gray-400 disabled:bg-gray-50"
        }`;
      case "success":
        return `text-white bg-green-600 enabled:hover:bg-green-700 enabled:active:bg-green-800 ${
          processing
            ? "disabled:!text-white"
            : "disabled:!text-gray-400 disabled:bg-gray-50"
        }`;
      case "info":
        return `text-white bg-blue-600 enabled:hover:bg-blue-700 enabled:active:bg-blue-800 ${
          processing
            ? "disabled:!text-white"
            : "disabled:!text-gray-400 disabled:bg-gray-50"
        }`;
      case "warning":
        return `text-white bg-orange-600 enabled:hover:bg-orange-700 enabled:active:bg-orange-800 ${
          processing
            ? "disabled:!text-white"
            : "disabled:!text-gray-400 disabled:bg-gray-50"
        }`;
      case "danger":
        return `text-white bg-red-600 enabled:hover:bg-red-700 enabled:active:bg-red-800 ${
          processing
            ? "disabled:!text-white"
            : "disabled:!text-gray-400 disabled:bg-gray-50"
        }`;
      default:
        return `text-black bg-white enabled:hover:bg-gray-100 enabled:active:bg-gray-200 ${
          processing
            ? "disabled:!text-white"
            : "disabled:!text-gray-400 disabled:bg-gray-50"
        }`;
    }
  }

  return (
    <button
      type="button"
      className={`flex select-none items-center justify-center rounded-md border px-5 py-2 font-medium outline-offset-4 outline-black focus:outline-2 ${textSize(
        size
      )} ${buttonAppearance(appearance)}`}
      disabled={disabled || processing}
      {...props}
    >
      {processing ? (
        <IconLoader2
          className={`animate-spin motion-reduce:hidden ${iconSize(size)}`}
        />
      ) : (
        <div className="flex items-center justify-center">
          {icon ? (
            <div className={`mr-1.5 ${iconSize(size)}`}>{icon}</div>
          ) : null}
          {label}
        </div>
      )}
    </button>
  );
};

Button.propTypes = {
  appearance: PropTypes.oneOf([
    "primary",
    "secondary",
    "outline",
    "success",
    "info",
    "warning",
    "danger",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  processing: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  size: "md",
  disabled: false,
  processing: false,
  onClick: undefined,
};
