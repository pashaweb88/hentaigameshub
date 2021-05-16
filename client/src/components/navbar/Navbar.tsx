import React from "react";

import { NavLink } from "react-router-dom";
import { usedTypedSelector } from "../../hooks/useTypedSelector";

export const Navbar: React.FC = () => {
  const { token } = usedTypedSelector((state) => state.auth);
  const isAuth = !!token;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink to="/main" className="navbar-brand">
          HENTAIGAMESHUB
        </NavLink>
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
        </div>
      </div>
    </nav>
  );
};
