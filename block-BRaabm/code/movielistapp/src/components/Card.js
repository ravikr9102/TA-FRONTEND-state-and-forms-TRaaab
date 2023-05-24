import React from 'react';
import data from '../data';
import MovieInfo from './MovieInfo';

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      activeIndex: null,
    };
  }
  handleClick = (index) => {
    this.setState((prevState) => {
      return {
        isVisible: !prevState.isVisible,
      };
    });
    this.setState({
      activeIndex: index,
    });
  };
  render() {
    return (
      <>
        <ul className="main">
          {data.map((e, index) => (
            <li key={e.Title} className="flex-45">
              <div className="flex-row">
                <h2>{e.Title}</h2>
                <p>{e.Released}</p>
              </div>
              <img src={e.Images[0]} alt="" />
              <button onClick={() => this.handleClick(index)} className="btn">
                More Info
              </button>
            </li>
          ))}
        </ul>
        {this.state.isVisible ? (
          <MovieInfo
            moreInfo={data[this.state.activeIndex]}
          />
        ) : (
          ''
        )}
      </>
    );
  }
}

export default Cards;


