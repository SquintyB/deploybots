import React from "react";

function SearchBox({ onSearchChange }) {
  return (
    <div className="pa2">
      <input
        className="pa3 br3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search users"
        onChange={onSearchChange}
      ></input>
    </div>
  );
}

export default SearchBox;
