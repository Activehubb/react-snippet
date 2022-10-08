import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  return (
    <div>
      <div className="absolute top-0 z-50 p-8 bg-white">
        <div className="flex gap-4 items-center">
          <IoSearchOutline className="w-8 h-8 text-orange-600" />
          <div className="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"></div>
          <input
            type="search"
            name="search"
            id=""
            className="border-none outline-none border-b-4 text-orange-600 w-full border-orange-600 bg-transparent placeholder:text-orange-700 text-2xl font-roboto font-bold"
          />
        </div>
        <hr />
        <div>list of seach</div>
      </div>
    </div>
  );
};

export default Search;
