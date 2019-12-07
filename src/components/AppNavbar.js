import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  activateEditMode,
  deactivateEditMode
} from "../store/actions/modeActions";

const AppNavbar = props => {
  return (
    <nav className="AppNavbar navbar pb-0 navbar-expand bg-transparent navbar-light border-bottom-1">
      <NavLink
        style={{ display: props.editMode ? "flex" : "none" }}
        to={{ pathname: "/posts/create" }}
        className="createbtn"
      >
        +
      </NavLink>
      <NavLink className="navbar-brand ml-sm-4 ml-1" to={{ pathname: "/" }}>
        Mo Blog
      </NavLink>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="btn-group">
            <button
              type="button"
              className={
                props.editMode ? "btn-primary btn" : "btn-secondary btn"
              }
              data-toggle="modal"
              data-target="#modelId"
              onClick={props.activateEditMode}
            >
              Admin Mode
            </button>
            <button
              type="button"
              className={
                props.editMode ? "btn-secondary btn" : "btn-primary btn"
              }
              onClick={props.deactivateEditMode}
            >
              Reader Mode
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  editMode: state.editMode.editMode
});

export default connect(mapStateToProps, {
  activateEditMode,
  deactivateEditMode
})(AppNavbar);
