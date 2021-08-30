import React, { useMemo, useState } from "react";
import { throttle } from "lodash";

import "./SearchableTable.css";

const amountRowsBuffered = 2;
const rowHeight = 40;
const viewportHeight = 500;

interface TSearchableTableProps {
  // TODO: add types
  data: any;
  amountRows: number;
}

const SearchableTable = ({
  data,
  amountRows = 0,
}: TSearchableTableProps): JSX.Element => {
  const [scrollTop, setScrollTop] = useState<number>(0);

  const indexStart = Math.max(
    Math.floor(scrollTop / rowHeight) - amountRowsBuffered,
    0
  );

  const indexEnd = Math.min(
    Math.ceil((scrollTop + viewportHeight) / rowHeight - 1) +
      amountRowsBuffered,
    amountRows - 1
  );

  const handleOnUpdate = throttle(
    (event) => setScrollTop(event.target.scrollTop),
    100,
    {
      leading: false,
    }
  );

  return useMemo(
    () => (
      <table onScroll={handleOnUpdate} className="SearchableTable">
        <tbody
          style={{ height: amountRows * rowHeight }}
          className="SearchableTableBody"
        >
          {[...data].slice(indexStart, indexEnd).map((element) => (
            <tr
              className="SearchableTableRow"
              key={element.city + element.population}
              style={{ top: rowHeight * element.index }}
            >
              <td className="SearchableTableCell">{element.city}</td>
              <td className="SearchableTableCell">{element.population}</td>
              <td className="SearchableTableCell">{element.admin_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ),
    [scrollTop, data]
  );
};

export default SearchableTable;
