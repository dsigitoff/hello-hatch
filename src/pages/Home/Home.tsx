import React, { useCallback, useEffect, useState } from "react";
import { Box, Input } from "@material-ui/core";
import { Column, Table } from "react-virtualized";
import "react-virtualized/styles.css";

import citiesData from "assets/nl.json";
import { TCities } from "types";

import "./Home.css";

const Home = (): JSX.Element => {
  const [cities, setCities] = useState<TCities[]>(citiesData);
  const [searchString, setSearchString] = useState<string>("");

  const handleOnSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.target && setSearchString(event.target.value);
    },
    [searchString]
  );

  useEffect(() => {
    setCities(
      citiesData.filter(({ city }) =>
        city.toLowerCase().includes(searchString.toLowerCase())
      )
    );
  }, [searchString]);

  return (
    <Box className="Home" display="flex">
      <Input
        className="HomeInput"
        placeholder="Enter the city..."
        onChange={handleOnSearch}
      />
      <Table
        width={500}
        height={600}
        headerHeight={50}
        rowHeight={50}
        rowCount={cities.length}
        rowGetter={({ index }) => cities[index]}
      >
        <Column label="City" dataKey="city" width={300} />
        <Column label="Population" dataKey="population" width={200} />
        <Column label="Province" dataKey="admin_name" width={200} />
      </Table>
    </Box>
  );
};

export default Home;
