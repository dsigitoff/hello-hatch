import React, { useCallback, useEffect, useState } from "react";
import { Box, Input } from "@material-ui/core";
import "react-virtualized/styles.css";

import { TCities } from "types";
import citiesData from "assets/nl.json";
import SearchableTable from "components/SearchableTable";

import "./Home.css";

const citiesWithIndex = citiesData
  .map((el, index) => [{ ...el, index }])
  .flat();

const Home = (): JSX.Element => {
  const [cities, setCities] = useState<TCities[]>(citiesWithIndex);
  const [searchString, setSearchString] = useState<string>("");

  const handleOnSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.target && setSearchString(event.target.value);
    },
    [searchString]
  );

  useEffect(() => {
    setCities(
      citiesWithIndex.filter(({ city }) =>
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
      <SearchableTable data={cities} amountRows={cities.length} />
    </Box>
  );
};

export default Home;
