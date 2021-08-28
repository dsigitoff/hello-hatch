import React from "react";
import { Box, Container, Input } from "@material-ui/core";

import { Table } from "components/Table";

import "./Home.css";


const Home = () => {
  return (
      <Box className="Home" display="flex">
        <Input className="HomeInput" placeholder="Enter city name..." />
        <Container>
          <Table />
        </Container>
      </Box>
  );
};

export default Home;
