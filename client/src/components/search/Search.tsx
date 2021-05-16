import React from "react";
import { useDispatch } from "react-redux";
import { searchClear, searchHandler } from "../../store/action-creator/search";

export const Search = () => {
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
    <div className="row">
      <div className="col-12" style={{ padding: "5px" }}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={changeHandler}
        />
      </div>
    </div>
  );
};
