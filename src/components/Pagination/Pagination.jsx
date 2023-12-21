import React from "react";
import ChangePage from "./ChangePage";

function Pagination({ currentPage, totalPages, setPage }) {
  const generateATags = () => {
    const aTags = [];
    for (let i = 1; i <= totalPages; i++) {
      aTags.push(
        <button
          className={`${
            i === currentPage
              ? "bg-[#4B429F] text-white"
              : "hover:outline hover:outline-2  hover:outline-[#4B429F]"
          } flex justify-center items-center w-9 h-9 rounded-full`}
          key={i}
          value={i}
          onClick={(e) => {
            const newPage = parseInt(e.target.value, 10);
            setPage(newPage);
          }}>
          {i}
        </button>
      );
    }
    return aTags;
  };

  if (totalPages > 1) {
    return (
      <div className="w-full  items-center flex justify-evenly">
        <ChangePage
          currentPage={currentPage}
          totalPages={totalPages}
          step={-1}
          setPage={setPage}
          text={"قبلی"}
        />
        <div className="flex gap-3">{generateATags()}</div>
        <ChangePage
          currentPage={currentPage}
          totalPages={totalPages}
          step={+1}
          setPage={setPage}
          text={"بعدی"}
        />
      </div>
    );
  }
}

export default Pagination;
