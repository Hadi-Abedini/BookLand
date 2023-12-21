import React from "react";

function ChangePage({ currentPage, totalPages, setPage, step, text }) {
  return (
    <button
      className="text-[#4B429F] hover:text-[#7869ff] "
      onClick={() => {
        const newPage = currentPage + step;
        newPage >= 1 && newPage <= totalPages ? setPage(newPage) : "";
      }}>
      {text}
    </button>
  );
}

export default ChangePage;
