import React, { useState } from "react";
import Card from "./Card";

function Cards({ course, category }) {
  const [likedCourses, setLikedCourses] = useState([]);
  const getCourses = () => {
    if (category === "All") {
      let allCourses = []; // empty array
      Object.values(course).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });

      return allCourses;
    } else {
      return course[category];
    }
  };

  return (
    <div className="flex flex-wrap justify-center space-x-5">
      {getCourses().map((currentCourse) => {
        return (
          <Card
            key={currentCourse.id}
            currentCourse={currentCourse}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        );
      })}
    </div>
  );
}

export default Cards;
