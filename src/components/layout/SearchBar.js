import React, { useRef } from "react";
import { connect } from "react-redux";
import { searchLogs } from "../../redux/actions/logActions";

const SearchBar = ({ searchLogs }) => {
  const text = useRef("");

  const onSearch = e => {
    searchLogs(text.current.value);
  };

  return (
    <nav style={{ marginBottom: "30px" }}>
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search Logs..."
              ref={text}
              onChange={onSearch}
            />
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

export default connect(null, { searchLogs })(SearchBar);
