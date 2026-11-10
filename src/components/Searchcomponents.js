import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function SearchComponent({
  searchProduct,
  productSearchFunction,
  clearSearch,
}) {
  const navigate = useNavigate();

const handleSearch = (e) => {
  e.preventDefault();
  navigate("/shop");
};
  return (
<form className="navbar-search-wrapper" onSubmit={handleSearch}>      <div className="navbar-search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchProduct}
          onChange={productSearchFunction}
          className="navbar-search-input"
        />

        {searchProduct && (
          <button
            type="button"
            className="search-clear-btn"
            onClick={clearSearch}
          >
            ✕
          </button>
        )}
      </div>
   </form>
  );
}

export default SearchComponent;