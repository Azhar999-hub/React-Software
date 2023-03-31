import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import SMGrid from "../../Components/Smgrid";
import { Get } from "../../Config/Apibasemethods";



const Todos = () => {
  const [usersList, setUsersList] = useState([]);
  let [loader, setLoader] = useState(false);

  let columns = [
    {
      key: "id",
      displayName: "User Id",
    },
    {
      key: "title",
      displayName: "Title",
    },
  ];

  let getData = () => {
    Get("todos")
      .then((res) => {
        setUsersList(res.data);
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
    <Container>
      <SMGrid
        isLoading={loader}
        title="Todos Data"
        datasource={usersList}
        columns={columns}
      />
    </Container>
  );
};

export default Todos;
