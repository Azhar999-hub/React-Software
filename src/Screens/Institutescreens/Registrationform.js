import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import KeyIcon from "@mui/icons-material/Key";
import { useNavigate } from "react-router-dom";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import { getFbData, userSignUp } from "../../Config/Firebasemethods";
import SmInput from "../../Components/Sminput";
import SmDropdown from "../../Components/Smdropdown";
import SmButton from "../../Components/Smbutton";

const RegistrationForm = () => {
  
  let navigation = useNavigate();
  const [loader, setloader] = useState(false);
  const [val, setval] = useState({});
  const [registration, setregistration] = useState({
    registrationOpen: true,
  });

  let signUpUser = () => {
    setloader(true);
    userSignUp(val)
      .then((res) => {
        setloader(false);
        navigation("/Dashboard");
        console.log(res);
      })
      .catch((err) => {
        setloader(false);
        console.log(err.message);
      });
  };

  let goToLogin = () => {
    navigation("/login");
  };

  const getStatus = () => {
    setloader(true);
    getFbData("CourseContol")
      .then((res) => {
        console.log(res);
        setregistration({ ...res });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getStatus();
  }, []);

  return loader ? (
    <Typography>Loading...</Typography>
  ) : registration.registrationOpen ? (
    <div className="background">
      <Box
        sx={{ height: "auto" }}
        className="d-flex justify-content-center align-items-center">
        <Paper className="p-4" elevation={8}>
          <Box>
            <Typography className=" text-center text-primary mb-4" variant="h3">
              <span className="badge bg-primary">
                {" "}
                Register <FingerprintIcon fontSize="large" />{" "}
              </span>
            </Typography>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <SmInput
                label="Student Name"
                variant="standard"
                onChange={(e) => setval({ ...val, userName: e.target.value })}
              />
              <Box className="mt-3">
                <SmInput
                  variant="standard"
                  icon={<KeyIcon color="primary" />}
                  type="number"
                  label="CNIC"
                  onChange={(e) => setval({ ...val, password: e.target.value })}
                />
              </Box>
              <Box className="mt-3">
                <SmDropdown label="Course" item="Mern" />
              </Box>
              <Box className="mt-3">
                <SmDropdown label="Section" item="A" />
              </Box>
              <Box className="mt-4">
                <SmInput
                  variant="standard"
                  type="password"
                  label="Password"
                  onChange={(e) => setval({ ...val, password: e.target.value })}
                />
              </Box>

              <Box className="mt-3">
                <SmDropdown label="City" item="Karachi" />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <SmInput
                variant="standard"
                label="Father Name"
                onChange={(e) => setval({ ...val, email: e.target.value })}
              />
              <Box className="mt-3">
                <SmInput
                  type="number"
                  variant="standard"
                  label="Contact"
                  onChange={(e) => setval({ ...val, email: e.target.value })}
                />
              </Box>
              <Box className="mt-3">
                <SmDropdown label="Last Qualification" item="Intermediate" />
              </Box>
              <Box className="mt-3">
                <SmInput
                  variant="filled"
                  disabled
                  type="text"
                  label="Institute"
                  onChange={(e) => setval({ ...val, password: e.target.value })}
                />
              </Box>
              <Box className="mt-3">
                <SmInput
                  variant="standard"
                  type="email"
                  label="Email"
                  onChange={(e) => setval({ ...val, password: e.target.value })}
                />
              </Box>

              <Box className="mt-3">
                <SmDropdown label="Country" item="Karachi" />
              </Box>
            </Grid>
          </Grid>

          <Box className="mt-4 d-flex justify-content-center align-items-center">
            <SmButton
              size="large"
              variant="contained"
              loading={loader}
              onClick={signUpUser}
              label="Register"
            />
          </Box>
          <Box className="mt-4 d-flex justify-content-center align-items-center">
            <p>
              Already have an account{" "}
              <a href=" " onClick={goToLogin}>
                Log in
              </a>
            </p>
          </Box>
        </Paper>
      </Box>
    </div>
  ) : (
    <Typography>Form is No More</Typography>
  );
};

export default RegistrationForm;
