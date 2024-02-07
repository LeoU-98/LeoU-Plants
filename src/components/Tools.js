import { React, useEffect, useState } from "react";

export function Tools({ children }) {
  return <div className="tools">{children}</div>;
}

export function Search({ onSearch, data }) {
  const [searched, setSearched] = useState("");

  useEffect(
    function () {
      const result = data.filter((el) =>
        el.name.toLowerCase().startsWith(searched.toLowerCase())
      );

      onSearch({ type: "search", payload: result });

      return () => onSearch({ type: "cleanUp" });
    },
    [searched, data, onSearch]
  );

  return (
    <div className="search">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
      </svg>
      <input
        type="text"
        placeholder="Search"
        value={searched}
        onChange={(e) => setSearched(e.target.value)}
      />
    </div>
  );
}

export function Sort({ onSort }) {
  return (
    <div className="sort">
      <label>Sort By</label>
      <select onChange={(e) => onSort({ type: e.target.value })}>
        <option value="name">Name</option>
        <option value="lth">Low to High</option>
        <option value="htl">High to Low</option>
      </select>
    </div>
  );
}
