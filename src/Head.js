import React, { Component } from "react";

const Head = props => {
    return(
        <div id="header">
            <div className="wrapper">
                <img src={require('./images/logo.png')} className="idea_me_logo" alt="Idea Me Logo"/>
                <button></button>
            </div>
        </div>
    );
}

export default Head;