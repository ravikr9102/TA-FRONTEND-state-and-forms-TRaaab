import React from 'react';
import data from '../data';
import Menu from './Menu';

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: "",
    }
  }
  handleClick = (category) => {
    this.setState({
      activeCategory: category,
    })
  }
  render() {
    let allData = data
    return (
      <>
      <nav>
        <ul className="flex justify-center tags">
          {['All', 'Breakfast', 'Lunch', 'Shakes'].map((category, i) => (
            <li  
            key={i}
            onClick={() => this.handleClick(category)}
            className={category === this.state.activeCategory ? "active" : ""}>
              {category}
            </li>
          ))}
        </ul>
      </nav>
      <section>
      <Menu allData={allData} />
      </section>
      </>
    );
  }
}

export default Cards;
