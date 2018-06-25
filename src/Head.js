import React, { Component } from "react";

class Head extends Component{
    constructor(){
        super();
        toggleActive = props =>{
            this.setState({this.state.activeState: !this.state.activeState})
        }
    }

    render(){
        return(
            <div id="header">
                <div className="wrapper">
                    <img src={require('./images/logo.png')} className="idea_me_logo" alt="Idea Me Logo"/>
                    <button onClick={this.toggleActive}></button>
                </div>
            </div>
        );
    }
}


export default Head;