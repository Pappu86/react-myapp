import React, {Component} from 'react';

class LogInOut extends Component {
    constructor() {
        super();
        this.state={
            login:true
        }
    }

    logOut=()=>{
        this.setState({login:false});
    }

    logIn=()=>{
        this.setState({login:true});
    }

    render() {
        if (this.state.login === true) {
            return (
                <div>
                    <button className="btn btn-primary" onClick={this.logOut}>Log Out</button>
                </div>
            );
        } else {
            return (
                <div>
                <button className="btn btn-primary" onClick={this.logIn}>Log In</button>
            </div>
        );
        }
    }
}

export default LogInOut;