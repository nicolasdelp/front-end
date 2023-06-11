import React from "react";
import PropTypes from "prop-types";

export const Avatar = ({
  url,
  size,
  last_name,
  first_name,
  status,
  ...props
}) => {
  function imgSize(size) {
    switch (size) {
      case "sm":
        return "h-8 w-8";
      case "md":
        return "h-10 w-10";
      case "lg":
        return "h-12 w-12";
      default:
        return "h-10 w-10";
    }
  }

  function statusSize(size) {
    switch (size) {
      case "sm":
        return "left-5 h-3 w-3";
      case "md":
        return "left-7 h-3.5 w-3.5";
      case "lg":
        return "left-8 h-4 w-4";
      default:
        return "left-7 h-3.5 w-3.5";
    }
  }

  function textSize(size) {
    switch (size) {
      case "sm":
        return "text-xs";
      case "md":
        return "text-sm";
      case "lg":
        return "text-lg";
      default:
        return "text-sm";
    }
  }

  function statusSwitch(status) {
    switch (status) {
      case 1:
        return "!bg-gray-300";
      case 2:
        return "!bg-orange-500";
      case 3:
        return "!bg-green-500";
      default:
        return "!bg-gray-300";
    }
  }

  if (url) {
    return (
      <div className="relative">
        <img
          className={`${imgSize(size)} rounded-full border-2 border-white`}
          src={url}
          alt={last_name + " " + first_name}
        />
        {status ? (
          <span
            className={`absolute bottom-0 ${statusSize(
              size
            )} rounded-full border-2 border-white ${statusSwitch(status)}`}
          />
        ) : null}
      </div>
    );
  } else {
    return (
      <div className="relative">
        <div
          className={`relative inline-flex ${imgSize(
            size
          )} items-center justify-center overflow-hidden rounded-full border-2 border-white bg-gray-100`}
        >
          <span className={`${textSize(size)} font-semibold text-gray-600`}>
            {last_name.toUpperCase().charAt(0) +
              first_name.toUpperCase().charAt(0)}
          </span>
        </div>
        {status ? (
          <span
            className={`absolute bottom-0 ${statusSize(
              size
            )} rounded-full border-2 border-white ${statusSwitch(status)}`}
          />
        ) : null}
      </div>
    );
  }
};

Avatar.propTypes = {
  url: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  last_name: PropTypes.string,
  first_name: PropTypes.string,
  status: PropTypes.number,
};

Avatar.defaultProps = {
  size: "md",
  last_name: "Doe",
  first_name: "John",
};
