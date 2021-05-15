import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { usedTypedSelector } from "../../hooks/useTypedSelector";
import { persFetch } from "../../store/action-creator/pers";
import { searchClear } from "../../store/action-creator/search";

export const TitlePage: React.FC = () => {
  const { loading, pers } = usedTypedSelector((state) => state.pers);
  const { search, active } = usedTypedSelector((state) => state.search);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchClear());
    if (pers.length === 0) {
      dispatch(persFetch());
    }
  }, [dispatch, pers.length]);

  if (loading) {
    return <p>loading ...</p>;
  }
  return (
    <div className="container">
      <div className="row" style={{ padding: 0 }}>
        {pers.map((el, i) => {
          if (active) {
            return (
              <>
                {el.name.indexOf(search) !== -1 ? (
                  <CardBlock element={el} key={i} />
                ) : null}
              </>
            );
          }
          return <CardBlock element={el} key={i} />;
        })}
      </div>
    </div>
  );
};

interface CardBlockProps {
  element: any;
}
const CardBlock: React.FC<CardBlockProps> = ({ element }) => {
  const history = useHistory();

  const clickHandler = () => {
    history.push("/girl/" + element._id);
  };
  return (
    <div
      className="card col-2 bg-dark text-light"
      style={{ margin: "0.5rem" }}
      onClick={clickHandler}
    >
      <img src={element.posterPath} className="card-img-top" alt="poster" />
      <div className="card-body">
        <h6 className="card-title" style={{ minHeight: "3rem" }}>
          {element.name}
        </h6>
        <button className="btn btn-primary" onClick={clickHandler}>
          View games
        </button>
      </div>
    </div>
  );
};
