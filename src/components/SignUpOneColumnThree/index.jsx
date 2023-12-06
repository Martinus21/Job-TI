import React from "react";

import { Img, Text } from "../../components";

const SignUpOneColumnThree = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-center p-2.5 w-[360px] md:w-full">
            <div className="border border-gray-900 border-solid flex flex-row gap-5 h-[50px] md:h-auto items-center justify-center rounded-[12px] w-[360px] md:w-full">
              <Img
                className="h-9 md:h-auto object-cover w-9"
                src="images/img_rectangle9180.png"
                alt="rectangle9180"
              />
              <Text
                className="text-center text-gray-900 text-lg w-auto"
                size="txtOpenSansSemiBold18"
              >
                {props?.signuptext}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SignUpOneColumnThree.defaultProps = { signuptext: "Sign up with Google" };

export default SignUpOneColumnThree;
