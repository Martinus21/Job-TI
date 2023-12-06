import React from "react";

import { Button, Img, Text } from "../../components";

import images1 from '../../images/img_notification.svg'

const ProfilePageAdminOneColumnrectangle9171 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-3 items-start justify-start w-full">
          <div className="flex flex-row gap-3 items-start justify-start w-full">
            <Text
              className="flex-1 text-2xl md:text-[22px] text-gray-900 text-justify sm:text-xl w-auto"
              size="txtOxygenBold24"
            >
              {props?.profilestatus}
            </Text>
          </div>
          {/* <div className="flex flex-col gap-[18px] items-center justify-center w-[437px] sm:w-full">
            <div className="flex flex-col gap-2 items-start justify-start w-full">
              <Text
                className="text-gray-900 text-justify text-xl w-auto"
                size="txtOxygenBold20"
              >
                {props?.intermediate}
              </Text>
              <Text
                className="text-base text-gray-900 text-justify w-auto"
                size="txtOpenSansRegular16"
              >
                {props?.complete2steps}
              </Text>
            </div>
            <div className="bg-blue_gray-100 flex flex-col items-start justify-start rounded-md shadow-bs w-full">
              <Text
                className="bg-red-A700 h-10 justify-center sm:px-5 px-[35px] py-1 rounded-md text-2xl md:text-[22px] text-justify text-white-A700 sm:text-xl w-[332px]"
                size="txtOxygenBold24WhiteA700"
              >
                {props?.groupsix}
              </Text>
            </div>
          </div> */}
        </div>
        <div className="flex sm:flex-col flex-row gap-3 items-start justify-center w-full">
          {/* <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
            <div className="flex flex-col gap-3 h-[340px] md:h-auto items-center justify-start w-[413px] sm:w-full">
              <div className="bg-gray-200_01 flex flex-col gap-[18px] items-start justify-start px-[18px] py-3 rounded-[12px] w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-full">
                  <Text
                    className="text-gray-900 text-justify text-lg w-auto"
                    size="txtOpenSansSemiBold18"
                  >
                    {props?.whichindustrydoOne}
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[377px] md:max-w-full text-base text-gray-900 text-justify"
                    size="txtOpenSansRegular16"
                  >
                    {props?.memberswhoadd}
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-opensans font-semibold leading-[normal] min-w-[94px] text-base text-center"
                  shape="round"
                  color="gray_900"
                  size="xs"
                  variant="outline"
                >
                  {props?.buttonFour}
                </Button>
              </div>
              <div className="bg-gray-200_01 flex flex-col gap-[18px] items-start justify-start px-[18px] py-3 rounded-[12px] w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-full">
                  <Text
                    className="text-gray-900 text-justify text-lg w-auto"
                    size="txtOpenSansSemiBold18"
                  >
                    {props?.whichindustrydoTwo}
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[377px] md:max-w-full text-base text-gray-900 text-justify"
                    size="txtOpenSansRegular16"
                  >
                    {props?.memberswhoaddOne}
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-opensans font-semibold leading-[normal] min-w-[94px] text-base text-center"
                  shape="round"
                  color="gray_900"
                  size="xs"
                  variant="outline"
                >
                  {props?.buttonFive}
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-gray-200_01 flex sm:flex-1 flex-col items-center justify-start pb-[194px] rounded-md w-[3%] sm:w-full">
            <div className="bg-gray-800 h-[145px] rounded-md w-full"></div>
          </div> */}
        </div>
      </div>
    </>
  );
};

ProfilePageAdminOneColumnrectangle9171.defaultProps = {
  profilestatus: "Profile Status",
  intermediate: "Intermediate",
  complete2steps: "Complete 2 steps to achieve Expert!",
  groupsix: "70%",
  whichindustrydoOne: "Which industry do you work in?",
  memberswhoadd:
    "Members who add an industry receive up to 2.5 times as many profile views",
  buttonFour: "Button",
  whichindustrydoTwo: "Which University do you go to?",
  memberswhoaddOne:
    "Members who add an industry receive up to 2.5 times as many profile views",
  buttonFive: "Button",
};

export default ProfilePageAdminOneColumnrectangle9171;
