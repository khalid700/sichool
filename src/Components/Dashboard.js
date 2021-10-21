import React from "react";
import Header from "./Header";
import ChaptersList from "./ChaptersList";
import CoursesList from "./CoursesList";
import { listCourses } from "../CoursesList";

const chapterList = [
  {
    name: "Standard form",
  },
  {
    name: "Standard form",
  },
  {
    name: "Standard form",
  },
];

function Dashboard() {
  return (
    <div>
      <Header />

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <CoursesList listCourses={listCourses} />
      </div>
    </div>
  );
}

export default Dashboard;
