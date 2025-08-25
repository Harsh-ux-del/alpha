import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
export default function Header(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg d-flex justify-content-start items-center space-x-2 bg-body-tertiary">
                    <Link className="navbar-brand" to="/">MY TODOS LIST</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                             <Link to="/Addtodo" className="nav-link active" aria-current="page">Addtodo</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                        </ul>
                    </div>
            </nav>
        </>
    )
}
Header.defaultProps = {
    title: "My title",
    searchBar: true
}
Header.propType = {
    title: PropTypes.string,
     searchBar: PropTypes.bool.isRequired
} 