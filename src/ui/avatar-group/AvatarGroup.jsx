import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "../avatar/Avatar";

export const AvatarGroup = ({ users, size, linkMore, ...props }) => {
  function moreSize(size) {
    switch (size) {
      case "sm":
        return "h-8 w-8 text-xs";
      case "md":
        return "h-10 w-10 text-sm";
      case "lg":
        return "h-12 w-12 text-base";
      default:
        return "h-10 w-10 text-sm";
    }
  }
  return (
    <div className="flex -space-x-4">
      {users.map((user, key) => (
        <Avatar
          key={key}
          size={size}
          url={user.url}
          last_name={user.last_name}
          first_name={user.first_name}
        />
      ))}
      {users.length < 4 ? (
        <a
          className={`z-10 flex ${moreSize(
            size
          )} select-none items-center justify-center rounded-full border-2 border-white bg-gray-100 font-medium text-gray-600 ${
            linkMore ? "hover:bg-gray-300" : "cursor-default"
          }`}
          href={linkMore}
        >
          +{users.length}
        </a>
      ) : null}
    </div>
  );
};

AvatarGroup.propTypes = {
  users: PropTypes.array.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  linkMore: PropTypes.string,
};

AvatarGroup.defaultProps = {
  size: "md",
};
