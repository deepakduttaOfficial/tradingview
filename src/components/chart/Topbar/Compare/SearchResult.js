import React from "react";
import Table from "../Table";

const SearchResult = () => {
  return (
    <Table
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      symbleImage="https://s3-symbol-logo.tradingview.com/indices/dax.svg"
      symbleName="ES1!"
      description="Test compare value"
    />
  );
};

export default SearchResult;
