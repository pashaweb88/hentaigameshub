import React, { useState } from "react";
import { GameForm } from "../components/aminka/GameForm";
import { PersForm } from "../components/aminka/PersForm";
import { PersList } from "../components/aminka/PersList";

export const AdminPage: React.FC = () => {
  const navLinks = [
    { name: "Girls", active: true },
    { name: "Add girl", active: false },
    { name: "Game form", active: false },
  ];

  const switchHandler = (index: number) => {
    setCurrentPage(index);
  };
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="page admin-page">
      <div className="container">
        <div className="col-6">
          <div className="row ">
            <ul className="nav">
              {navLinks.map((el, i) => {
                return (
                  <li
                    className="nav-item"
                    style={{ cursor: "pointer" }}
                    onClick={switchHandler.bind(null, i)}
                    key={i}
                  >
                    <div className="nav-link">{el.name}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {currentPage === 0 ? <PersList /> : null}
      {currentPage === 1 ? <PersForm /> : null}
      {currentPage === 2 ? <GameForm /> : null}
    </div>
  );
};
