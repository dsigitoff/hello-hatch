import React from "react";
import { FixedSizeList, ListChildComponentProps } from "react-window";

import { TCities } from "types";

import "./Table.css";

interface TTableProps {
  itemCount: number;
  data: TCities[];
}

const mock = ["city", "population", "admin_name"];

const Table = ({ itemCount, data }: TTableProps): JSX.Element => {
  const Row = ({ index, style }: ListChildComponentProps): JSX.Element => (
    <div style={style} className="TableRow">
      {mock.map((el) => (
        <div key={el} className="TableRowItem">
          {/*@ts-ignore*/}
          {data[index][el]}
        </div>
      ))}
    </div>
  );
  const Column = ({ index, style }: ListChildComponentProps): JSX.Element => (
    <div className="TableHeader" style={style}>
      {mock[index]}
    </div>
  );

  return (
    <>
      <FixedSizeList
        layout="horizontal"
        itemCount={3}
        height={100}
        itemSize={270}
        width={800}
      >
        {Column}
      </FixedSizeList>
      <FixedSizeList
        itemCount={itemCount}
        height={500}
        itemSize={50}
        width={800}
      >
        {Row}
      </FixedSizeList>
    </>
  );
};

export default Table;
