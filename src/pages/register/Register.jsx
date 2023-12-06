import React from "react";

import { Button, Img, Input, Line, Text } from "../../components";
import SignUpOneColumnThree from "../../components/SignUpOneColumnThree";

// stores
import {
  useDispatch 
} from "react-redux";
import { SET_AUTH } from "../../stores/users/functions";
import { useHistory } from "react-router-dom";
// APIs
import APIs from "../../requests/register";
import { Link } from "react-router-dom";

const Register = () => {

  let history = useHistory();

  let dispatch = useDispatch();
  let [register, set_register] = React.useState({});


  const RegisterApp = async(e) => {
    e.preventDefault();
    try {
      let data=await APIs.register({body:register})
      if(data){
        history.push("/")
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
          <div className="bg-white-A700 flex flex-col h-[688px] md:h-auto items-center justify-center max-w-[890px] p-12 md:px-10 sm:px-5 rounded-md w-full">
            <div className="flex flex-col gap-12 items-center justify-center w-auto">
              <div className="flex flex-col gap-9 items-start justify-start w-auto md:w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-900 w-full"
                  size="txtOpenSansRomanSemiBold30"
                >
                  Sign Up
                </Text>
                <div className="flex md:flex-col flex-row gap-9 items-start justify-start w-auto md:w-full">
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
                        placeholder="johndoe@gmail.com"
                        className="md:h-auto p-0 placeholder:text-gray-900 sm:h-auto text-base text-left w-full"
                        wrapClassName="w-full"
                        type="email"
                        size="sm"
                        onChange={(e)=>{set_register({...register,email:e.target.value})}} 
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                      <Text
                        className="text-gray-900 text-lg w-auto"
                        size="txtOpenSansRomanRegular18"
                      >
                        Set Password
                      </Text>
                      <Input
                        type="password"
                        name="password"
                        placeholder="************"
                        className="md:h-auto p-0 placeholder:text-gray-900 sm:h-auto text-base text-left w-full"
                        wrapClassName="w-full"
                        size="xs"
                        onChange={(e)=>{set_register({...register,password:e.target.value})}} 
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                      <Text
                        className="text-gray-900 text-lg w-auto"
                        size="txtOpenSansRomanRegular18"
                      >
                        Phone Number
                      </Text>
                      <Input
                        name="mobileNo"
                        placeholder="+6281234567890"
                        className="md:h-auto p-0 placeholder:text-gray-900 sm:h-auto text-base text-left w-full"
                        wrapClassName="w-full"
                        size="sm"
                        onChange={(e)=>{set_register({...register,phoneNumber:e.target.value})}} 
                      ></Input>
                    </div>
                  </div>
                  <Line className="bg-gray-600 h-[282px] md:h-px md:w-full w-px" />
                  <div className="flex flex-col gap-[30px] items-start justify-start w-auto">
                    <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                      <Text
                        className="text-gray-900 text-lg w-auto"
                        size="txtOpenSansRomanRegular18"
                      >
                        First Name
                      </Text>
                      <Input
                        name="textfield"
                        placeholder="John"
                        className="md:h-auto p-0 placeholder:text-gray-900 sm:h-auto text-base text-left w-full"
                        wrapClassName="w-full"
                        size="sm"
                        onChange={(e)=>{set_register({...register,firstName:e.target.value})}} 
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                      <Text
                        className="text-gray-900 text-lg w-auto"
                        size="txtOpenSansRomanRegular18"
                      >
                        Last Name
                      </Text>
                      <Input
                        name="textfield_One"
                        placeholder="Doe"
                        className="md:h-auto p-0 placeholder:text-gray-900 sm:h-auto text-base text-left w-full"
                        wrapClassName="w-full"
                        size="sm"
                        onChange={(e)=>{set_register({...register,lastName:e.target.value})}} 
                      ></Input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <Button
                    className="cursor-pointer font-semibold h-[50px] leading-[normal] text-center text-lg w-[360px]"
                    shape="round"
                    color="red_A700"
                    size="md"
                    variant="fill"
                    onClick={RegisterApp}
                  >
                    Sign Up
                  </Button>
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtOpenSansRomanRegular14WhiteA700"
                  >
                    <span className="text-gray-600 font-opensans text-left font-normal">
                      Already Have An Account?
                    </span>
                    <span className="text-white-A700 font-opensans text-left font-bold">
                      {" "}
                    </span>
                    <span className="text-gray-900 font-opensans text-left font-semibold">
                      <Link to="/">
                        Log In
                      </Link>
                    </span>
                  </Text>
                </div>
                <div className="flex flex-col gap-3 items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-center w-full">
                    <Line className="bg-gray-600 h-px w-[48%]" />
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtOpenSansRomanRegular16Gray900"
                    >
                      Or
                    </Text>
                    <Line className="bg-gray-600 h-px w-[48%]" />
                  </div>
                  <SignUpOneColumnThree className="flex flex-col gap-4 items-start justify-center w-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
