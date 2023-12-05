import React from "react";
import { useTable } from "react-table";

function MyTable({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });
  return (
    <table className="w-full p-3" {...getTableProps()}>
      <thead className="w-full ">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th className="w-1/4 text-right text-white font-[sans-semibold] bg-[#4B429F] p-3" {...column.getHeaderProps()}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="w-full" {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row);
          return (
            <tr
              className={`w-full hover:bg-transparent ${
                index % 2 === 0 ? "bg-[#4b429f7c]" : "bg-[#90909036]"
              }`}
              {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td className="w-1/4 p-3" {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default MyTable;
