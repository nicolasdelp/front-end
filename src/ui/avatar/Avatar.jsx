import React from "react";
import PropTypes from "prop-types";

export const Avatar = ({ url, last_name, first_name, status, ...props }) => {
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
      <div class="relative">
        <img
          class="h-10 w-10 rounded-full"
          src={url}
          alt={last_name + " " + first_name}
        />
        {status ? (
          <span
            className={`absolute bottom-0 left-7 h-3.5 w-3.5 rounded-full border-2 border-white ${statusSwitch(
              status
            )}`}
          />
        ) : null}
      </div>
    );
  } else {
    return (
      <div class="relative">
        <div class="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
          <span class="font-medium text-gray-600 dark:text-gray-300">
            {last_name.toUpperCase().charAt(0) +
              first_name.toUpperCase().charAt(0)}
          </span>
        </div>
        {status ? (
          <span
            className={`absolute bottom-0 left-7 h-3.5 w-3.5 rounded-full border-2 border-white ${statusSwitch(
              status
            )}`}
          />
        ) : null}
      </div>
    );
  }
};

Avatar.propTypes = {
  url: PropTypes.string,
  last_name: PropTypes.string,
  first_name: PropTypes.string,
  status: PropTypes.number,
};

Avatar.defaultProps = {
  last_name: "Doe",
  first_name: "John",
};
