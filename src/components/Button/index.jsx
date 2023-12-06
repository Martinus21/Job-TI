import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded-md" };
const variants = {
  fill: {
    gray_200_01: "bg-gray-200_01",
    gray_100_01: "bg-gray-100_01",
    blue_gray_100_01: "bg-blue_gray-100_01 text-gray-600",
    indigo_900: "bg-indigo-900",
    blue_50: "bg-blue-50",
    red_A700: "bg-red-A700 text-white-A700",
  },
  outline: {
    indigo_900: "border border-indigo-900 border-solid",
    gray_900: "border border-gray-900 border-solid text-gray-900",
  },
};
const sizes = { xs: "p-1", sm: "p-[7px]", md: "p-3" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "gray_200_01",
    "gray_100_01",
    "blue_gray_100_01",
    "indigo_900",
    "blue_50",
    "red_A700",
    "gray_900",
  ]),
};

export { Button };
