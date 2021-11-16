import React, { useEffect, useState } from "react";
import { onSnapshot, query, collection } from "firebase/firestore";
import { db } from "../firebase";
import Loading from "./Loading";

function CoursesList() {
  const [listCourses, setListCourses] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "courses"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const courses = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setListCourses(courses);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="antialiased text-gray-900 font-sans p-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          {listCourses.length === 0 && (
            // <h2 className="mt-6 text-center text-3xl px-3 font-extrabold text-gray-900">
            //   No courses found
            // </h2>
            <Loading />
          )}
          {listCourses &&
            listCourses.map((course) => (
              <div
                key={course.id}
                className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4"
              >
                <a
                  href="/"
                  className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
                >
                  <div className="p-4">
                    <h2 className="mt-2 mb-2  font-bold">{course.name}</h2>
                    <p className="mb-2 line-clamp-4 text-sm">
                      {course.description}
                    </p>
                    <span className="font-bold text-xl">{course.topic}</span>
                  </div>
                  <div className="p-4 border-t border-b text-xs text-gray-700">
                    <span className="flex items-center mb-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {course.time}
                    </span>
                    <span className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                        />
                      </svg>
                      {course.teacher}
                    </span>
                  </div>
                  <div className="p-4 flex items-center text-sm text-gray-600">
                    {Array.from(Array(course.difficulty), (e, i) => {
                      return (
                        <svg
                          key={i}
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 fill-current text-yellow-500"
                        >
                          <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                        </svg>
                      );
                    })}
                    {Array.from(Array(5 - course.difficulty), (e, i) => {
                      return (
                        <svg
                          key={i}
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 fill-current text-gray-400"
                        >
                          <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                        </svg>
                      );
                    })}
                    <span className="ml-2">{course.level}</span>
                  </div>
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default CoursesList;
