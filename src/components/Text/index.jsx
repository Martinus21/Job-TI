import React from "react";

const sizeClasses = {
  txtOpenSansRomanRegular12Gray900: "font-normal font-opensans",
  txtOpenSansRomanRegular12Gray800: "font-normal font-opensans",
  txtOpenSansRomanSemiBold20: "font-opensans font-semibold",
  txtOpenSansRomanRegular16Gray900: "font-normal font-opensans",
  txtOpenSansRomanRegular14Gray600: "font-normal font-opensans",
  txtOpenSansSemiBold18: "font-opensans font-semibold",
  txtOpenSansRomanBold14: "font-bold font-opensans",
  txtOpenSansSemiBold12: "font-opensans font-semibold",
  txtHarabaraMaisDemoRegular30: "font-harabaramaisdemo font-normal",
  txtOpenSansRomanBold14Bluegray900: "font-bold font-opensans",
  txtOpenSansRomanSemiBold18: "font-opensans font-semibold",
  txtOxygenBold28: "font-bold font-oxygen",
  txtOpenSansBold18: "font-bold font-opensans",
  txtOpenSansRomanRegular12Indigo900: "font-normal font-opensans",
  txtOpenSansRomanRegular14WhiteA700: "font-normal font-opensans",
  txtOxygenBold20: "font-bold font-oxygen",
  txtOpenSansRegular16: "font-normal font-opensans",
  txtOpenSansRomanSemiBold30: "font-opensans font-semibold",
  txtOpenSansRomanRegular16: "font-normal font-opensans",
  txtOpenSansRomanSemiBold36: "font-opensans font-semibold",
  txtOpenSansRomanSemiBold14: "font-opensans font-semibold",
  txtOxygenBold24: "font-bold font-oxygen",
  txtOpenSansRomanRegular18: "font-normal font-opensans",
  txtOpenSansRomanSemiBold12: "font-opensans font-semibold",
  txtOpenSansRomanRegular12: "font-normal font-opensans",
  txtOpenSansRomanRegular14: "font-normal font-opensans",
  txtOpenSansSemiBold22: "font-opensans font-semibold",
  txtOxygenBold24WhiteA700: "font-bold font-oxygen",
  txtOpenSansRomanSemiBold12Gray900: "font-opensans font-semibold",
  txtOpenSansRomanSemiBold20WhiteA700: "font-opensans font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
