import React from "react";

function ChangePage({ currentPage, onPageChange, step, text }) {
  return (
    <button
      className="text-[#4B429F] "
      onClick={() => {
        const newPage = parseInt(currentPage + step, 10);
        onPageChange(newPage);
      }}>
      {text}
    </button>
  );
}

export default ChangePage;
