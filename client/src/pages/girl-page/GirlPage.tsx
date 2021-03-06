import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { usedTypedSelector } from "../../hooks/useTypedSelector";
import { gamesFetch } from "../../store/action-creator/games";
import { persDetail } from "../../store/action-creator/pers";

interface QueryParams {
  id: string;
}
export const GirlPage: React.FC = () => {
  const { id } = useParams<QueryParams>();
  const dispatch = useDispatch();
  const { detail, loading } = usedTypedSelector((state) => state.pers);
  useEffect(() => {
    dispatch(persDetail(id));
  }, []);
  if (!detail) {
    return <p>loading</p>;
  }

  return (
    <div className="page girl-page">
      <div className="banner">
        <img src={detail.bannerPath} alt="banner" />
      </div>
      <div className="banner-overlay"></div>
      <div className="container">
        <h2 className="text-light">{detail.name}</h2>
        <GameList girlID={id} />
      </div>
    </div>
  );
};

interface GameListProps {
  girlID: string;
}
const GameList: React.FC<GameListProps> = ({ girlID }) => {
  const dispatch = useDispatch();

  const { loading, games } = usedTypedSelector((state) => state.games);

  useEffect(() => {
    dispatch(gamesFetch(girlID));
  }, [dispatch]);

  if (loading) {
    return <p className="text-light">Loadig...</p>;
  }

  return (
    <div className="row justify-content-md-center">
      {games.map((el, i) => {
        return <GameCard element={el} key={i} />;
      })}
    </div>
  );
};

interface GameCardProps {
  element: any;
}
const GameCard: React.FC<GameCardProps> = ({ element }) => {
  const downloadHandler = () => {
    window.open(
      "http://dash.hentaigameshub.com/?d=" + element.apkurl,
      "_system"
    );
  };

  return (
    //
    <div className="col-6 col-lg-3">
      <div className="card bg-dark text-light" style={{ margin: "0.5rem" }}>
        <div className="card-img-wrapper">
          <img src={element.icon} className="card-img-top" alt="poster" />
        </div>
        <div className="card-body">
          <h5 className="card-title" style={{ minHeight: "6.2rem" }}>
            {element.name}
          </h5>
          <div className="row">
            <a className="btn btn-primary" onClick={downloadHandler}>
              Download
            </a>
          </div>
          <div className="row">
            <a
              href={element.weburl}
              target="_blank"
              className="btn btn-link text-red"
            >
              Play online
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
