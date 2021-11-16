import React from "react";
import Header from "./Header";
import CoursesList from "./CoursesList";

function Main() {
  return (
    <div>
      <Header />

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <CoursesList />
      </div>
    </div>
  );
}

export default Main;
