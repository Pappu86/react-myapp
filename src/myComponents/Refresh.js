import React, {Component} from 'react';

class Refresh extends Component {
    constructor() {
        super();
        this.refreshNow=this.refreshNow.bind(this);
    }

    refreshNow=()=>{
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.refreshNow}>Refresh Button</button>
                <h2>{Math.random()}</h2>
            </div>
        );
    }
}

export default Refresh;