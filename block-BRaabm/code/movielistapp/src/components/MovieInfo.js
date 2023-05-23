function MovieInfo(props) {
  return (
    <>
    <div className="bg">
    <h4>{props.moreInfo.Actors}</h4>
      <figure>
        {props.moreInfo.Images.map((img) => (
          <img className="info-img" src={img} alt="" />
        ))}
      </figure>
      <button>X</button>
    </div>
    </>
  );
}

export default MovieInfo;
