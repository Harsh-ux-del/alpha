import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Header(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg d-flex justify-content-start items-center space-x-2 bg-body-tertiary">
        <Link className="navbar-brand" to="/">
          My To do list
        </Link>
        <Link
          className="nav-link active mr-6"
          aria-current="page"
          to="/todo-list"
        >
          Add Todo
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
      </nav>
    </>
  );
}
Header.defaultProps = {
  title: "My title",
  searchBar: true,
};
Header.propType = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired,
};
