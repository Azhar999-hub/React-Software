import * as React from "react";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import SMGrid from "../../Components/Smgrid";
import { getFbData } from "../../Config/Firebasemethods";
import { Table } from "react-bootstrap";
import SmButton from "../../Components/Smbutton";
import { useState } from "react";
import { useEffect } from "react";

export default function Institute() {
  const [listData, setlistData] = useState([]);
  let [loader, setLoader] = useState(false);
  const navigation = useNavigate();

  const col = [
    {
      key: "InstituteName",
      displayName: "Institute Name",
      searchAble: true,
    },
    {
      key: "NoOfCampus",
      displayName: "No of Campus",
    },
    {
      key: "Contact",
      displayName: "Contact",
    },

    {
      key: "OwnerEmail",
      displayName: "Owner Email",
    },
    {
      key: "Address",
      displayName: "Address",
    },
  ];

  const pagegoestoInstituteFrom = () => {
    navigation("/Dashboard/Instituteform");
  };

  let showData = () => {
    setLoader(true);
    getFbData("InstituteForm")
      .then((res) => {
        setLoader(false);
        console.log("Data Fetched Successfully  ", res);
        setlistData([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    showData();
  }, []);

  return (
    <>
      <SMGrid
        datasource={listData}
        columns={col}
        isLoading={loader}
        title="Institute List"
      />
      <Box className="my-5 d-flex justify-content-center align-items-center">
        <SmButton
          label="Institute Form"
          variant="contained"
          onClick={pagegoestoInstituteFrom}
        />
      </Box>
    </>
  );
}
