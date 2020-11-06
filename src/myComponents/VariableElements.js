import React, {Component} from 'react';

class VariableElements extends Component {
    constructor() {
        super();
        this.state={
            login:false
        }
    }

    logOut=()=>{
        this.setState({login:false});
    }

    logIn=()=>{
        this.setState({login:true});
    }

    render() {
        return (
                this.state.login?<button className="btn btn-primary" onClick={this.logOut}>Log Out</button>:<button className="btn btn-primary" onClick={this.logIn}>Log In</button>
        );
    }
}

export default VariableElements;