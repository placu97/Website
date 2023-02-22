import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  FillWhiteA700: "bg-white_A700",
  OutlineIndigo50: "bg-white_A700 border-[1px] border-indigo_50 border-solid",
};
const shapes = {
  RoundedBorder40: "rounded-[40px]",
  RoundedBorder30: "rounded-[30px]",
  RoundedBorder24: "rounded-[24px]",
};
const sizes = {
  sm: "pl-[11px] pr-[16px] py-[17px]",
  md: "sm:pr-[20px] pr-[32px] py-[32px]",
  lg: "pb-[31px] sm:pr-[20px] pr-[28px] pt-[35px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "RoundedBorder40",
    "RoundedBorder30",
    "RoundedBorder24",
  ]),
  variant: PropTypes.oneOf(["FillWhiteA700", "OutlineIndigo50"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "RoundedBorder40",
  variant: "FillWhiteA700",
  size: "md",
};

export { Input };
