import React, {Component} from 'react';
import {render} from "@testing-library/react";

class StateComponent extends Component {
    constructor() {
        super();
        this.state = {
            name: "My name is Pappu",
            age: 34
        }
    }

    changeName=(name)=>{
       this.setState({name:name, age:4});
    }

    render() {
        return (
            <div>
                <h3 > {this.state.name} < /h3>
                <h5> {this.state.age} </h5>
                <button className="btn btn-primary" onClick={this.changeName.bind(this, "Zakaria")}>Change name</button>
            </div>
        );
    };
}

export default StateComponent;