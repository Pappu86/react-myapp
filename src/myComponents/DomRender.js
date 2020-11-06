import React, {Component, useCallback} from 'react';
import ReactDOM from 'react-dom';

class DomRender extends Component {
    constructor() {
        super();
    }

    nameChange=()=>{
        let container=document.getElementById('myName'),
        element=<h2>My name is Zakaria. I am from ReactDom</h2>;
        var calback = function () {
            alert("This is callback");
        };
        ReactDOM.render(element, container, calback);
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.nameChange}>Change by react DomRender</button>
                <div id="myName">My name is Pappu</div>
            </div>
        );
    }
}

export default DomRender;