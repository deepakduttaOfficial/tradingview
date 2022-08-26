import React from "react";
import Table from "../Table";

const SearchResult = () => {
  return (
    <div className=" py-1">
      <Table
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]}
        symbleImage="https://s3-symbol-logo.tradingview.com/indices/s-and-p-500.svg"
        symbleName="ES1!"
        description="E-MINI S&P 500 FUTURES"
      />
    </div>
  );
};

export default SearchResult;
