import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'

export const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">{props.title}</NavLink>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
          </ul>
          {props.searchBarToggler ? <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> : ""
          }
        </div>
      </div>
    </nav>
  )
}

Header.defaultProps = {
  title: "Your title here!",
  searchBarToggler: true
}

Header.propTypes = {
  title: PropTypes.string,
  searchBarToggler: PropTypes.bool.isRequired,
}