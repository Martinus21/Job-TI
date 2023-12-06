import React from "react";

import { Button, Img, Input, Line, Text } from "../../components";
// import SignUpOneColumnThree from "../../components/SignUpOneColumnThree";

// stores
import {
  useDispatch 
} from "react-redux";
import { SET_AUTH } from "../../stores/users/functions";
import { useHistory, Link } from "react-router-dom";

// APIs
import APIs from "../../requests/login";

const SignUp = () => {
  let history = useHistory();

  let dispatch = useDispatch();
  let [logins, set_logins] = React.useState({
    'email': "",
    'password': ""
  });

  const LoginApp = async(e) => {
    try {
      e.preventDefault();

      let data=await APIs.login({body:logins})
      if(data){
        localStorage.setItem("token",data.token)
        localStorage.setItem("account",JSON.stringify(data.user));
        dispatch(SET_AUTH({ isAuthenticated: true, account:data.user }));
        history.push("/pages/jobs")
      }else{
        history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="bg-gradient2  flex flex-col font-opensans items-center justify-start mx-auto p-[60px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[97px] items-center justify-start max-w-[1320px] mb-[66px] mt-0.5 mx-auto w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[4.32px]"
              size="txtOpenSansRomanSemiBold36"
            >
              LOGO
            </Text>
            <Text
              className="text-gray-800 text-lg text-right"
              size="txtOpenSansRomanSemiBold18"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Text>
          </div>
          <div className="flex flex-col h-[688px] md:h-auto items-center justify-start max-w-[890px] w-full">
            <div className="bg-white-A700 flex flex-col h-full items-center justify-center p-12 md:px-10 sm:px-5 rounded-md w-full">
              <div className="flex flex-col gap-12 items-center justify-center w-auto">
                <div className="flex flex-col gap-9 items-start justify-start w-auto">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-900 w-full"
                    size="txtOpenSansRomanSemiBold30"
                  >
                    Log In
                  </Text>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col gap-[30px] items-start justify-start w-auto">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                        <Text
                          className="text-gray-900 text-lg w-auto"
                          size="txtOpenSansRomanRegular18"
                        >
                          E-mail
                        </Text>
                        <Input
                          name="email"
                          placeholder=""
                          className="md:h-auto p-0 placeholder:text-gray-900 sm:h-auto text-base text-left w-full"
                          wrapClassName="w-full"
                          type="email"
                          size="sm"
                          onChange={(e)=>{set_logins({...logins,email:e.target.value})}} 
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                        <Text
                          className="text-gray-900 text-lg w-auto"
                          size="txtOpenSansRomanRegular18"
                        >
                          Password
                        </Text>
                        <Input
                          type="password"
                          name="password"
                          placeholder="Password"
                          className="md:h-auto p-0 placeholder:text-gray-900 sm:h-auto text-base text-left w-full"
                          wrapClassName="w-full"
                          size="xs"
                          onChange={(e)=>{set_logins({...logins,password:e.target.value})}} 
                        ></Input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 items-center justify-start w-full">
                  <div className="flex flex-col gap-3 items-center justify-start w-[360px]">
                    <Button
                      className="cursor-pointer font-semibold h-[50px] leading-[normal] text-center text-xl w-full"
                      shape="round"
                      color="red_A700"
                      size="md"
                      variant="fill"
                      onClick={LoginApp}
                    >
                      Log In
                    </Button>
                    <div className="flex flex-row gap-4 items-start justify-start w-full">
                      <Text
                        className="flex-1 text-sm text-white-A700 w-auto"
                        size="txtOpenSansRomanRegular14WhiteA700"
                      >
                        <span className="text-gray-600 font-opensans text-left font-normal">
                          New to Xplore?
                        </span>
                        <span className="text-gray-900 font-opensans text-left font-bold">
                          {" "}
                        </span>
                        <span className="text-gray-900 font-opensans text-left font-semibold">
                          <Link to={"/register"}>
                            Sign Up
                          </Link>
                        </span>
                      </Text>
                      <a
                        href="javascript:"
                        className="text-gray-600 text-sm w-auto"
                      >
                        <Text size="txtOpenSansRomanRegular14Gray600">
                          Forgot Password?
                        </Text>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 items-center justify-start w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-center w-full">
                      <Line className="bg-gray-600 h-px w-[45%]" />
                      <Text
                        className="text-base text-gray-800 w-auto"
                        size="txtOpenSansRomanRegular16"
                      >
                        Or
                      </Text>
                      <Line className="bg-gray-600 h-px w-[45%]" />
                    </div>
                    {/* <SignUpOneColumnThree
                      className="flex flex-col gap-4 h-[70px] md:h-auto items-start justify-center w-auto"
                      signuptext="Log In with Google"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
