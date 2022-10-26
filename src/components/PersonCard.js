import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
       
    }
    render() {
        return (
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>{this.props.age}</p>
                <p>{this.props.hairColor}</p>
            </div>
        )
    }
}
export default PersonCard;
// Create a component called PersonCard that accepts the following props:

// firstName
// lastName
// age
// hairColor
// Then, display four PersonCard components that show four different people, using props.