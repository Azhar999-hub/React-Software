
import { Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SmButton from '../../Components/Smbutton'
import SmSwitch from '../../Components/Smswitch'
import { getFbData, postFbData } from '../../Config/Firebasemethods'


const RegistrationControl = () => {
  const [loader, setLoader] = useState(false);
  const [model, setModel] = useState(false);

const save =()=>
{
  model.courseList=[
    { subject:"Mern"}
  ];
  setLoader(true);
    postFbData("CourseContol", model)
      .then((res) => {
        console.log("Save SuccessFully !", res);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
      });
}

let getDt = () => {
  getFbData("CourseContol")
    .then((res) => {
      console.log("Data Fetched Successfully  ", res);
    })
    .catch((err) => {
      console.log(err);
    });

};

useEffect(()=>{
getDt();
},[])

  return (
    <div>
      <h1>Registration Control</h1>
      <Box>
        <Box>
        <SmSwitch onChange={(e)=>setModel({...model, registrationOpen: e.target.checked})} size="large" />
        </Box>
        <Box>
          <SmButton loading={loader}/>
          <Button variant='contained' onClick={save}>Course Open</Button>
        </Box>
      </Box>

      </div>

  )
}

export default RegistrationControl