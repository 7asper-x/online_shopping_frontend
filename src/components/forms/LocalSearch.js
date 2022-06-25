import React from "react";

function LocalSearch(props) {
  const handleSearchChange = (e) => {
    e.preventDefault();
    props.setKeyword(e.target.value.toLowerCase());
  };

  return (
    <input
      type="search"
      placeholder="Filter"
      value={props.keyword}
      onChange={handleSearchChange}
      className="form-control mb-4"
    />
  );
}

export default LocalSearch;
