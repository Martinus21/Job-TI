import React from "react";

import { Button, Img, Text } from "../../components";

const JobsNotFoundNoresultsearch = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-3 items-center justify-start w-auto">
          <Img
            className="h-[60px] w-[60px]"
            src="images/img_iconsjobempty.svg"
            alt="iconsjobempty"
          />
          {props?.usermessage}
        </div>
        <Button
          className="!text-white-A700 cursor-pointer font-opensans font-semibold h-9 leading-[normal] min-w-[133px] text-center text-sm"
          shape="round"
          color="indigo_900"
          size="sm"
          variant="fill"
        >
          {props?.seeotherjobsbutton}
        </Button>
      </div>
    </>
  );
};

JobsNotFoundNoresultsearch.defaultProps = {
  usermessage: (
    <Text
      className="leading-[150.00%] max-w-[296px] md:max-w-full text-center text-gray-800 text-xs"
      size="txtOpenSansRomanRegular12Gray800"
    >
      <span className="text-gray-800 font-opensans font-normal">
        Sorry, there’s no result related to “
      </span>
      <span className="text-gray-800 font-opensans font-semibold">
        (keyword)
      </span>
      <span className="text-gray-800 font-opensans font-normal">
        ”. We’ll keep updating and take notes of your interest.
      </span>
    </Text>
  ),
  seeotherjobsbutton: "See other jobs",
};

export default JobsNotFoundNoresultsearch;
