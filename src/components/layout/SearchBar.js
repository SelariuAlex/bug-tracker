import React from "react";

export const SearchBar = () => {
  return (
    <nav style={{ marginBottom: "30px" }}>
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input id="search" type="search" />
            <label className="label-icon" htmlFor="">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};
