import React from 'react';
import data from '../data';

class Tags extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeHouse: "",
            activePerson: "",
        };
    }
    handleHouse = (house) => {
        this.setState({
            activeHouse: house,
        })
    }
    handlePerson = (person) => {
        this.setState({
            activePerson: person.image,
        })
    }
    render(){
        let houseNames = data.map((house) => house.name);
        let housePeople = data.reduce((acc,house) => {
            acc = acc.concat(house.people);
            return acc;
        },[]);
        console.log(housePeople);
        return(
            <>
            <div>
            <ul className='flex'>
            {
                houseNames.map((house) => (
                    <li key={house} onClick={() => this.handleHouse(house)} className='tags'>{house}</li>
                ))
            }
            </ul>
            </div>
            <div>
            <ul>
                {
                    housePeople.map((person) => (
                        <img className='img'
                        key={person.name} 
                        src={person.image} 
                        alt={person.image}
                        onClick={() => this.handlePerson(person.image)} />
                    ))
                }
            </ul>
            </div>
            </>
        )
    }
}

export default Tags;