import React, { Component } from 'react';

class Login extends Component{
    constructor(props){
        super(props)
        console.log(this.props.history);
    }
    render(){
        return(
            <div>LOGIN</div>
        );
    }
}

export default Login;