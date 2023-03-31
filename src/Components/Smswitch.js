import * as React from 'react';
import Switch from '@mui/material/Switch';
import { FormControlLabel, FormGroup } from '@mui/material';

// const label = { inputProps: { 'aria-label': 'Switch demo' } };


export default function SmSwitch(props) {
  const {size, onChange,color, defaultChecked,label} = props;
  return (
    <div>
       <FormGroup>
      <FormControlLabel  control={<Switch  defaultChecked={defaultChecked} size={size} onChange={onChange} color={color}  />} label={label}  />
      {/* <Switch {...label}/> */}


    </FormGroup>
    
    </div>
  );
}