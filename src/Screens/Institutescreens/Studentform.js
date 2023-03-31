import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Grid from "@mui/material/Grid";
import { getFbData, postFbData } from "../../Config/Firebasemethods";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SmSelect from "../../Components/Smselect";
import SmRadio from "../../Components/Smradio";

function StudentForm() {
  const [open, setOpen] = useState(false);
  const [msgopen, setmsgOpen] = useState(false);
  const [model, setModel] = useState({});
  const [loader, setloader] = useState(false);
  const [listData, setlistData] = useState([]);
  const [displayObj, setdisplayObj] = useState({});
  const [res, setRes] = useState();
  const [condition, setCondition] = useState("");
  const navigation = useNavigate();

  const col = [
    {
      displayName: "Action",
      key: "",
      displayField: (e) => (
        <Button
          onClick={() =>
            setdisplayObj({
              ...displayObj,
              userName: e.userName,
              email: e.email,
              message: e.message,
            })
          }
          variant="contained">
          View
        </Button>
      ),
      searchAble: true,
    },
    {
      key: "userName",
      displayName: "User",
      searchAble: true,
    },
    {
      key: "email",
      displayName: "E-mail",
      searchAble: true,
    },
    {
      key: "message",
      displayName: "Message",
      searchAble: true,
    },
  ];

  // const save = (event) => {
  //   event.preventDefault();
  //   console.log("hasjdhas");
  //   postFbData("CourseForm", model)
  //     .then((res) => {
  //       console.log("Save SuccessFully !");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  let saveFeed = (event) => {
    event.preventDefault();
    setloader(true);
    postFbData("StudentForm", model)
      .then(() => {
        console.log("Save SuccessFully !");
        setOpen(false);
        setmsgOpen(true);
        setloader(false);
        setCondition("success");
        setRes("Save SuccessFully !");
        navigation("/Dashboard/StudentsList");
      })
      .catch((err) => {
        console.log(err);
        setloader(false);
        setOpen(true);
        setRes(err);
        setmsgOpen(true);
        setCondition("error");
        setRes(res);
      });
  };

  let showData = () => {
    getFbData("StudentForm")
      .then((res) => {
        console.log("Data Fetched Successfully  ", res);
        setlistData([...res]);
        setOpen(false);
        setloader(false);
        setmsgOpen(false);
        setRes("Data Fetched Successfully");
        setCondition("success");
      })
      .catch((err) => {
        console.log(err);
        setOpen(true);
        setRes(err);
        setmsgOpen(true);
        setCondition("error");
      });
    console.log(displayObj.userName);
  };

 

  useEffect(() => {
    showData();
  }, []);


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}></Grid>
      <Typography
        className=" text-center text-primary mt-3 mb-3"
        variant="h3">Students Form</Typography>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Student Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Student Name"
            onChange={(e) => setModel({ ...model, StudentName: e.target.value })}
          />

          <Form.Label>Father Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Father Name"
            onChange={(e) => setModel({ ...model, FatherName: e.target.value })}
          />

          <Form.Label>Contact</Form.Label>
          <Form.Control
            type="number"
            placeholder="Contact"
            onChange={(e) => setModel({ ...model, Contact: e.target.value })}
          />
          <Form.Label>CNIC</Form.Label>
          <Form.Control
            type="number"
            placeholder="CNIC Number"
            onChange={(e) => setModel({ ...model, Cnic: e.target.value })}
          />
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="CNIC Email"
            onChange={(e) => setModel({ ...model, Email: e.target.value })}
          />
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setModel({ ...model, Password: e.target.value })}
          />
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Address"
            onChange={(e) => setModel({ ...model, Address: e.target.value })}
          />
           <Box className="mt-3">
            <SmSelect
              onChange={(e) => setModel({ ...model, LastQaulification: e.target.value })}
              variant="standard"
              label="Last Qaulification"
              item1="Matric"
              item2="Intermediate"
              item3="Bachler"
            />
          </Box>
          <Box className="mt-3">
            <SmSelect
              onChange={(e) => setModel({ ...model, Cource: e.target.value })}
              variant="standard"
              label="Cource"
              item1="Math"
              item2="EngLish"
              item3="Physics"
            />
          </Box>
          <Box className="mt-3">
            <SmSelect
              onChange={(e) => setModel({ ...model, Country: e.target.value })}
              variant="standard"
              label="Country"
              item1="Pakistan"
              item2="India"
              item3="Bangladesh"
            />
               <SmSelect
              onChange={(e) => setModel({ ...model, City: e.target.value })}
              variant="standard"
              label="City"
              item1="Islamabad"
              item2="Delhi"
              item3="Dhaka"
            />
            <SmRadio  />
          </Box>
        </Form.Group>

        <Button   onClick={saveFeed} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Box>
  );
}

export default StudentForm;
