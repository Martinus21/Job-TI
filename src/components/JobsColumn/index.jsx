import React from "react";

import { Button, Img, Text } from "../../components";

const JobsColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
            <Text
              className="text-gray-900 text-sm w-auto"
              size="txtOpenSansRomanRegular14"
            >
              {props?.sortbytext}
            </Text>
            <Button
              className="cursor-pointer flex items-center justify-center rounded w-36"
              shape="round"
              color="gray_100_01"
              size="xs"
              variant="fill"
            >
              <div className="!text-gray-900 font-opensans text-left text-sm">
                {props?.mostrelevantbutton}
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

JobsColumn.defaultProps = {
  sortbytext: "Sort By :",
  mostrelevantbutton: "Most Relevant",
};

export default JobsColumn;
