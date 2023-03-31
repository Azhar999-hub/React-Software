import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import SMGrid from "../../Components/Smgrid";
import { Get } from "../../Config/Apibasemethods";




const Users = () => {
  let [data, setData] = useState([]);
  let [loader, setLoader] = useState(false);

  let columns = [
    {
      key: "id",
      displayName: "Id",
    },
    {
      key: "name",
      displayName: "Name",
    },
    {
      key: "phone",
      displayName: "Phone Number",
    },
    {
      key: "email",
      displayName: "Email",
      displayField: (e) => <a href={`mailto:${e.email}`}>{e.email}</a>
    },
  ];

  let getData = () => {
    Get("users")
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
  });

  return (
    <Container>
      <SMGrid
      title="Users Data"
      isLoading={loader}
      datasource = {data}
      columns={columns} />
    </Container>
  );
};

export default Users;
