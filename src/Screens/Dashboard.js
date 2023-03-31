import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getFbData } from "../Config/Firebasemethods";
import AdminDashboard from "./Adminscreens.js/Admindashboard";
import InstituteDashboard from "./Institutescreens/Institutedashboard";
import StudentDashboard from "./Studentscreen.js/Studentdashboard";

const Dashboard = () => {
  const [selectedType, setSelectedType] = useState({});

  let showData = () => {
    getFbData("UserType")
      .then((res) => {
        console.log("Data Fetched Successfully  ", res);
        setSelectedType({ ...res });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    showData();
  }, []);

  return (
    <div>
      {selectedType.userType === "Admin" ? (
        <AdminDashboard />
      ) : selectedType.userType === "Institute" ? (
        <InstituteDashboard />
      ) : selectedType.userType === "Students" ? (
        <StudentDashboard />
      ) : (
        "unknown"
      )}

      {/* <AdminDashboard /> */}
      <InstituteDashboard />
    </div>
  );
};

export default Dashboard;
