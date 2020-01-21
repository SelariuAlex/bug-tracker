import React from "react";

export const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a
        href="add-log-modal"
        className="btn-floating btn-large blue darken-2 model-trigger"
      >
        <i className="large material-icons">add</i>
      </a>
      <ul>
        <li>
          <a
            href="#tech-list-model"
            className="btn-floating green modal-trigger"
          >
            <i className="material-icons">person</i>
          </a>
        </li>
        <li>
          <a href="#tech-model" className="btn-floating red modal-trigger">
            <i className="material-icons">person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};
