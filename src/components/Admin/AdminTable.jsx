import React from "react";
import { useTable, usePagination } from "react-table";

function AdminTable({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      usePagination
    );

  if (data.length===0) {
    return <p className="w-full h-52 flex flex-col items-center justify-center text-center text-2xl">داده ای جهت نمایش وجود ندارد</p>;
  }
  return (
    <div className="w-full flex flex-col items-center gap-5">
      <table className="w-full p-3" {...getTableProps()}>
        <thead className="w-full ">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  className=" text-right text-white font-[sans-semibold] bg-[#429F4B] p-3"
                  {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="w-full" {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <tr
                className={`w-full hover:bg-transparent ${
                  index % 2 === 0 ? "bg-[#429F4B7c]" : "bg-[#90909036]"
                }`}
                {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td className="p-3" {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AdminTable;
