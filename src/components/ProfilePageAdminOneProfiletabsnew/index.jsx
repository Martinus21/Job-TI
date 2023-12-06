import React from "react";

import { Button, Img, Line, Text } from "../../components";
import Popups from "components/Popups";

// APIs
import APIs from "../../requests/profile";
import { useDispatch } from "react-redux";
import { SET_EXPRIENCE } from "stores/exprience/functions";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import imagesAdd from '../../images/img_iconplus.svg'

const FormExprience = () => {

  let account=JSON.parse(localStorage.getItem("account"))||{};

  let [form, set_form] = React.useState({
    createdBy:account._id
  });

  const sendExprience = async (e) => {
    e.preventDefault();
    try {
      let data = await APIs.sendExprience({ body: form });
      window.location.reload();
      console.log("Success sendExprience ", data);
    } catch (error) {
      console.log("Error sendExprience ", error);
    }
  };

  return (
    <div className="container">
      <form>
        <input className="my-3" type="text" style={{borderRadius: '8px', width: '100%'}} onChange={(e)=>{set_form({...form,country:e.target.value})}}  placeholder="Country" />
        <input className="my-3" type="text" style={{borderRadius: '8px', width: '100%'}} onChange={(e)=>{set_form({...form,jobTitle:e.target.value})}} placeholder="Job title" />
        <input className="my-3" type="text" style={{borderRadius: '8px', width: '100%'}} onChange={(e)=>{set_form({...form,company:e.target.value})}} placeholder="Company" />
        <input className="my-3" type="checkbox" onChange={(e)=>{set_form({...form,currentJob:e.target.checked})}} placeholder="Current Job" />
        <input className="my-3" type="date" style={{borderRadius: '8px', width: '100%'}} onChange={(e)=>{set_form({...form,start:e.target.value})}} placeholder="Started" />
        <input className="my-3" type="date" style={{borderRadius: '8px', width: '100%'}} onChange={(e)=>{set_form({...form,end:e.target.value})}} placeholder="EndDate" />
        <div className="container-btn mt-2 mb-4 text-center">
          <div className="row">
            <div className="col-6">
              <button style={{padding: "14px 20px", width: "100%", background: "red", color: "white", borderRadius: "8px"}} onClick={sendExprience}>Submit</button>
            </div>
            <div className="col-6">
              <button style={{padding: "14px 20px", width: "100%", background: "white", border: "1px solid red", color: "red", borderRadius: "8px"}} onClick={() => Popups.close()}>Closed</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const ProfilePageAdminOneProfiletabsnew = (props) => {

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row sm:gap-10 items-center justify-between max-w-[826px] w-full">
          {props?.companyTwo}
          <Img
            className="h-10 w-10"
            src={imagesAdd}
            style={{'cursor': 'pointer'}}
            alt="iconplus"
            onClick={() => {
              Popups.fire({
                title: "Add Experience",
                danger: false,
                children: <FormExprience />,
              });
            }}
          />
        </div>
        <div className="flex flex-col gap-[18px] items-start justify-start w-auto md:w-full">
          <div className="flex flex-col items-start justify-start max-w-[826px] w-full">
            <div className="flex flex-col gap-5 items-start justify-start w-auto">

              {props.exprience?.map((item) => {

                return (
                  <div className="flex flex-col gap-6 items-start justify-start max-w-[826px] w-full">
                    <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
                      {/* <div className="flex flex-col items-start justify-start py-1.5 w-auto">
                        <Img
                          className="h-[60px] md:h-auto object-cover rounded-bl-md rounded-br-md w-[60px]"
                          src={"images/img_rectangle9134.png"}
                          alt="rectangle9134"
                        />
                      </div> */}
                      <div className="flex flex-1 flex-col gap-[18px] items-start justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-auto"
                              size="txtOpenSansSemiBold22"
                            >
                              {item?.jobTitle}
                            </Text>
                            <ul className="flex flex-col items-start justify-start w-auto">
                              <li>
                                <Text
                                  className="text-base text-gray-800"
                                  size="txtOpenSansRomanRegular16"
                                >
                                  {item?.company}
                                </Text>
                              </li>
                              <li>
                                <Text
                                  className="text-base text-gray-800"
                                  size="txtOpenSansRomanRegular16"
                                >
                                  {props?.aug2022present}
                                </Text>
                              </li>
                              <li>
                                <Text
                                  className="text-base text-gray-800"
                                  size="txtOpenSansRomanRegular16"
                                >
                                  {item?.country}
                                </Text>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="h-[52px] relative w-full">
                          {props?.descriptionOne}
                          <div className="absolute bottom-[10%] flex flex-col items-end justify-start pl-0.5 pt-0.5 right-[5%]">
                            {props?.languageOne}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Line className="bg-gray-800 h-px w-full" />
                  </div>
                );
              })}

              {/* <div className="flex flex-col items-start justify-start max-w-[826px] w-full">
                <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-start py-1.5 w-auto">
                    <Img
                      className="h-[60px] md:h-auto object-cover rounded-bl-md rounded-br-md w-[60px]"
                      src="images/img_rectangle9134_2.png"
                      alt="rectangle9134_Three"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-[18px] items-start justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-auto"
                          size="txtOpenSansSemiBold22"
                        >
                          {props?.uiuxdesignerThree}
                        </Text>
                        <ul className="flex flex-col items-start justify-start w-auto">
                          <li>
                            <Text
                              className="text-base text-gray-800"
                              size="txtOpenSansRomanRegular16"
                            >
                              {props?.talentinsiderThree}
                            </Text>
                          </li>
                          <li>
                            <Text
                              className="text-base text-gray-800"
                              size="txtOpenSansRomanRegular16"
                            >
                              {props?.aug2022presentthree}
                            </Text>
                          </li>
                          <li>
                            <Text
                              className="text-base text-gray-800"
                              size="txtOpenSansRomanRegular16"
                            >
                              {props?.rukanarthagadinSeven}
                            </Text>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="h-[52px] relative w-full">
                      {props?.descriptionFour}
                      <div className="absolute bottom-[6%] flex flex-col items-center justify-start right-[5%]">
                        {props?.languageFour}
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Img
                        className="h-[120px] md:h-auto object-cover rounded-bl-md rounded-br-md w-60"
                        src="images/img_rectangle9135.png"
                        alt="rectangle9135"
                      />
                    </div>
                  </div>
                </div>
              </div> */}

            </div>
          </div>
          {/* <Button
            className="cursor-pointer flex items-center justify-center max-w-[826px] rounded-bl-md rounded-br-md w-full"
            rightIcon={
              <Img
                className="h-[30px] ml-3"
                src="images/img_icon_down.svg"
                alt="icon/down"
              />
            }
            color="gray_200_01"
            size="md"
            variant="fill"
          >
            <div className="!text-gray-600 font-bold font-oxygen leading-[normal] text-right text-xl">
              {props?.seeMore}
            </div>
          </Button> */}
        </div>
      </div>
    </>
  );
};

ProfilePageAdminOneProfiletabsnew.defaultProps = {
  companyTwo: (
    <Text
      className="flex-1 text-3xl sm:text-[26px] md:text-[28px] text-gray-900 w-auto"
      size="txtHarabaraMaisDemoRegular30"
    >
      <span className="md:text-[22px] sm:text-xl text-gray-900 font-oxygen text-left text-2xl font-bold">
        Experience
      </span>
      <span className="text-gray-900 font-harabaramaisdemo text-left font-normal">
        {" "}
      </span>
      <span className="md:text-xl sm:text-lg text-gray-800 font-opensans text-left text-[22px] font-normal">
        (8)
      </span>
    </Text>
  ),
  uiuxdesigner: "UI/UX Designer",
  talentinsider: "Talent Insider - Full-time",
  aug2022present: "Aug 2022 - Present",
  rukanarthagadinOne: "Rukan Artha Gading, North Jakarta",
  descriptionOne: (
    <Text
      className="leading-[150.00%] m-auto text-base text-gray-900 text-justify w-full"
      size="txtOpenSansRegular16"
    >
      <span className="text-gray-900 font-opensans font-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        accumsan, risus sem sollicitudin lacus, ut interdum tellus elit{" "}
      </span>
      <span className="text-gray-900 font-opensans font-normal">
        risus sem sollicit udin{" "}
      </span>
      <span className="text-gray-900 font-opensans font-normal">
        dolor sit amet, con
      </span>
    </Text>
  ),
  languageOne: (
    <Text
      className="text-base text-gray-800 text-right"
      size="txtOpenSansRomanRegular16"
    >
      <span className="text-gray-800 font-opensans font-normal"> </span>
      <span className="text-gray-800 font-opensans font-bold">...see more</span>
    </Text>
  ),
  uiuxdesignerOne: "Junior UI/UX Designer",
  talentinsiderOne: "Go-Jek - Intern",
  aug2022presentone: "Aug 2022 - Present",
  rukanarthagadinThree: "Rukan Artha Gading, North Jakarta",
  descriptionTwo: (
    <Text
      className="leading-[150.00%] m-auto text-base text-gray-900 text-justify w-full"
      size="txtOpenSansRegular16"
    >
      <span className="text-gray-900 font-opensans font-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        accumsan, risus sem sollicitudin lacus, ut interdum tellus elit{" "}
      </span>
      <span className="text-gray-900 font-opensans font-normal">
        risus sem sollicit udin{" "}
      </span>
      <span className="text-gray-900 font-opensans font-normal">
        dolor sit amet, con
      </span>
    </Text>
  ),
  languageTwo: (
    <Text
      className="text-base text-gray-800 text-right"
      size="txtOpenSansRomanRegular16"
    >
      <span className="text-gray-800 font-opensans font-normal"> </span>
      <span className="text-gray-800 font-opensans font-bold">...see more</span>
    </Text>
  ),
  uiuxdesignerTwo: "Graphic Designer",
  talentinsiderTwo: "Talent Insider - Contract",
  aug2022presenttwo: "Aug 2022 - Present",
  rukanarthagadinFive: "Rukan Artha Gading, North Jakarta",
  descriptionThree: (
    <Text
      className="leading-[150.00%] m-auto text-base text-gray-900 text-justify w-full"
      size="txtOpenSansRegular16"
    >
      <span className="text-gray-900 font-opensans font-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        accumsan, risus sem sollicitudin lacus, ut interdum tellus elit{" "}
      </span>
      <span className="text-gray-900 font-opensans font-normal">
        risus sem sollicit udin{" "}
      </span>
      <span className="text-gray-900 font-opensans font-normal">
        dolor sit amet, con
      </span>
    </Text>
  ),
  languageThree: (
    <Text
      className="text-base text-gray-800 text-right"
      size="txtOpenSansRomanRegular16"
    >
      <span className="text-gray-800 font-opensans font-normal"> </span>
      <span className="text-gray-800 font-opensans font-bold">...see more</span>
    </Text>
  ),
  uiuxdesignerThree: "Freelance Graphic Designer",
  talentinsiderThree: "Fiverr",
  aug2022presentthree: "Aug 2022 - Present",
  rukanarthagadinSeven: "Rukan Artha Gading, North Jakarta",
  descriptionFour: (
    <Text
      className="leading-[150.00%] m-auto text-base text-gray-900 text-justify w-full"
      size="txtOpenSansRegular16"
    >
      <span className="text-gray-900 font-opensans font-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        accumsan, risus sem sollicitudin lacus, ut interdum tellus elit{" "}
      </span>
      <span className="text-gray-900 font-opensans font-normal">
        risus sem sollicit udin{" "}
      </span>
      <span className="text-gray-900 font-opensans font-normal">
        dolor sit amet, con
      </span>
    </Text>
  ),
  languageFour: (
    <Text
      className="text-base text-gray-800 text-right"
      size="txtOpenSansRomanRegular16"
    >
      <span className="text-gray-800 font-opensans font-normal"> </span>
      <span className="text-gray-800 font-opensans font-bold">...see more</span>
    </Text>
  ),
  seeMore: "See More",
};

export default ProfilePageAdminOneProfiletabsnew;
