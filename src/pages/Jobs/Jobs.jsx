/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Jobs.css";

import Job from "../Job/Job";

const Jobs = () => {
 

  const [jobs, setJob] = useState([]);
  const [activeTab, setActiveTab] = useState("a");


useEffect(()=>{
  fetch(`http://localhost:3000/allJobs/${activeTab}`)
  .then((res) => res.json())
  .then(result=>{
    setJob(result)
  })
},[activeTab])
// const result=jobs.filter(job=>job.status === activeTab)
// console.log(result)


  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div>
      <h1 className="title text-center mt-5 p-5">Available Job's</h1>
      <div className="tab-container text-center">
        <div className="text-center w-100 m-auto">
          <div className="tabs d-flex justify-content-center align-items-center">
            <div
              onClick={() => handleTabClick("remote")}
              className={`tab  tab2 remote ${
                activeTab == "remote" ? " bg-danger text-white" : ""
              }`}
            >
              Remote
            </div>
            <div
              onClick={() => handleTabClick("offline")}
              className={`tab  tab2 Offline ${
                activeTab == "offline" ? " bg-danger text-white" : ""
              }`}
            >
              Offline
            </div>
          </div>
        </div>
      </div>
      <div className="jobs-container mt-5 row">
        {jobs?.map((job) => (
          <Job key={job._id} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
