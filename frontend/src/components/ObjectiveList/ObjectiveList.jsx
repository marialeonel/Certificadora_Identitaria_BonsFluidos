import React from "react";

function ObjectiveList({ objectives }) {
  return (
    <ul className="space-y-4">
      {objectives.map((objective, index) => (
        <li key={index} className="flex items-center space-x-4">
          <span className="flex items-center justify-center h-8 w-8 rounded-full border border-gray-400 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
          </span>
          <span className="text-gray-900 font-medium">{objective}</span>
        </li>
      ))}
    </ul>
  );
}

export default ObjectiveList;
