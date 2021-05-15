import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { usedTypedSelector } from "../../hooks/useTypedSelector";
import { persFetch } from "../../store/action-creator/pers";

export const PersList: React.FC = () => {
  const { pers, loading } = usedTypedSelector((state) => state.pers);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("eff");
    if (pers.length === 0) {
      dispatch(persFetch());
    }
  }, [dispatch, pers.length]);

  if (loading) {
    return <div>loading</div>;
  }
  return (
    <div className="container">
      <div className="list-group">
        {pers.map((el, i) => {
          return (
            <button
              type="button"
              className="list-group-item list-group-item-action"
              aria-current="true"
              key={i}
            >
              {el.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};
