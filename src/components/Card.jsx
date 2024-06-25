import React from "react";
import { FcLike } from "react-icons/fc";
import { toast } from "react-toastify";
import { FcLikePlaceholder } from "react-icons/fc";
const Card = (props) => {
  let currentCourse = props.currentCourse;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler() {
    if (likedCourses.includes(currentCourse.id)) {
      setLikedCourses((prev) => prev.filter((cid) => cid !== currentCourse.id));
      toast.warning("like removed...");
    } else {
      if (likedCourses.length === 0) {
        setLikedCourses([currentCourse.id]);
      } else {
        setLikedCourses((prev) => {
          return [...prev, currentCourse.id];
        });
      }
      toast.success("liked successfully...");
    }
  }
  return (
    <div className="w-[300px] bg-opacity-80 bg-[#22223b] rounded-md overflow-hidden">
      <div className="relative">
        <img src={currentCourse.image.url} alt="card-image" />
        <div>
          <button
            onClick={clickHandler}
            className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center"
          >
            {likedCourses.includes(currentCourse.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6 ">
          {currentCourse.title}
        </p>
        <p className="text-white mt-2">
          {currentCourse.description.length > 100
            ? `${currentCourse.description.substr(0, 100)}...`
            : currentCourse.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
