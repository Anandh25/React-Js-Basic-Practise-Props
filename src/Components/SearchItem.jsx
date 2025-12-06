import React from "react";

const SearchItem = ({ search, setSearch }) => {
  return (
    <div>
      <form
        action=""
        className="searchForm"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          role="searchBox"
          placeholder="Search Items"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchItem;
