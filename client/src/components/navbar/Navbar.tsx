import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { usedTypedSelector } from "../../hooks/useTypedSelector";
import { searchClear, searchHandler } from "../../store/action-creator/search";

export const Navbar: React.FC = () => {
  const { token } = usedTypedSelector((state) => state.auth);
  const isAuth = !!token;
  const dispatch = useDispatch();
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.trim();
    if (searchValue.length === 0) {
      dispatch(searchClear());
    } else {
      dispatch(searchHandler(searchValue));
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-brand">HENTAIGAMESHUB</div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="#">
                Home
              </a> */}
              <NavLink to="/main" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              {isAuth && (
                <NavLink to="/admin" className="nav-link">
                  Adminka
                </NavLink>
              )}
            </li>
          </ul>

          <div className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={changeHandler}
            />
            {/* <button className="btn btn-primary" type="submit">
              Search
            </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};
