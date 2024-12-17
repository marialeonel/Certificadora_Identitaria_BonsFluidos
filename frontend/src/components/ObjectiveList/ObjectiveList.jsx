import React from "react";

function ObjectiveList({ objectives }) {
  return (
    <div className="flex flex-col gap-8 mb-24">
      {objectives.map((objective, index) => (
        <div key={index} className="flex gap-8">
          <span className="flex items-center justify-center h-8 w-8 rounded-full text-logo-color">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-12 w-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
          </span>
          <p className="text-black font-medium">{objective}</p>
        </div>
      ))}
    </div>
  );
}

export default ObjectiveList;
