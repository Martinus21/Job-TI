import React from "react";

import { Button, Img, Line, Text } from "../../components";
import ProfilePageAdminOneColumnrectangle9171 from "../../components/ProfilePageAdminOneColumnrectangle9171";
import ProfilePageAdminOneProfiletabsnew from "../../components/ProfilePageAdminOneProfiletabsnew";

import images1 from '../../images/img_globe.svg'
import images2 from '../../images/img_checkmark.svg'
import images3 from '../../images/img_iconsearch.svg'
import images4 from '../../images/img_lock.svg'
import images5 from '../../images/img_buttonnotification.svg'
import images6 from '../../images/img_rectangle9199.png'
import images7 from '../../images/img_favorite.svg'
import images8 from '../../images/img_rectangle9162.png'
import images9 from '../../images/img_edit.svg'
import images10 from '../../images/img_mbtienfj.svg'
import images11 from '../../images/img_socmed.svg'
import images12 from '../../images/img_rectangle9181.png'
import images13 from '../../images/img_rectangle9181stroke.svg'
import images14 from '../../images/img_favorite.svg'
import images15 from '../../images/img_favorite.svg'

// APIs
import APIs from "../../requests/profile";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { SET_EXPRIENCE } from "stores/exprience/functions";

const Profile = () => {
  let exprience=useSelector((state)=>state.exprience.list_exprience)||[];

  let dispatch=useDispatch();

  React.useEffect(()=>{
    let account=JSON.parse(localStorage.getItem("account"))||null;
    async function getData(){
      let list_exprience=await APIs.exprience({
        params:{
          'createdBy':String(account._id)
        }
      });
      dispatch(SET_EXPRIENCE(list_exprience));
    }
    getData()
    return ()=>{}
  },[APIs]);
  
  return (
    <>
      <div className="bg-gradient  flex flex-col font-opensans items-center justify-end mx-auto w-full">
        {/* HEADERS */}
        <header className="bg-white-A700 flex h-20 md:h-auto items-center justify-center md:px-5 px-6 w-full">
          <div className="flex md:flex-col flex-row gap-6 items-center justify-center w-full">
            <div className="header-row ">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[4.32px]"
                size="txtOpenSansRomanSemiBold36"
              >
                LOGO
              </Text>
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="bg-gray-200_01 flex flex-1 flex-row gap-3 h-10 md:h-auto sm:hidden items-center justify-center pl-[18px] pr-1.5 py-0.5 rounded-md w-full">
              <Img
                className="h-10 w-10"
                src={images1}
                alt="globe"
              />
              <Text
                className="text-gray-900 text-sm w-[37px]"
                size="txtOpenSansRomanRegular14"
              >
                Menu
              </Text>
              <Img
                className="h-5 w-5"
                src={images2}
                alt="checkmark"
              />
              <Line className="bg-gray-600 h-5 w-px" />
              <Text
                className="flex-1 text-gray-600 text-sm w-auto"
                size="txtOpenSansRomanRegular14Gray600"
              >
                Search...
              </Text>
              <div className="bg-red-A700 flex flex-col h-7 md:h-auto items-center justify-center p-2.5 rounded-md w-[60px]">
                <Img
                  className="h-6 w-6"
                  src={images3}
                  alt="iconsearch"
                />
              </div>
            </div>
            <div className="flex flex-row gap-2 sm:hidden items-center justify-start w-auto">
              <Img
                className="h-10 w-[54px]"
                src={images4}
                alt="lock"
              />
              <Img
                className="h-10 w-10"
                src={images5}
                alt="buttonnotificat"
              />
              <div className="border border-gray-900 border-solid flex flex-row gap-[7px] h-10 md:h-auto items-center justify-start p-1.5 rounded-md w-[68px]">
                <Img
                  className="flex-1 md:flex-none md:h-7 sm:h-auto h-full object-cover rounded w-full"
                  src={images6}
                  alt="rectangle9199"
                />
                <Img
                  className="h-[15px] rounded-[1px] w-[15px]"
                  src={images7}
                  alt="favorite"
                />
              </div>
            </div>
          </div>
        </header>
        {/* END HEADERS */}

        <div className="h-[514px] md:h-[733px] md:px-5 relative w-full">
          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <div className="h-[280px] relative w-full">
                <Img
                  className="h-[280px] m-auto object-cover rounded-bl-[60px] rounded-br-[60px] w-full"
                  src={images8}
                  alt="rectangle9162"
                />
                <div className="absolute bg-white-A700 flex flex-col items-start justify-start pr-[13px] py-[5px] right-[2%] rounded-md top-[9%] w-auto">
                  <Img
                    className="h-10 w-10"
                    src={images9}
                    alt="edit"
                  />
                </div>
              </div>

              <div className="bg-white-A700 flex flex-col items-center justify-end p-5 rounded-tl-[60px] rounded-tr-[60px] w-[97%] md:w-full">
                <div className="flex flex-col items-center justify-start mt-[38px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 h-[132px] md:h-auto items-end justify-center max-w-[1344px] w-full">

                    <div className="flex flex-1 flex-col font-oxygen gap-3 items-center justify-start w-full">
                      <div className="flex flex-col gap-1.5 items-center justify-start w-auto md:w-full">
                        <div className="flex flex-row gap-1.5 items-start justify-center max-w-[844px] w-full">
                          <div className="flex flex-row gap-1.5 items-center justify-center pl-10 sm:pl-5 w-auto">
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900 w-auto"
                              size="txtOxygenBold28"
                            >
                              Amanda Christine
                            </Text>
                            <Img
                              className="h-10 w-[35px]"
                              src={images10}
                              alt="mbtienfj"
                            />
                          </div>
                          <Img
                            className="h-10 w-[38px]"
                            src={images9}
                            alt="edit_One"
                          />
                        </div>
                        <div className="flex sm:flex-col flex-row font-opensans gap-3 items-end justify-center w-auto sm:w-full">
                          <Text
                            className="text-center text-gray-900 text-lg w-auto"
                            size="txtOpenSansSemiBold18"
                          >
                            UI/UX Designer at Talent Insider
                          </Text>
                          <Line className="bg-gray-900 h-[27px] sm:h-px sm:w-full w-px" />
                          <Text
                            className="text-base text-center text-gray-900 w-auto"
                            size="txtOpenSansRegular16"
                          >
                            South Jakarta, DKI Jakarta, Indonesia
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col font-opensans items-start justify-start w-auto">
                        <Button
                          className="cursor-pointer font-semibold h-10 leading-[normal] min-w-[100px] text-center text-lg"
                          shape="round"
                          color="red_A700"
                          size="sm"
                          variant="fill"
                        >
                          Button
                        </Button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-60 inset-x-[0] mx-auto top-[21%] w-[14%]">
            <Img
              className="h-[203px] m-auto object-cover rounded-bl-[73px] rounded-br-[73px] w-[82%]"
              src={images12}
              alt="rectangle9181"
            />
            <Img
              className="absolute h-60 inset-[0] justify-center m-auto"
              src={images13}
              alt="rectangle9181st"
            />
          </div>
        </div>
        
        {/* FOOTERS */}
        <div className="mt-5 md:px-5 relative w-full">
          <footer className="flex font-oxygen">
            <div className="flex flex-col gap-10 items-center justify-center w-full">
              <div className="mb-[66px] flex md:flex-col flex-row gap-6 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                  {/* <ProfilePageAdminOneColumnrectangle9171 className="bg-white-A700 flex flex-col gap-5 items-center justify-center p-6 sm:px-5 rounded-md w-[485px] sm:w-full" /> */}
                  <div className="bg-white-A700 flex flex-col items-start justify-start p-6 sm:px-5 rounded-md w-[485px] sm:w-full">
                    <div className="flex flex-col gap-5 items-start justify-start w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center w-full">
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                            size="txtOxygenBold24"
                          >
                            About
                          </Text>
                        </div>
                        <Img
                          className="h-10 max-h-10 sm:w-[]"
                          src={images9}
                          alt="edit_Two"
                        />
                      </div>
                      <div className="font-opensans md:h-[120px] h-[121px] relative w-full">
                        <Text
                          className="absolute h-max inset-[0] justify-center leading-[150.00%] m-auto text-base text-gray-900 text-justify w-full"
                          size="txtOpenSansRegular16"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Etiam eu turpis molestie, dictum est a, mattis
                          tellus. Sed dignissim, metus nec fringilla accumsan,
                          risus sem sollicitudin lacus, ut interdum tellus elit
                          sed risus. Maecenas eget condimentum velit, sit amet
                          fu
                        </Text>
                        <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[0]">
                          <Text
                            className="text-base text-gray-800 text-right"
                            size="txtOpenSansRomanRegular16"
                          >
                            <span className="text-gray-800 font-opensans font-normal">
                              {" "}
                            </span>
                            <span className="text-gray-800 font-opensans font-bold">
                              ...see more
                            </span>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ProfilePageAdminOneProfiletabsnew
                  className="bg-white-A700 flex flex-col font-harabaramaisdemo gap-5 items-center justify-start max-w-[882px] pt-6 sm:px-5 px-6 rounded-md w-full"
                  exprience={exprience}
                />
              </div>
              <div className="bg-white-A700 border border-solid border-white-A700 font-opensans md:h-[1231px] sm:h-[283px] h-[380px] p-8 sm:px-5 relative w-full">
                <div className="absolute bottom-[8%] md:h-[1231px] sm:h-[283px] h-[299px] left-[6%] w-[84%] md:w-full">
                  <Text
                    className="absolute bottom-[0] left-[0] text-base text-gray-900"
                    size="txtOpenSansRegular16"
                  >
                    © LOGO 2022
                  </Text>
                  <div className="absolute flex md:flex-col flex-row md:gap-10 gap-[74px] inset-x-[0] items-start justify-between mx-auto top-[0] w-auto">
                    <div className="flex flex-col gap-[26px] items-start justify-start w-auto">
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[4.32px] w-auto"
                        size="txtOpenSansRomanSemiBold36"
                      >
                        LOGO
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[285px] md:max-w-full text-base text-gray-900"
                        size="txtOpenSansRegular16"
                      >
                        Nam posuere accumsan porta. Integer id orci sed ante
                        tincidunt tincidunt sit amet sed libero.
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[18px] items-start justify-start w-auto">
                      <Text
                        className="text-gray-900 text-lg uppercase w-auto"
                        size="txtOpenSansBold18"
                      >
                        JOB SEEKERS
                      </Text>
                      <Text
                        className="leading-[24.00px] text-base text-gray-900"
                        size="txtOpenSansRegular16"
                      >
                        <>
                          Jobs Category
                          <br />
                          <br />
                          Jobs by Companies
                          <br />
                          <br />
                          Career Support
                          <br />
                          <br />
                          Testimony
                          <br />
                          <br />
                          Download App
                          <br />
                        </>
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[18px] items-start justify-start w-auto">
                      <Text
                        className="text-gray-900 text-lg uppercase w-auto"
                        size="txtOpenSansBold18"
                      >
                        RECRUITERS
                      </Text>
                      <Text
                        className="leading-[24.00px] text-base text-gray-900"
                        size="txtOpenSansRegular16"
                      >
                        <>
                          Post A Job Ads
                          <br />
                          <br />
                          Search For Resumes
                          <br />
                          <br />
                          Advertise with us
                          <br />
                          <br />
                          Company Profiles
                        </>
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[18px] items-start justify-start w-auto">
                      <Text
                        className="text-gray-900 text-lg uppercase w-auto"
                        size="txtOpenSansBold18"
                      >
                        ABOUT
                      </Text>
                      <Text
                        className="leading-[24.00px] text-base text-gray-900"
                        size="txtOpenSansRegular16"
                      >
                        <>
                          About Us
                          <br />
                          <br />
                          News and Events
                          <br />
                          <br />
                          Careers
                        </>
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[18px] items-start justify-start w-auto">
                      <Text
                        className="text-gray-900 text-lg uppercase w-auto"
                        size="txtOpenSansBold18"
                      >
                        Contacts
                      </Text>
                      <div className="flex flex-col gap-3.5 items-start justify-start w-auto">
                        <Text
                          className="leading-[24.00px] text-base text-gray-900"
                          size="txtOpenSansRegular16"
                        >
                          <>
                            Contact Us
                            <br />
                            <br />
                            FAQ
                            <br />
                            <br />
                            Send Feedback
                            <br />
                            <br />
                            Socials
                          </>
                        </Text>
                        <Img
                          className="h-[37px] w-[204px]"
                          src={images11}
                          alt="socmed"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
        {/* END FOOTERS */}
      </div>
    </>
  );
};

export default withRouter(Profile);
