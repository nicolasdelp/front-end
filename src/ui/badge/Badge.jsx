import React from "react";
import PropTypes from "prop-types";

export const Badge = ({ appearance, label, ...props }) => {
  function spanAppearance(appearance) {
    switch (appearance) {
      case "default":
        return `text-black bg-white border`;
      case "black":
        return `text-white bg-[#222222]`;
      case "gray":
        return `text-gray-800 bg-gray-100`;
      case "blue":
        return `text-blue-800 bg-blue-100`;
      case "red":
        return `text-red-800 bg-red-100`;
      case "green":
        return `text-green-800 bg-green-100`;
      case "yellow":
        return `text-yellow-800 bg-yellow-100`;
      case "indigo":
        return `text-indigo-800 bg-indigo-100`;
      case "purple":
        return `text-purple-800 bg-purple-100`;
      case "pink":
        return `text-pink-800 bg-pink-100`;
      default:
        return `text-black bg-white border`;
    }
  }

  return (
    <span
      className={`select-none rounded px-2 py-0.5 text-xs font-medium ${spanAppearance(
        appearance
      )}`}
      {...props}
    >
      {label}
    </span>
  );
};

Badge.propTypes = {
  appearance: PropTypes.oneOf([
    "default",
    "black",
    "gray",
    "blue",
    "red",
    "green",
    "yellow",
    "indigo",
    "purple",
    "pink",
  ]),
  label: PropTypes.string.isRequired,
};

Badge.defaultProps = {
  appearance: "secondary",
};
