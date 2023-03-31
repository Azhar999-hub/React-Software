import { Button } from "@mui/material";
import React from "react";



import { FidgetSpinner } from "react-loader-spinner";

const SmButton = (props) => {
  const { onClick, label, loading, variant, startIcon, endIcon, size, color } = props;
  return (
    <div>
      <Button onClick={onClick} variant={variant} startIcon={startIcon} endIcon={endIcon} size={size} color={color}>
        {loading ? (
          <FidgetSpinner
            visible={true}
            height="30"
            width="40"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            ballColors={["#ff0000", "#00ff00", " #ffffff"]}
            backgroundColor="#F4442E"
          />
        ) : (
          label
        )}
      </Button>
    </div>
  );
};

export default SmButton;
