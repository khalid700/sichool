import React from "react";
import HashLoader from "react-spinners/HashLoader";

function Loading() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-300">
      <HashLoader color="blue" loading={true} size={70} />
    </div>
  );
}

export default Loading;
