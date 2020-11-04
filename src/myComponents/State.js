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
       this.setState({name:name});
    }

    render() {
        return (
            <div>
                <h1 > {this.state.name} < /h1>
                <h3> {this.state.age} </h3>
                <button className="btn btn-primary" onClick={this.changeName.bind(this, "Zakaria")}>Change name</button>
            </div>
        );
    };
}

export default StateComponent;