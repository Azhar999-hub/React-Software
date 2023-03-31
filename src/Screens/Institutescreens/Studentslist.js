import * as React from "react";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import SMGrid from "../../Components/Smgrid";
import { getFbData } from "../../Config/Firebasemethods";
import SmButton from "../../Components/Smbutton";


export default function StudentList() {
  const [listData, setlistData] = React.useState([]);
  const [loader, setloader] = React.useState(false);
  const navigation = useNavigate();

  const pagegoestoCourseFrom = () => {
    navigation("/Dashboard/Studentform");
  };
  
  let showData = () => {
    setloader(true)
    getFbData("StudentForm")
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
      key: "StudentName",
      displayName: "CourseName",
    },
    {
      key: "FatherName",
      displayName: "Father Name",
      
    },
    {
      key: "Contact",
      displayName: "Contact",
    
    },
    {
      key: "Email",
      displayName: "Email",
    
    },
  ];

  return (
    <>
      <SMGrid isLoading={loader} datasource={listData} columns={col} title="Students List" />

      <Box className="my-5 d-flex justify-content-center align-items-center">
        <SmButton label="Course Form" variant="contained" onClick={pagegoestoCourseFrom} />
          
        
      </Box>
    </>
  );
}