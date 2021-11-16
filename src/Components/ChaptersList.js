import React from "react";

function ChaptersList(props) {
  const { chapterList } = props;
  return (
    <div className="flex-col justify-center mx-6">
      {chapterList &&
        chapterList.map((chapter) => {
          return (
            <a
              href="/"
              className="flex group items-center bg-gray-100 hover:bg-gray-400 hover:text-white my-3 p-2 hover:shadow-lg rounded border-1 border-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-3 text-gray-500 group-hover:text-white "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-gray-500 group-hover:text-white ">
                {chapter.name}
              </p>
            </a>
          );
        })}
    </div>
  );
}

export default ChaptersList;
