import React from "react";
import formatDateString from "../../utils/FormatDate";

function CommentsSection({ comments }) {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
      {comments.map((comment) => (
        <div key={comment.id} className="w-full">
          <div className="p-5 rounded-lg border-[3px] flex flex-col gap-2 border-[#429F4B] divide-y">
            <div className="w-full flex justify-between">
              <span className="text-sm text-slate-500">{comment.autor}</span>
              <span className="text-sm text-slate-500">
                {formatDateString(comment.createdAt)}
              </span>
            </div>
            <div className="w-full flex flex-col gap-3">
              <span className="w-full text-sm font-bold mt-2">
                {comment.title}
              </span>
              <span className="w-full">{comment.body}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentsSection;
