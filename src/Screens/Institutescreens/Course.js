import * as React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import SMGrid from "../../Components/Smgrid";
import { getFbData } from "../../Config/Firebasemethods";
import { Table } from "react-bootstrap";
import SmButton from "../../Components/Smbutton";



export default function Course() {
  const [listData, setlistData] = React.useState([]);
  const [loader, setloader] = React.useState(false);


  const navigation = useNavigate();

  const pagegoestoCourseFrom = () => {
    navigation("/Dashboard/Courseform");
  };
  
  let showData = () => {
    setloader(true)
    getFbData("CourseForm")
      .then((res) => {
        console.log("Data Fetched Successfully  ", res);
        setlistData([...res]);
        setloader(false)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    showData();
  }, []);
  

  const col = [
    {
      key: "CourseName",
      displayName: "CourseName",
    },
    {
      key: "Duration",
      displayName: "Duration",
      
    },
    {
      key: "fee",
      displayName: "Fees",
      
    },

    {
      key: "teacher",
      displayName: "Teacher",
    
    },
  ];

  return (
    <>
      <SMGrid isLoading={loader} datasource={listData} columns={col} title="Course List" />

      {/* <Table bordered hover>
              <thead className="text-center bg-black text-white ">
                <tr>
                  <th>CourseName</th>
                  <th>Duration</th>
                  <th>Fees</th>
                  <th>Teacher</th>
                </tr>
              </thead>
              <tbody className="text-center">
              {listData.map((item, index) => {
                return (
                  
                <tr key={index}>
                  <td>{item.CourseName}</td>
                  <td>{item.Duration}</td>
                  <td>{item.fee}</td>
                  <td>{item.teacher}</td>
                </tr>
                  
                  );
                })}
                </tbody>
            </Table> */}

      <Box className="my-5 d-flex justify-content-center align-items-center">
        <SmButton label="Course Form" variant="contained" onClick={pagegoestoCourseFrom} />
          
        
      </Box>
    </>
  );
}