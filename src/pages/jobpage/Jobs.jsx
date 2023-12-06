import React from "react";

import { Img, List, Text } from "../../components";
import JobsCardjob from "../../components/JobsCardjob";
import JobsSort from "../../components/JobsColumn";
import JobsFiltercard from "../../components/JobsFiltercard";

// APIs
import APIs from "../../requests/jobs";
import { Link  } from "react-router-dom";
import Popups from "components/Popups";

import { useDispatch, useSelector } from "react-redux";
import { SET_JOBS } from "stores/jobs/functions";

const ApplyJob = (props) => {

  let account=JSON.parse(localStorage.getItem("account"))||{};

  let [forms,set_forms]=React.useState({
    jobId:props.jobId,
    userId:account._id
  });
  const [file, setFile] = React.useState(null);
  
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  
  let sendJobs=async(e)=>{
    e.preventDefault();
    try {
      if(file){
        // const blobData = new Blob([file]);
        forms['resume']=[{
          "fileName":"resume_martinus.pdf",
          "url":`blob:http://localhost:3000/${file.name}`
        }]
      }
      let data=await APIs.applyJobs({body:forms});
      Popups.close()
      Popups.fire({
        title: "Apply Sukses.",
        danger: false,
        children: <div className="container">
          <p className="text-center" style={{fontSize: '12px'}}>Apply Job! Pekerjaan berhasil diapply, tunggu informasi selanjutnya.</p>
          <div className="container-btn mt-2 mb-3 text-center">
            <div className="row">
              <div className="col-12">
                <button style={{padding: "6px 20px", width: "100%", background: "white", border: "1px solid red", color: "red", borderRadius: "8px"}} onClick={() => Popups.close()}>Closed</button>
              </div>
            </div>
          </div>
        </div>
        ,
      });
    } catch (error) {
      console.log(error);
    }
  }
  

  return (
    <div className="container">
      <div className="row mb-3">
        <div className="col-12">
          <p className="mb-1" style={{fontSize: '12px'}}>Expected Salary</p>
          <input className="form-control" type="text" placeholder="Expected Salary"
            style={{padding: '2px 8px', borderRadius: '4px', fontSize: '12px'}}
            onChange={(e)=>set_forms({...forms,expectedSalary:parseInt(e.target.value)})}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12 col-md-6">
          <p className="font-weight-bold" style={{fontSize: '12px'}}>Your Current CV/Resume</p>
          <p style={{fontSize: '10px'}}>Upload once and reuse it for future applications. PDF files maximum 3MB</p>
        </div>
        <div className="col-12 col-md-6">
          <div className="input-group">
            <input type="file" placeholder="resume"
              className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"
              style={{padding: '2px 8px', borderRadius: '4px', fontSize: '12px'}}
              onChange={handleFileChange}
            />
            <button style={{fontSize: '12px', padding: '2px 12px'}} className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12 col-md-12">
          <p className="mb-1" style={{fontSize: '12px'}}>Notice Periode</p>
          <select
            style={{padding: '2px 8px', borderRadius: '4px', fontSize: '12px', width: '100%'}}
            onChange={(e)=>set_forms({...forms,noticePeriode:parseInt(e.target.value)})}
          >
            <option value="0">Select...</option>
            <option value="1">1 Month</option>
            <option value="2">2 Month</option>
            <option value="3">3 Month</option>
          </select>
        </div>
      </div>

      <div className="container-btn mt-4 mb-5 text-center">
        <div className="row">
          <div className="col-6">
            <button onClick={sendJobs} style={{padding: "8px 20px", width: "100%", background: "red", color: "white", borderRadius: "8px"}}>Apply Job</button>
          </div>
          <div className="col-6">
            <button style={{padding: "8px 20px", width: "100%", background: "white", border: "1px solid red", color: "red", borderRadius: "8px"}} onClick={() => Popups.close()}>Closed</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const JobsPage = () => {
  let jobs=useSelector((state)=>state.jobs.list_jobs);

  let dispatch=useDispatch();

  React.useEffect(async()=>{
    let data=await APIs.jobs({});
    dispatch(SET_JOBS(data));
  },[APIs]);
  
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-opensans mx-auto relative w-full">
        <div className="bg-gradient1  flex flex-col gap-5 items-end justify-end mx-auto p-[7px] w-full">
          <div className="flex md:flex-col flex-row gap-3 items-center justify-start max-w-[1080px] mt-1 mx-auto md:px-5 w-full">
            <Text
              className="text-white-A700 text-xl tracking-[2.40px] w-auto"
              size="txtOpenSansRomanSemiBold20WhiteA700"
            >
              LOGO
            </Text>
            <div className="flex flex-1 flex-col h-7 md:h-auto items-start justify-start w-full">
              <div className="flex flex-row gap-1.5 h-full items-start justify-start w-full">
                <Text
                  className="bg-white-A700 border border-gray-50 border-solid flex-1 h-full justify-center pb-0.5 pl-3 sm:pr-5 pr-[35px] pt-[5px] rounded text-gray-600 text-sm w-full"
                  size="txtOpenSansRomanRegular14Gray600"
                >
                  Search jobs...
                </Text>
                <div className="bg-indigo-900 flex flex-col h-full items-center justify-center px-3 py-1.5 rounded">
                  <Img
                    className="h-[22px] w-[22px]"
                    src="images/img_iconssearch.svg"
                    alt="iconssearch"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-end w-full">
              <div className="flex flex-1 flex-row gap-1.5 items-center justify-end w-full">
                <div className="flex flex-1 flex-col h-7 md:h-auto items-center justify-center px-3 py-2.5 w-full">
                  <Text
                    className="text-center text-sm text-white-A700 w-auto"
                    size="txtOpenSansRomanBold14"
                  >
                    <Link
                      className="bg-transparent cursor-pointer flex-1 font-semibold h-7 text-center text-gray-100 text-sm w-full"
                      size="xs"
                      to={`/pages/jobs`}
                    >
                      Jobs
                    </Link>
                  </Text>
                </div>
                <div className="flex flex-1 flex-col h-7 md:h-auto items-center justify-center px-3 py-2.5 w-full">
                  <Text
                    className="text-center text-sm text-white-A700 w-auto"
                    size="txtOpenSansRomanBold14"
                  >
                    <Link
                      className="bg-transparent cursor-pointer flex-1 font-semibold h-7 text-center text-gray-100 text-sm w-full"
                      size="xs"
                      to={`/pages/profile`}
                    >
                      Profile
                    </Link>
                  </Text>
                </div>
                <div className="flex flex-1 flex-col h-7 md:h-auto items-center justify-center px-3 py-2.5 w-full">
                  <Text
                    className="text-center text-sm text-white-A700 w-auto"
                    size="txtOpenSansRomanBold14"
                  >
                    Logout
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <JobsSort className="bg-white-A700 flex flex-col gap-1.5 items-start justify-start max-w-[820px] mr-[93px] md:px-5 px-[18px] py-1.5 rounded-md shadow-bs1 w-full" />
        </div>
        <div className="d-flex">
          <JobsFiltercard className="flex flex-col m-3 mx-5" />
          <div className="flex flex-col w-100 m-3">
            <div className="flex flex-col h-full items-start justify-start pb-3 px-5 w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <List
                  className="flex flex-col gap-3 items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex-1 gap-3 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                    {jobs.map((props, index) => (
                      <React.Fragment key={`JobsCardjob${index}`}>
                        <JobsCardjob
                          className="bg-white-A700 flex flex-1 flex-col gap-5 items-start justify-start p-[18px] rounded-md shadow-bs1 w-full"
                          userfulltime={props.workplace}
                          username={props.title}
                          usercompany={props.company}
                          onClick={() => {
                            Popups.fire({
                              title: "Apply Job",
                              danger: false,
                              children: <ApplyJob jobId={props._id} />,
                            });
                          }}
                          {...props}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsPage;