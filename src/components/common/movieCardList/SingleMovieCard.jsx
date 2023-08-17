import "./SingleMovieCard.css";
const SingleMovieCard = (props) => {
  return (
    <>
      <div className="movie-card-container">
        <div className="movie-card-inner-container c-pointer">
          <img alt="movieimage" src={props.movie.image?.medium} />
          {props.num >= 0 && <div className="top-num">{props.num + 1}</div>}
          {props.newSeason && <div className="new-season-card">NEW SEASON</div>}
        </div>
      </div>
    </>
  );
};
export default SingleMovieCard;
