import React from "react";

function Filter({ filterData, category, setCategory }) {
  function filterHandler(title) {
    setCategory(title);
  }
  return (
    <div className="ww-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
      {filterData.map((currentData, index) => {
        return (
          <button
            onClick={() => filterHandler(currentData.title)}
            key={currentData.id}
            className={`text-lg px-2 py-1 rounded-md font-medium text-white  hover:bg-black bg-opacity-80 border-2 transition-all duration-300
              ${
                category === currentData.title
                  ? "bg-opacity-60 border-white"
                  : "bg-opacity-40 border-transparent"
              }
              `}
          >
            {currentData.title}{" "}
          </button>
        );
      })}
    </div>
  );
}

export default Filter;
