import React, { Component } from "react";

class Head extends Component{
    constructor(){
        super();
        this.state = {
            active: false
        }
        this.toggleActive = this.toggleActive.bind(this);
    }


    toggleActive(){
        if(this.state.active == false){
            this.setState({active: true});
            this.props.activeState('active');
        }else{
            this.props.activeState('');
            this.setState({active: false});
        }
    }

    render(){
        return(
            <div id="header">
                <div className="wrapper">
                    <img src={require('./images/logo.png')} className="idea_me_logo" alt="Idea Me Logo"/>
                    <button onClick={this.toggleActive}></button>
                </div>
                <div id="overlay" className={(this.state.active) ? 'active' : ''} onClick={this.toggleActive}></div>
            </div>
        );
    }
}


export default Head;