import React from "react";

const Table = ({ symbleImage, symbleName, description, data }) => {
  // let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="overflow-x-auto relative" id="table">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <tbody>
          {data.map((index) => (
            <tr
              className="bg-white border-b border-gray hover:bg-lightGray"
              key={index}
            >
              <td className="py-4 flex items-center px-5">
                <img
                  src={symbleImage}
                  alt="crypto-name"
                  className="rounded-full h-4"
                />
                <span className="text-primary font-semibold ml-2 ">
                  {symbleName}
                </span>
              </td>
              <td className="py-4 w-72 px-5">
                {description} {index}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
