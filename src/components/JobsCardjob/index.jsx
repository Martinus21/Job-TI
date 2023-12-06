import React from "react";

import { Button, Img, Line, Text } from "../../components";

import imagesVerif from '../../images/img_iconsverified.svg'
import imagesLocation from '../../images/img_iconsmap.svg'
import imagesTime from '../../images/img_search.svg'
import imagesBookmark from '../../images/img_iconsbookmark.svg'



const JobsCardjob = (props) => {

  let formatSalary=(value)=>{
    let gaji = parseInt(value);
    let rentangGaji = Math.floor(gaji / 1000000);
    return rentangGaji;
  }

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-5 items-start justify-start w-full">
          <div className="flex flex-row gap-3 h-[37px] md:h-auto items-center justify-start w-full">
            {/* <Img
              className="h-9 md:h-auto object-cover rounded w-9"
              alt="ellipse630"
              src={props?.userimage}
            /> */}
            <div className="flex flex-1 flex-col gap-0.5 items-start justify-start w-full">
              <Text
                className="text-gray-900 text-sm w-full"
                size="txtOpenSansRomanSemiBold14"
              >
                {props?.username}
              </Text>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-row gap-0.5 items-start justify-start w-full">
                  <Text
                    className="text-gray-800_01 text-xs w-auto"
                    size="txtOpenSansRomanRegular12"
                  >
                    {props?.usercompany}
                  </Text>
                  <Img
                    className="h-4 w-4"
                    src={imagesVerif}
                    alt="iconsverified"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col h-9 md:h-auto items-end justify-start">
              <Img
                className="h-[18px] w-3.5"
                src={imagesBookmark}
                alt="iconsbookmark"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-row gap-1.5 items-start justify-start w-full">
                {!!props?.userfulltime ? (
                  <Button
                    className="!text-indigo-900 cursor-pointer flex-1 font-opensans leading-[normal] text-center text-xs w-full"
                    shape="round"
                    color="blue_50"
                    size="xs"
                    variant="fill"
                  >
                    {props?.userfulltime}
                  </Button>
                ) : null}
                {!!props?.experience ? (
                  <Button
                    className="!text-indigo-900 cursor-pointer flex-1 font-opensans leading-[normal] text-center text-xs w-full"
                    shape="round"
                    color="blue_50"
                    size="xs"
                    variant="fill"
                  >
                    {props?.experience} YoE
                  </Button>
                ) : null}
                {!!props?.maxSalary ? (
                  <Button
                    className="!text-indigo-900 cursor-pointer flex-1 font-opensans leading-[normal] text-center text-xs w-full"
                    shape="round"
                    color="blue_50"
                    size="xs"
                    variant="fill"
                  >
                  {formatSalary(props?.minSalary)?formatSalary(props?.minSalary)+"M":"$"+props.minSalary} - {formatSalary(props?.maxSalary)?formatSalary(props?.maxSalary)+"M":"$"+props.maxSalary}
                  </Button>
                ) : null}
              </div>
            </div>
            <Line className="bg-gray-100 h-px w-full" />
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-row gap-1.5 items-center justify-start w-full">
                <div className="flex flex-1 flex-row gap-1.5 items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-3.5">
                    <Img
                      className="h-3.5 w-3.5"
                      src={imagesLocation}
                      alt="iconsmap"
                    />
                  </div>
                  <Text
                    className="flex-1 text-indigo-900 text-xs w-auto"
                    size="txtOpenSansRomanRegular12Indigo900"
                  >
                    {props?.usercountry}
                  </Text>
                </div>
                <Text
                  className="bg-orange-50 justify-center px-1.5 rounded text-xs text-yellow-900 w-auto"
                  size="txtOpenSansRomanSemiBold12"
                >
                  {props?.useronsite}
                </Text>
                <div className="flex flex-row gap-0.5 h-5 md:h-auto items-center justify-end">
                  <Img
                    className="h-4 w-4"
                    src={imagesTime}
                    alt="search"
                  />
                  <Text
                    className="text-gray-800 text-xs w-auto"
                    size="txtOpenSansRomanRegular12Gray800"
                  >
                    {props?.user3d}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <Button
                className="!text-white-A700 cursor-pointer font-opensans font-semibold h-9 leading-[normal] text-center text-sm w-full"
                shape="round"
                color="indigo_900"
                size="sm"
                variant="fill"
                onClick={props.onClick}
              >
                {props?.usereasyapply}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

JobsCardjob.defaultProps = {
  userimage: "images/img_ellipse630.png",
  username: "Full Stack Developer",
  usercompany: "Talent Insider",
  usercountry: "Indonesia",
  useronsite: "On-site",
  user3d: "3d",
  usereasyapply: "Easy Apply",
};

export default JobsCardjob;
