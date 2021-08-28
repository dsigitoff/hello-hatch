import React from "react";
import { Box, Container, Input } from "@material-ui/core";
import { Grid } from "react-virtualized";

import "./Home.css";

const Home = () => {
  return (
    <Box className="Home" display="flex">
      <Input className="HomeInput" placeholder="Enter city..." />
      <Container>
        <Grid
          cellRenderer={() => null}
          columnCount={5}
          columnWidth={25}
          height={50}
          width={500}
          rowCount={5}
          rowHeight={20}
        />
      </Container>
    </Box>
  );
};

export default Home;
