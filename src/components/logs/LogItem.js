import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteLog, setCurrent } from "../../redux/actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const onDeleteLog = () => {
    deleteLog(log.id);
    M.toast({ html: "Log deleted" });
  };
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
          onClick={() => setCurrent(log)}
        >
          {log.message}
        </a>
        <br />
        <span>
          <span className="black-text">ID #{log.id} </span>
          last updated by <span className="black-text">
            {" "}
            {log.tech}
          </span> on <Moment format="MMMM Do YYYY, h:mm:ss a"></Moment>
        </span>
        <a href="#!" className="secondary-content" onClick={onDeleteLog}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
