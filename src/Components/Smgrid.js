import { Typography } from "@mui/material";
import React from "react";
import { Table } from "react-bootstrap";
import { FidgetSpinner } from "react-loader-spinner";

const SMGrid = (props) => {
  const { title, columns, datasource, isLoading } = props;

  return (
    <div>
      {isLoading ? (
        <FidgetSpinner
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          ballColors={["#ff0000", "#00ff00", " #ffffff"]}
          backgroundColor="#F4442E"
        />
      ) : datasource && Array.isArray(datasource) && datasource.length < 1 ? (
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/016/026/432/small/user-not-found-account-not-register-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
          width="40%"
          alt="No Data Found :("
        />
      ) : (
        <div>
          <Typography className=" text-center text-primary mb-4" variant="h3">
            {title}
          </Typography>
          <Table className="text-center" bordered hover>
            <thead className="bg-black text-white">
              <tr>
                {columns && Array.isArray(columns) && columns.length > 0
                  ? columns.map((x, i) => <th key={i}>{x.displayName}</th>)
                  : null}
              </tr>
            </thead>
            <tbody>
              {datasource && Array.isArray(datasource) && datasource.length > 0
                ? datasource.map((x, i) => (
                    <tr key={i}>
                      {columns.map((e, ind) => (
                        <td key={ind}>
                          {e.displayField ? e.displayField(x) : x[e.key]}
                        </td>
                      ))}
                    </tr>
                  ))
                : null}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default SMGrid;
