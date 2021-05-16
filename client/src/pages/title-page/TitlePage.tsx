import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Search } from "../../components/search/Search";
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
    <div className="page title-page">
      <div className="container">
        <Search />
        <div className="row" style={{ padding: 0 }}>
          {pers.map((el, i) => {
            if (active) {
              return (
                <React.Fragment key={i}>
                  {el.name.toLowerCase().indexOf(search.toLowerCase()) !==
                  -1 ? (
                    <CardBlock element={el} key={i} />
                  ) : null}
                </React.Fragment>
              );
            }
            return <CardBlock element={el} key={i} />;
          })}
        </div>
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
    <div className="col-6 col-lg-3" style={{ padding: "5px" }}>
      <div className="card   bg-dark text-light" onClick={clickHandler}>
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
    </div>
  );
};
