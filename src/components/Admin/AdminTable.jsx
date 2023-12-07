import React, { useEffect } from "react";
import { useTable, usePagination } from "react-table";
import Pagination from "../Pagination/Pagination";

function AdminTable({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    pageOptions,
    gotoPage,
    setPageSize,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
    },
    usePagination
  );
  useEffect(() => {
    setPageSize(5);
  }, [setPageSize]);
  

  return (
    <div className="flex flex-col items-center gap-5">
      <table className="w-full p-3" {...getTableProps()}>
        <thead className="w-full ">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  className=" text-right text-white font-[sans-semibold] bg-[#4B429F] p-3"
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
                  index % 2 === 0 ? "bg-[#4b429f7c]" : "bg-[#90909036]"
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
      <Pagination
        currentPage={pageIndex + 1}
        totalPages={pageOptions.length}
        url={"http://localhost:5173/control-panel/order"}
        onPageChange={(e) => {
          gotoPage(e - 1);
        }}
      />
    </div>
  );
}

export default AdminTable;
