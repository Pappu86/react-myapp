import React, {Component} from 'react';

class Welcome extends Component {
    ShowMe(){
        alert("I am Click me button");
    }
    render() {
        return (
            <div>
                <button onClick={this.ShowMe}>Click Me from class</button>
                <h1>{this.props.name}, I am a class component</h1>
            </div>
            );
    }
}

export default Welcome;