import React, { useCallback, useEffect, useState } from "react";
import { Box, Input } from "@material-ui/core";

import Table from "components/Table/Table";
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
    <Box className="Home" display="flex" alignItems="center">
      <Input
        className="HomeInput"
        placeholder="Enter the city..."
        onChange={handleOnSearch}
      />
      <Table data={cities} itemCount={cities.length} />
    </Box>
  );
};

export default Home;
