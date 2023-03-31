import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { getFbData, postFbData } from "../../Config/Firebasemethods";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SmSelect from "../../Components/Smselect";

function InstituteForm() {
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
    postFbData("InstituteForm", model)
      .then(() => {
        console.log("Save SuccessFully !");
        setOpen(false);
        setmsgOpen(true);
        setloader(false);
        setCondition("success");
        setRes("Save SuccessFully !");
        navigation("/Dashboard/Institute");
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
    getFbData("InstititeForm")
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
  };

 

  useEffect(() => {
    showData();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}></Grid>
      <Typography
        className=" text-center text-primary mt-3 mb-3"
        variant="h3">Institute Form</Typography>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Institute Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Institute Name"
            onChange={(e) => setModel({ ...model, InstituteName: e.target.value })}
          />

          <Form.Label>No of Campus</Form.Label>
          <Form.Control
            type="number"
            placeholder="No of Campus"
            onChange={(e) => setModel({ ...model, NoOfCampus: e.target.value })}
          />

          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Location"
            onChange={(e) => setModel({ ...model, Location: e.target.value })}
          />
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Address"
            onChange={(e) => setModel({ ...model, Address: e.target.value })}
          />
          <Form.Label>Contact</Form.Label>
          <Form.Control
            type="text"
            placeholder="Contact"
            onChange={(e) => setModel({ ...model, Contact: e.target.value })}
          />
          <Form.Label>Owner Contact</Form.Label>
          <Form.Control
            type="text"
            placeholder="Owner Contact"
            onChange={(e) => setModel({ ...model, OwnerContact: e.target.value })}
          />
          <Form.Label>Owner Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Owner Email"
            onChange={(e) => setModel({ ...model, OwnerEmail: e.target.value })}
          />
          <Box className="mt-3">
            <SmSelect
              onChange={(e) => setModel({ ...model, InstituteType: e.target.value })}
              variant="standard"
              label="Institute Type"
              item1="School"
              item2="Institute"
              item3="College"
            />
          </Box>
        </Form.Group>
        <Button   onClick={saveFeed} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Box>
  );
}

export default InstituteForm;
