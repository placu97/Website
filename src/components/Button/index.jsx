import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder20: "rounded-[20px]",
  RoundedBorder30: "rounded-[30px]",
  RoundedBorder24: "rounded-[24px]",
};
const variants = {
  GradientDeeppurple600Pink400: "bg-gradient  text-white_A700",
  FillRedA700: "bg-red_A700 text-white_A700",
  FillLightblue200: "bg-light_blue_200 text-gray_901",
  FillGray901: "bg-gray_901 text-gray_50",
};
const sizes = {
  sm: "px-[10px] py-[16px]",
  md: "p-[17px]",
  lg: "sm:pr-[20px] pr-[21px] py-[21px]",
  xl: "p-[28px] sm:px-[20px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
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
  shape: PropTypes.oneOf([
    "RoundedBorder20",
    "RoundedBorder30",
    "RoundedBorder24",
  ]),
  variant: PropTypes.oneOf([
    "GradientDeeppurple600Pink400",
    "FillRedA700",
    "FillLightblue200",
    "FillGray901",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};

Button.defaultProps = {
  className: "",
  shape: "RoundedBorder20",
  variant: "GradientDeeppurple600Pink400",
  size: "xl",
};
export { Button };
