import React, { useState } from "react";
import { HorizontalDivider } from "../../divider";
import { CompareIcon, CrossbuttonIcon, SearchIcon } from "../icons";
import SearchResult from "./SearchResult";

const Compare = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const search = (e) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <>
      <label
        aria-level="Symbol"
        className="modal-button flex cursor-pointer hover:bg-lightGray justify-center items-center rounded-md tooltip tooltip-bottom"
        data-tip="Symbol search"
        htmlFor="Compare"
      >
        <span className="py-[5px] px-2 hover:bg-lightGray rounded-md">
          <CompareIcon />
        </span>
      </label>

      {/* Modal  */}
      <input type="checkbox" id="Compare" className="modal-toggle" />
      <div className="modal">
        <div
          className="modal-box w-12/12 max-w-[840px] p-0 rounded-md"
          id="modal"
        >
          <div className="sticky top-0 bg-white z-10">
            <div className="flex justify-between items-center px-5 py-3">
              <h1 className="font-semibold text-xl">Compare symbol</h1>
              <label
                htmlFor="Compare"
                className="p-2 hover:bg-lightGray rounded-md cursor-pointer"
              >
                <CrossbuttonIcon />
              </label>
            </div>
            <HorizontalDivider />

            <form onSubmit={search}>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
              >
                Search
              </label>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <SearchIcon />
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block px-4 py-2 pl-10 w-full text-base text-gray-900 bg-gray-50  border-none focus:outline-none"
                  placeholder="Search Mockups, Logos..."
                  required
                  onChange={handleChange}
                />
              </div>
            </form>
            <HorizontalDivider />
            <div className="text-[#727c89] flex justify-between items-center">
              <span className="py-3 px-6">Recent symbols</span>
            </div>
          </div>

          <SearchResult />
        </div>
      </div>
    </>
  );
};

export default Compare;
