import { Add, Favorite, FavoriteBorder } from "@mui/icons-material";
import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import SmButton from "../../Components/Smbutton";
import SmInput from "../../Components/Sminput";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import SmSwitch from "../../Components/Smswitch";
import SmCheckBox from "../../Components/Smcheckbox";
import SmModal from "../../Components/Smmodal";
import SmRadio from "../../Components/Smradio";
import SMGrid from "../../Components/Smgrid";
import { Get } from "../../Config/Apibasemethods";
import SmSnackbar from "../../Components/Smsnackbar";

const Testing = () => {
  const [data, setData] = useState([]);
  let [loader, setLoader] = useState(false);
  const [open, setOpen] = useState(false);
  const [op, setOp] = useState(false);
  

  const handleClick = () => {
    setOp(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOp(false);
  };

 
    let columns = [
      {
        key: "id",
        displayName: "User Id",
      },
      {
        key: "title",
        displayName: "Title",
      },
      {
        key: "body",
        displayName: "Body",
      },
    ];

  let getData = () => {
    Get("posts")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 2000);
    getData();
  }, []);

  return (
    <Box>
      <Typography
        className="text-success"
        align="center"
        variant="h4"
        component="h2">
        Components Testing & Documentation
      </Typography>
      <Box>
        <Typography className="text-primary my-2" variant="h5" component="h4">
          1. Button
        </Typography>
        <Box>
          <Table striped bordered hover>
            <thead className="bg-primary">
              <tr>
                <th>#</th>
                <th>Props Name</th>
                <th>Props Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>label</td>
                <td>Name of Button</td>
              </tr>
              <tr>
                <td>2</td>
                <td>onClick</td>
                <td>Action Perform</td>
              </tr>
              <tr>
                <td>3</td>
                <td>size</td>
                <td>'small', 'large','medium'</td>
              </tr>
              <tr>
                <td>4</td>
                <td>variant</td>
                <td>'contained' | 'outlined' | 'text' </td>
              </tr>
              <tr>
                <td>5</td>
                <td>color</td>
                <td>'inherit' | 'primary' | 'secondary' | 'success' | error</td>
              </tr>
              <tr>
                <td>6</td>
                <td>startIcon</td>
                <td>Element placed before the children.</td>
              </tr>
              <tr>
                <td>7</td>
                <td>endIcon</td>
                <td>Element placed after the children.</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Loading</td>
                <td>Loader</td>
              </tr>
            </tbody>
          </Table>
        </Box>
        <Box>
          <Paper
            className="d-flex justify-content-between p-3 bg-light"
            elevation={5}>
            <Box>
              <SmButton label="contained" variant="contained" size="small" />
            </Box>
            <Box>
              <SmButton label="Outlined" variant="outlined" size="medium" />
            </Box>
            <Box>
              <SmButton
                label="Secondary"
                variant="contained"
                size="large"
                color="secondary"
              />
            </Box>
            <Box>
              <SmButton
                startIcon={<Add />}
                label="startIcon"
                variant="outlined"
                size="large"
                color="success"
              />
            </Box>
            <Box>
              <SmButton
                endIcon={<Add />}
                label="endIcon"
                variant="contained"
                size="large"
              />
            </Box>
          </Paper>
        </Box>
      </Box>

      <Box className="my-5">
        <Typography className="text-primary my-2" variant="h5" component="h4">
          2. Input
        </Typography>
        <Box>
          <Table striped bordered hover>
            <thead className="bg-primary">
              <tr>
                <th>#</th>
                <th>Props Name</th>
                <th>Props Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>label</td>
                <td>Placeholder</td>
              </tr>
              <tr>
                <td>2</td>
                <td>onChane</td>
                <td>function(event.target.value)</td>
              </tr>
              <tr>
                <td>3</td>
                <td>variant</td>
                <td>'filled' | 'outlined' | 'standard'</td>
              </tr>
              <tr>
                <td>4</td>
                <td>type</td>
                <td>'password' | 'number' | 'search' </td>
              </tr>
              <tr>
                <td>5</td>
                <td>icon</td>
                <td>icon</td>
              </tr>
              <tr>
                <td>6</td>
                <td>color</td>
                <td>
                  'primary' | 'secondary' | 'error' | 'info' | 'success' |
                  'warning'
                </td>
              </tr>
            </tbody>
          </Table>
        </Box>
        <Box>
          <Paper
            className="d-flex justify-content-between p-3 bg-light"
            elevation={5}>
            <Box>
              <SmInput label="Outlined" variant="outlined" />
            </Box>
            <Box>
              <SmInput label="Filled" variant="filled" />
            </Box>
            <Box>
              <SmInput
                color="success"
                icon={<AlternateEmailIcon color="primary" />}
                label="Standard"
                variant="filled"
              />
            </Box>
            <Box>
              <SmInput type="password" label="Password" variant="standard" />
            </Box>
          </Paper>
        </Box>
      </Box>
      <Box className="my-5">
        <Typography className="text-primary my-2" variant="h5" component="h4">
          3. Switch
        </Typography>
        <Box>
          <Table striped bordered hover>
            <thead className="bg-primary">
              <tr>
                <th>#</th>
                <th>Props Name</th>
                <th>Props Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>size</td>
                <td> 'medium' | 'small' | string</td>
              </tr>
              <tr>
                <td>2</td>
                <td>onChange</td>
                <td>function(event.target.value)</td>
              </tr>
              <tr>
                <td>3</td>
                <td>color</td>
                <td>
                  'default' | 'primary' | 'secondary' | 'error' | 'info' |
                  'success' | 'warning'
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>label</td>
                <td>Name of Switch </td>
              </tr>
              <tr>
                <td>5</td>
                <td>defaultChecked</td>
                <td>
                  The default checked state. Use when the component is not
                  controlled.
                </td>
              </tr>
            </tbody>
          </Table>
        </Box>
        <Box>
          <Paper
            className="d-flex justify-content-between p-3 bg-light"
            elevation={5}>
            <Box>
              <SmSwitch defaultChecked />
            </Box>
            <Box>
              <SmSwitch size="large" label="start" />
            </Box>
            <Box>
              <SmSwitch
                defaultChecked
                size="large"
                label=""
                color="secondary"
              />
            </Box>
            <Box>
              <SmSwitch defaultChecked size="small" label="" color="error" />
            </Box>
          </Paper>
        </Box>
      </Box>
      <Box className="my-5">
        <Typography className="text-primary my-2" variant="h5" component="h4">
          4. CheckBoxes
        </Typography>
        <Box>
          <Table striped bordered hover>
            <thead className="bg-primary">
              <tr>
                <th>#</th>
                <th>Props Name</th>
                <th>Props Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>size</td>
                <td> 'medium' | 'small' | string</td>
              </tr>
              <tr>
                <td>2</td>
                <td>icon</td>
                <td>icon</td>
              </tr>
              <tr>
                <td>3</td>
                <td>color</td>
                <td>
                  'default' | 'primary' | 'secondary' | 'error' | 'info' |
                  'success' | 'warning'
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>label</td>
                <td>Name of checkbox </td>
              </tr>
              <tr>
                <td>5</td>
                <td>defaultChecked</td>
                <td>
                  The default checked state. Use when the component is not
                  controlled.
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>checkedIcon</td>
                <td>The icon to display when the component is checked.</td>
              </tr>
              <tr>
                <td>7</td>
                <td>onChange</td>
                <td>function(event.target.value)</td>
              </tr>
            </tbody>
          </Table>
        </Box>
        <Box>
          <Paper
            className="d-flex justify-content-between p-3 bg-light"
            elevation={5}>
            <Box>
              <SmCheckBox />
            </Box>
            <Box>
              <SmCheckBox
                color="secondary"
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
              />
            </Box>
            <Box>
              <SmCheckBox size="large" color="warning" label="Check" />
            </Box>
          </Paper>
        </Box>
      </Box>

      <Box className="my-5">
        <Typography className="text-primary my-2" variant="h5" component="h4">
          5. Modal
        </Typography>
        <Box>
          <Table striped bordered hover>
            <thead className="bg-primary">
              <tr>
                <th>#</th>
                <th>Props Name</th>
                <th>Props Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>title</td>
                <td>Heading Of Modal</td>
              </tr>
              <tr>
                <td>2</td>
                <td>open</td>
                <td>Modal is open when click the button</td>
              </tr>
              <tr>
                <td>3</td>
                <td>close</td>
                <td>Modal is close when click the button</td>
              </tr>
              <tr>
                <td>4</td>
                <td>innercontent</td>
                <td>Body content of Modal</td>
              </tr>
              <tr>
                <td>5</td>
                <td>footer</td>
                <td>Bottom Content of Page</td>
              </tr>
            </tbody>
          </Table>
        </Box>
        <Box>
          <Paper
            className="d-flex justify-content-between p-3 bg-light"
            elevation={5}>
            <Box>
              <SmButton
                onClick={() => setOpen(true)}
                label="Feedback"
                variant="contained"
              />
            </Box>
            <Box>
              <SmModal
                title="Dummy Modal"
                innerContent={
                  <Box>
                    <Box className="my-3">
                      <SmInput label="Name" variant="standard" />
                    </Box>
                    <Box className="my-3">
                      <SmInput label="Email" variant="standard" />
                    </Box>
                    <Box className="my-3">
                      <SmInput label="Discription" variant="standard" />
                    </Box>
                    <Box>
                      <SmButton label="save" variant="contained" />
                    </Box>
                  </Box>
                }
                close={(e) => setOpen(e)}
                open={open}
              />
            </Box>
          </Paper>
        </Box>
      </Box>

      <Box className="my-5">
        <Typography className="text-primary my-2" variant="h5" component="h4">
          6. Radio
        </Typography>
        <Box>
          <Table striped bordered hover>
            <thead className="bg-primary">
              <tr>
                <th>#</th>
                <th>Props Name</th>
                <th>Props Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>value</td>
                <td>any</td>
              </tr>
              <tr>
                <td>2</td>
                <td>name</td>
                <td>Name like Gender, string</td>
              </tr>
              <tr>
                <td>3</td>
                <td>label</td>
                <td>Label of radio, string </td>
              </tr>
              <tr>
                <td>4</td>
                <td>size</td>
                <td>Size of Radio, string</td>
              </tr>
              <tr>
                <td>5</td>
                <td>onChange</td>
                <td>function</td>
              </tr>
            </tbody>
          </Table>
        </Box>
        <Box>
          <Paper
            className="d-flex justify-content-between p-3 bg-light"
            elevation={5}>
            <Box>
              <SmRadio name={"Nationalty"} label="Pakistani" />
            </Box>
          </Paper>
        </Box>
      </Box>
      <Box className="my-5">
        <Typography className="text-primary my-2" variant="h5" component="h4">
          7. Table
        </Typography>
        <Box>
          <Table striped bordered hover>
            <thead className="bg-primary">
              <tr>
                <th>#</th>
                <th>Props Name</th>
                <th>Props Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>title</td>
                <td>Name of Table, String</td>
              </tr>
              <tr>
                <td>2</td>
                <td>columns</td>
                <td>columns of Table, string</td>
              </tr>
              <tr>
                <td>3</td>
                <td>isLoading</td>
                <td>loader</td>
              </tr>
              <tr>
                <td>4</td>
                <td>datasource</td>
                <td>data of table, array</td>
              </tr>
            </tbody>
          </Table>
        </Box>
        <Box>
          <Paper
            className="d-flex justify-content-between p-3 bg-light"
            elevation={5}>
            <Box>
              <SMGrid datasource={data} columns={columns} isLoading={loader} />
            </Box>
          </Paper>
        </Box>
      </Box>

      <Box className="my-5">
        <Typography className="text-primary my-2" variant="h5" component="h4">
          8. Show Message
        </Typography>
        <Box>
          <Table striped bordered hover>
            <thead className="bg-primary">
              <tr>
                <th>#</th>
                <th>Props Name</th>
                <th>Props Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>message</td>
                <td>Message show, String</td>
              </tr>
              <tr>
                <td>2</td>
                <td>severity</td>
                <td>color of snackbar, string</td>
              </tr>
              <tr>
                <td>3</td>
                <td>onClose</td>
                <td>function</td>
              </tr>
              <tr>
                <td>4</td>
                <td>open</td>
                <td>state</td>
              </tr>
            </tbody>
          </Table>
        </Box>
        <Box>
          <Paper
            className="d-flex justify-content-between p-3 bg-light"
            elevation={5}>
            <Box>
            <Button variant="contained" onClick={handleClick}>
             Open snackbar
            </Button>
              <SmSnackbar open={op} onClose={handleClose}  severity="error" message="This is an rrror message"/>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Testing;
