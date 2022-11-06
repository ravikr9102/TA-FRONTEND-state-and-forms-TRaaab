import React from 'react';
import data from '../data';

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeHouse: '',
      activePerson: '',
    };
  }
  handleHouse = (house) => {
    this.setState({
      activeHouse: house,
    });
  };
  handlePerson = (person) => {
    this.setState({
      activePerson: person.name,
    });
  };
  render() {
    let houseNames = data.map((house) => house.name);

    let housePeople;
    if (!this.state.activeHouse) {
      housePeople = data.reduce((acc, house) => {
        acc = acc.concat(house.people);
        return acc;
      }, []);
    } else{
        housePeople = data.find(house => house.name === this.state.activeHouse).people
    }
    return (
      <>
        <section className="main">
          <div>
            <ul className="flex">
              {houseNames.map((house) => (
                <li
                  key={house}
                  onClick={() => this.handleHouse(house)}
                  className="tags"
                >
                  {house}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div>
              {housePeople.map((person) => (
                <img
                  className="img"
                  key={person.name}
                  src={person.image}
                  alt={person.name}
                  onClick={() => this.handlePerson(person)}
                />
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Tags;
