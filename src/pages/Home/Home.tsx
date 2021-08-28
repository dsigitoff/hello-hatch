import React, { SyntheticEvent, useCallback, useState } from "react";
import { Box, Input } from "@material-ui/core";
import { Column, Table } from "react-virtualized";
import "react-virtualized/styles.css";

import citiesData from "assets/nl.json";

import "./Home.css";

const Home = () => {
  const [cities, setCities] = useState(citiesData);

  const handleOnSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCities(
        citiesData.filter((el) => el["city"].includes(event?.target.value))
      );
    },
    [cities]
  );

  return (
    <Box className="Home" display="flex">
      <Input
        className="HomeInput"
        placeholder="Enter city..."
        onChange={handleOnSearch}
      />
      <Table
        width={500}
        height={800}
        headerHeight={50}
        rowHeight={50}
        rowCount={cities.length}
        rowGetter={({ index }) => cities[index]}
      >
        <Column label="City" dataKey="city" width={200} />
        <Column label="Population" dataKey="population" width={200} />
        <Column label="Province" dataKey="admin_name" width={200} />
      </Table>
    </Box>
  );
};

export default Home;
