import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const SmSelect = (props) => {
  const {label, value, onChange, item1, item2,item3,variant} = props;
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
        variant={variant}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={onChange}
        >
          <MenuItem value={item1} >{item1}</MenuItem>
          <MenuItem   value={item2}>{item2}</MenuItem>
          <MenuItem  value={item3} >{item3}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default SmSelect