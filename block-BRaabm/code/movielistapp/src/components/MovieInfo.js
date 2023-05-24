import React from 'react';

class MovieInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplay: true,
    };
  }
  handleClose = () => {
    this.setState({
      isDisplay: !this.state.isDisplay,
    });
  };
  render() {
    return (
      <>
        {this.state.isDisplay ? (
          <div className="bg">
            <h4>{this.props.moreInfo.Actors}</h4>
            <figure>
              {this.props.moreInfo.Images.map((img) => (
                <img key={img} className="info-img" src={img} alt="" />
              ))}
            </figure>
            <p>{this.props.moreInfo.Genre}</p>
            <p>{this.props.moreInfo.Awards}</p>
            <p>{this.props.moreInfo.Language}</p>
            <button onClick={this.handleClose}>X</button>
          </div>
        ) : (
          ''
        )}
      </>
    );
  }
} 

export default MovieInfo;
