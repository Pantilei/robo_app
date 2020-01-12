import React from "react";

const SearchBox = ({ onSearchChange, inputValue }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search for robot"
        onChange={onSearchChange}
        value={inputValue}
      />
    </div>
  );
};

export default SearchBox;
