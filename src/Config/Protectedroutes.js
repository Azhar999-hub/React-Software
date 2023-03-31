import React, { useEffect, useState } from "react";
import { FidgetSpinner } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { checkAuth } from "./Firebasemethods";

const PtrotectedRoute = (props) => {
  const { Component } = props;
  let navigation = useNavigate();
  let [loader, setLoader] = useState(false);
  
  useEffect(() => {
    checkAuth()
      .then((email) => {
          setLoader(true);
        console.log("User Loged in", email);
      })
      .catch((err) => {
        
          console.log("Ops...", err);
          navigation("/");
        setLoader(false);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
    {loader ? (
        <Component />
      ) : (
        <FidgetSpinner
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          ballColors={["#ff0000", "#00ff00", "#0000ff"]}
          backgroundColor="black"
        />
      )}</div>
  );
};

export default PtrotectedRoute;
