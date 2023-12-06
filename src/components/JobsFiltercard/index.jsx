import React from "react";

import { Button, Img, Line, List, Text } from "../../components";

import APIs from "../../requests/jobs";
import { useDispatch } from "react-redux";
import { SET_JOBS } from "stores/jobs/functions";

const JobsFiltercard = (props) => {

  let dispatch=useDispatch();

  let [filters,set_filters]=React.useState({
    employement:{},
    workplace:{},
    countries:{},
    experience:{}
  });

  React.useEffect(()=>{
    let params = new URLSearchParams();
    for(let [key,value] of Object.entries(filters)){
      params[key]=[];
      for(let [keys,values] of Object.entries(value)){
        if(values){
          params.append(key,keys)
        }
      }
    }
    setTimeout(async() => {
      let data=await APIs.jobs({params});
      dispatch(SET_JOBS(data));
    }, 500);
  },[filters]);

  // console.log("jobs_filters",filters);

  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex flex-col h-[420px] md:h-auto items-start justify-start pb-3 pt-[18px] px-[18px] rounded-md shadow-bs1 w-60 md:w-full" style={{"overflow": "scroll"}}>
          <div className="flex flex-col gap-3 h-full items-start w-full">
            <div className="flex flex-col items-start w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                <div className="flex flex-col items-start w-full">
                  <div className="flex flex-col items-start justify-end w-full">
                    <Text
                      className="text-blue_gray-900 text-sm w-auto"
                      size="txtOpenSansRomanBold14Bluegray900"
                    >
                      {props?.filterby}
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray-100 h-px w-full" />
              </div>
            </div>
            <div className="flex flex-row gap-1.5 h-full items-start justify-start w-full">
              <div className="flex flex-1 flex-col h-full items-start justify-start w-full">
                <div className="bg-white-A700 flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <List
                      className="flex flex-col gap-2 items-center w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                        <div className="flex flex-row gap-3 items-center w-full">
                          <Text
                            className="flex-1 text-gray-900 text-xs w-auto"
                            size="txtOpenSansSemiBold12"
                          >
                            {props?.employmenttype}
                          </Text>
                        </div>
                        <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                          <div className="flex flex-row gap-3 items-center justify-start w-full">
                            <input type="checkbox" class="rounded text-pink-500"
                              onChange={(e)=>{
                                set_filters({...filters,employement:{
                                  ...filters.employement,
                                  "Full-Time":e.target.checked
                                }})
                              }}
                            />
                            <div className="flex flex-1 flex-col h-full items-start justify-start w-full">
                              <Text
                                className="text-gray-900 text-xs w-auto"
                                size="txtOpenSansRomanRegular12Gray900"
                              >
                                {props?.fulltime}
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-3 items-center justify-start w-full">
                            <input type="checkbox" class="rounded text-pink-500"
                              onChange={(e)=>{
                                set_filters({...filters,employement:{
                                  ...filters.employement,
                                  "Part-Time":e.target.checked
                                }})
                              }}
                            
                            />
                            <div className="flex flex-1 flex-col h-full items-start justify-start w-full">
                              <Text
                                className="text-gray-900 text-xs w-auto"
                                size="txtOpenSansRomanRegular12Gray900"
                              >
                                {props?.fulltimeOne}
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-3 items-center justify-start w-full">
                            <input type="checkbox" class="rounded text-pink-500"
                              onChange={(e)=>{
                                set_filters({...filters,employement:{
                                  ...filters.employement,
                                  "Contract":e.target.checked
                                }})
                              }}
                            />
                            <div className="flex flex-1 flex-col h-full items-start justify-start w-full">
                              <Text
                                className="text-gray-900 text-xs w-auto"
                                size="txtOpenSansRomanRegular12Gray900"
                              >
                                {props?.fulltimeTwo}
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-3 items-center justify-start w-full">
                            <input type="checkbox" class="rounded text-pink-500" 
                              onChange={(e)=>{
                                set_filters({...filters,employement:{
                                  ...filters.employement,
                                  "Internship":e.target.checked
                                }})
                              }}
                            />
                            <div className="flex flex-1 flex-col h-full items-start justify-start w-full">
                              <Text
                                className="text-gray-900 text-xs w-auto"
                                size="txtOpenSansRomanRegular12Gray900"
                              >
                                {props?.fulltimeThree}
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Line className="self-center h-px bg-gray-100 w-full" />
                      <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                        <div className="flex flex-row gap-3 items-center w-full">
                          <Text
                            className="text-gray-900 text-xs w-auto"
                            size="txtOpenSansRomanSemiBold12Gray900"
                          >
                            {props?.location}
                          </Text>
                        </div>
                        <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                          <div className="flex flex-row gap-3 items-center justify-start w-full">
                            <input type="checkbox" class="rounded text-pink-500"
                              onChange={(e)=>{
                                set_filters({...filters,countries:{
                                  ...filters.countries,
                                  "Singapore":e.target.checked
                                }})
                              }}
                            />
                            <div className="flex flex-1 flex-col h-full items-start justify-start w-full">
                              <Text
                                className="text-gray-900 text-xs w-auto"
                                size="txtOpenSansRomanRegular12Gray900"
                              >
                                {props?.country}
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-3 items-center justify-start w-full">
                            <input type="checkbox" class="rounded text-pink-500"
                              onChange={(e)=>{
                                set_filters({...filters,countries:{
                                  ...filters.countries,
                                  "Philippines":e.target.checked
                                }})
                              }}
                            />
                            <div className="flex flex-1 flex-col h-full items-start justify-start w-full">
                              <Text
                                className="text-gray-900 text-xs w-auto"
                                size="txtOpenSansRomanRegular12Gray900"
                              >
                                {props?.countryOne}
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-3 items-center justify-start w-full">
                            <input type="checkbox" class="rounded text-pink-500"
                              onChange={(e)=>{
                                set_filters({...filters,countries:{
                                  ...filters.countries,
                                  "Malaysia":e.target.checked
                                }})
                              }}
                            />
                            <div className="flex flex-1 flex-col h-full items-start justify-start w-full">
                              <Text
                                className="text-gray-900 text-xs w-auto"
                                size="txtOpenSansRomanRegular12Gray900"
                              >
                                {props?.countryTwo}
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-3 items-center justify-start w-full">
                            <input type="checkbox" class="rounded text-pink-500"
                              onChange={(e)=>{
                                set_filters({...filters,countries:{
                                  ...filters.countries,
                                  "Indonesia":e.target.checked
                                }})
                              }}
                            />
                            <div className="flex flex-1 flex-col h-full items-start justify-start w-full">
                              <Text
                                className="text-gray-900 text-xs w-auto"
                                size="txtOpenSansRomanRegular12Gray900"
                              >
                                {props?.countryThree}
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Line className="self-center h-px bg-gray-100 w-full" />
                      <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                        <div className="flex flex-row gap-3 items-center w-full">
                          <Text
                            className="text-gray-900 text-xs w-auto"
                            size="txtOpenSansRomanSemiBold12Gray900"
                          >
                            {props?.experiencelevelOne}
                          </Text>
                        </div>
                        <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                          <div className="flex flex-row gap-3 items-center justify-start w-full">
                            <input type="checkbox" class="rounded text-pink-500"
                              onChange={(e)=>{
                                set_filters({...filters,experience:{
                                  ...filters.experience,
                                  "0-1":e.target.checked
                                }})
                              }}
                            />
                            <div className="flex flex-1 flex-col h-full items-start justify-start w-full">
                              <Text
                                className="text-gray-900 text-xs w-auto"
                                size="txtOpenSansRomanRegular12Gray900"
                              >
                                {props?.fulltime1}
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-3 items-center justify-start w-full">
                            <input type="checkbox" class="rounded text-pink-500"
                             onChange={(e)=>{
                              set_filters({...filters,experience:{
                                ...filters.experience,
                                "1-3":e.target.checked
                              }})
                              // setTimeout(async()=>{
                              //   await jobsFilters();
                              // },1000)
                            }}
                            />
                            <div className="flex flex-1 flex-col h-full items-start justify-start w-full">
                              <Text
                                className="text-gray-900 text-xs w-auto"
                                size="txtOpenSansRomanRegular12Gray900"
                              >
                                {props?.fulltimeone1}
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-3 items-center justify-start w-full">
                            <input type="checkbox" class="rounded text-pink-500" 
                              onChange={(e)=>{
                                set_filters({...filters,experience:{
                                  ...filters.experience,
                                  "3-5":e.target.checked
                                }})
                              }}
                            />
                            <div className="flex flex-1 flex-col h-full items-start justify-start w-full">
                              <Text
                                className="text-gray-900 text-xs w-auto"
                                size="txtOpenSansRomanRegular12Gray900"
                              >
                                {props?.fulltimetwo1}
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-3 items-center justify-start w-full">
                            <input type="checkbox" class="rounded text-pink-500"
                               onChange={(e)=>{
                                set_filters({...filters,experience:{
                                  ...filters.experience,
                                  ">5":e.target.checked
                                }})
                              }}
                            />
                            <div className="flex flex-1 flex-col h-full items-start justify-start w-full">
                              <Text
                                className="text-gray-900 text-xs w-auto"
                                size="txtOpenSansRomanRegular12Gray900"
                              >
                                {props?.fulltimethree1}
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Line className="self-center h-px bg-gray-100 w-full" />
                      <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                        <div className="flex flex-row gap-3 items-center w-full">
                          <Text
                            className="flex-1 text-gray-900 text-xs w-auto"
                            size="txtOpenSansRomanSemiBold12Gray900"
                          >
                            {props?.worktype}
                          </Text>
                        </div>
                        <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                          <div className="flex flex-row gap-3 items-center justify-start w-full">
                            <input type="checkbox" class="rounded text-pink-500"
                               onChange={(e)=>{
                                set_filters({...filters,workplace:{
                                  ...filters.workplace,
                                  "On-Site":e.target.checked
                                }})
                              }}
                            />
                            <div className="flex flex-1 flex-col h-full items-start justify-start w-full">
                              <Text
                                className="text-gray-900 text-xs w-auto"
                                size="txtOpenSansRomanRegular12Gray900"
                              >
                                {props?.fulltime2}
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-3 items-center justify-start w-full">
                            <input type="checkbox" class="rounded text-pink-500"
                               onChange={(e)=>{
                                set_filters({...filters,workplace:{
                                  ...filters.workplace,
                                  "Remote":e.target.checked
                                }})
                              }}
                            />
                            <div className="flex flex-1 flex-col h-full items-start justify-start w-full">
                              <Text
                                className="text-gray-900 text-xs w-auto"
                                size="txtOpenSansRomanRegular12Gray900"
                              >
                                {props?.fulltimeone2}
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-3 items-center justify-start w-full">
                            <input type="checkbox" class="rounded text-pink-500"
                              onChange={(e)=>{
                                set_filters({...filters,workplace:{
                                  ...filters.workplace,
                                  "Hybrid":e.target.checked
                                }})
                              }}
                            />
                            <div className="flex flex-1 flex-col h-full items-start justify-start w-full">
                              <Text
                                className="text-gray-900 text-xs w-auto"
                                size="txtOpenSansRomanRegular12Gray900"
                              >
                                {props?.fulltimetwo2}
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </List>
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

JobsFiltercard.defaultProps = {
  filterby: "FILTER BY",
  employmenttype: "Employment Type",
  fulltime: "Full-Time",
  fulltimeOne: "Part-Time",
  fulltimeTwo: "Contract",
  fulltimeThree: "Internship",
  location: "Location",
  country: "Singapore",
  countryOne: "Philippines",
  countryTwo: "Malaysia",
  countryThree: "Indonesia",
  experiencelevelOne: "Experience Level",
  fulltime1: "0-1 YoE",
  fulltimeone1: "1-3 YoE",
  fulltimetwo1: "3-5 YoE",
  fulltimethree1: <>&gt;5 YoE</>,
  worktype: "Work Type",
  fulltime2: "On-site",
  fulltimeone2: "Remote",
  fulltimetwo2: "Hybrid",
  salaryrange: "Salary Range",
  rp4000000rp: "Rp 4.000.000 - Rp 8.000.000",
  apply: "Apply",
};

export default JobsFiltercard;
