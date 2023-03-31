import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel, FormGroup } from "@mui/material";

export default function SmCheckBox(props) {
  const { label, size, color, icon, checkedIcon, onChange } = props;
  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checkedIcon={checkedIcon}
              size={size}
              color={color}
              icon={icon}
              defaultChecked
              onChange={onChange}
            />
          }
          label={label}
        />
      </FormGroup>
    </div>
  );
}
